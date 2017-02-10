<!-- 
rangepicker pane 
-->
<template lang="jade">
  .rangepicker
    //- from
    .rangepicker__content
      datepicker-pane(
        v-ref:from,
        :allow-timepicker="allowTimepicker",
        :can-change-month="$_bind(_canChangeMonth, 'from')",
        :date-filter="dateFilter",
        :day-names="dayNames",
        :disabled-hours="disabledHours",
        :disabled-minutes="disabledMinutes",
        :disabled-seconds="disabledSeconds",
        :format="format",
        :in-range="_inRange",
        :is-second="isSecond",
        :is-active="_isActive",
        :month-names="monthNames",
        :now-text="nowText",
        @onchange="_handleChange",
        @onhover="_onHover",
        :show-adjacent-month="false",
        :show-disabled-item="showDisabledItem",
        :show-seconds="showSeconds",
        :show-shortcut="false",
        :size="size",
        :today-text="todayText",
        :value="fromMonth",
        )
    //- to
    .rangepicker__content
      datepicker-pane(
        v-ref:to,
        :allow-timepicker="allowTimepicker",
        :can-change-month="$_bind(_canChangeMonth, 'to')",
        :date-filter="dateFilter",
        :day-names="dayNames",
        :disabled-hours="disabledHours",
        :disabled-minutes="disabledMinutes",
        :disabled-seconds="disabledSeconds",
        :format="format",
        :in-range="_inRange",
        :is-active="_isActive",
        :is-second="isSecond",
        :month-names="monthNames",
        :now-text="nowText",
        @onchange="_handleChange",
        @onhover="_onHover",
        :show-adjacent-month="false",
        :show-disabled-item="showDisabledItem",
        :show-seconds="showSeconds",
        :show-shortcut="false",
        :size="size",
        :today-text="todayText",
        :value="toMonth",
        )
    .rangepicker__foot.text-right
      button.button.--primary.--flat.--tiny(
        @click.prevent="gotoToday",
        )  跳转到今天 
      button.button.--primary.--outline.--tiny(
        :class="{'is-disabled': !canDone}",
        @click.prevent="_done",
        ) 确定
</template>

<script>
  import DatepickerPane from './pane'
  import Control from '../control'
  import { dateFormat } from '../../_helpers/util.js'
  import {Button} from '../../button'
  const TEST_FORMAT = 'YYYY-MM-DD'

  export default {
    name: 'RangepickerPane',
    mixins: [
      Control
    ],
    components: {
      DatepickerPane,
      Button
    },

    props: {
      // in Control
      // - name
      // - value         value 是一个数组[from, to]
      // - defaultValue
      // - disabled
      // - size

      // for datepicker
      format: {},
      isSecond: {},
      dayNames: {},
      monthNames: {},
      todayText: {},
      nowText: {},
      allowTimepicker: {},
      dateFilter: {},
      // for timepicker
      disabledHours: Function,
      disabledMinutes: Function,
      disabledSeconds: Function,
      showDisabledItem: {},
      showSeconds: {}
    },

    data () {
      let fromMonth = new Date()
      let toMonth = new Date()
      toMonth.setMonth(fromMonth.getMonth() + 1)

      return {
        fromMonth,
        toMonth,
        // 当前可选的状态
        currentHandle: 'from',
        // 起始时间
        fromDate: null,
        // 结束时间
        toDate: null,
        // 临时结束时间
        tempToDate: null
      }
    },

    computed: {
      canDone () {
        return this.fromDate != null && this.toDate != null
      }
    },

    methods: {
      /**
       * 将日历跳转到当前月
       */
      gotoToday () {
        let today = new Date()
        this.$refs.from.setDate(today)
        this.$refs.to.setDate(this._getNextMonth(today))
      },

      clear () {
        this.$changeInner(() => {
          this.value = []
          this.fromDate = this.toDate = null
          this.currentHandle = 'from'

          this.$changeInner(() => {
            this.value = []
            this.$notify('onchange', null, {
              date: [],
              value: []
            })
          })
        })
      },

      _done () {
        if (!this.canDone) return
        let stringify = this.$refs.from.stringify
        let date = [new Date(this.fromDate), new Date(this.toDate)]
        let value = [stringify(this.fromDate), stringify(this.toDate)]

        this.$changeInner(() => {
          this.value = value
          this.$notify('onchange', null, {
            date,
            value
          })
        })
      },

      _onHover ({date, direction}) {
        if (direction === 'enter') {
          if (this.fromDate && this.toDate == null && date > this.fromDate) {
            this.tempToDate = date
          } else {
            this.tempToDate = null
          }
        }
      },

      /**
       * 是否在起始和结束时间区间内
       * @param  {Date} date 当前时间
       */
      _inRange (date) {
        if (this.fromDate && (this.toDate || this.tempToDate)) {
          // ⚠  不要直接使用date对象进行比较, 会出现相同日期无法相等的问题
          const dateT = date.getTime()
          const fromT = this.fromDate.getTime()
          const toT = (this.toDate || this.tempToDate).getTime()
          return dateT >= fromT && dateT <= toT
        } else {
          return false
        }
      },

      _canChangeMonth (direction, date) {
        // 在这个函数被调用时，子组件可能还没ready, vue2.0 中提供了lazy表达式可以解决这个问题
        if (this.$refs.from == null || this.$refs.to == null) {
          return true
        }

        date = this._unifyMonth(date)
        let fromDate = this._unifyMonth(this.$refs.from.getDate() || new Date())
        let toDate = this._unifyMonth(this.$refs.to.getDate() || this._getNextMonth(new Date()))

        if (direction === 'from') {
          // 不能大于 to
          return date < toDate
        } else {
          // 不能小于 from
          return date > fromDate
        }
      },

      _handleChange ({value, date}) {
        date = this._unifyDate(date)

        if (this.currentHandle === 'from') {
          this.fromDate = date
          this.toDate = null
          this.currentHandle = 'to'
        } else {
          // 结束日期在开始日期之前，重设开始日期
          if (date <= this.fromDate) {
            this.fromDate = date
            this.toDate = null
            this.currentHandle = 'to'
          } else {
            this.toDate = date
            this.currentHandle = 'from'
          }
        }
      },

      _isActive (date) {
        const dateFormatted = this._normalize(date)
        const fromDateFormatted = this._normalize(this.fromDate)
        const toDateFormatted = this._normalize(this.toDate)

        return dateFormatted === fromDateFormatted || dateFormatted === toDateFormatted
      },

      /**
       * 统一时间，如果不支持时间选择，所有时间字段都为0, 这样在范围比较时较为精确
       * @param  {Date} date
       * @return {Date}
       */
      _unifyDate (date) {
        date = new Date(date)
        if (this.allowTimepicker) {
          return date
        } else {
          // ms 也需要设置
          date.setHours(0, 0, 0, 0)
          return date
        }
      },

      /**
       * 用于月份比较，忽略日期和时间
       */
      _unifyMonth (date) {
        date = new Date(date)
        date.setDate(1)
        date.setHours(0, 0, 0, 0)
        return date
      },

      _getNextMonth (date) {
        date = new Date(date)
        date.setMonth(date.getMonth() + 1)
        return date
      },

      _normalize (date) {
        if (date) {
          return dateFormat(date, TEST_FORMAT)
        }
      },

      _stringify (date) {
        return this.$refs.from.stringify(date)
      },

      _parseDate (value) {
        return this.$refs.from._parse(value)
      },

      _parse (value) {
        this.fromDate = this.toDate = null
        if (value == null || !Array.isArray(value)) return

        const [fromValue, toValue] = value
        let fromDate = this._parseDate(fromValue)
        let toDate = this._parseDate(toValue)

        if (fromDate && toDate) {
          if (fromDate > toDate) {
            [fromDate, toDate] = [toDate, fromDate]
          }
          this.fromDate = fromDate
          this.toDate = toDate
        } else if (fromDate) {
          this.fromDate = fromDate
        }

        if (this.fromDate) {
          this.fromMonth = this._unifyMonth(this.fromDate)

          if (this.toDate) {
            let toMonth = this._unifyMonth(this.toDate)
            if (toMonth.getTime() === this.fromMonth.getTime()) {
              this.toMonth = this._getNextMonth(toMonth)
            } else {
              this.toMonth = toMonth
            }
          }
        }
      }
    },

    ready () {
      this._parse(this.value)
    },

    watch: {
      'value' (value, oldValue) {
        if (value !== oldValue && !this.$isChangingInner()) {
          this._parse(value)
        }
      }
    }
  }
</script>