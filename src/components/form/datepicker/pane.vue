<template lang="jade">
  .datepicker(:class="datepickerClasses")
    //- control
    .datepicker__head
      .datepicker__title
        span.datepicker__year {{ yearText }}/
        span.datepicker__month {{ monthText }}
      .datepicker__ctrl
        icon.datepicker__btn(
          awesome, 
          name="angle-left", 
          :class="{'is-disabled': !_canChangeLastMonth}", 
          @click.prevent="_changeMonth('up')"
          )
        icon.datepicker__btn(
          awesome, 
          name="angle-right", 
          :class="{'is-disabled': !_canChangeNextMonth}",  
          @click.prevent="_changeMonth('down')"
          )
      .datepicker__time(v-if="allowTimepicker")
        span {{ hourText }}:
        span {{ minuteText }}
    .datepicker__content
      table.datepicker__content-inner(:class="{'element-invisible': timepickerShow}")
        //- week
        thead
          tr.datepicker__week-range
            td.datepicker__week(v-for="day in dayNames") {{ day }}
        //-date
        tbody
          tr.datepicker__date-range(v-for="row of dateList.length / 7")
            //- 将class分割为多个表达式，只保留静态部分，从而避免整个表达式重复调用,优化性能
            td.datepicker__day(
              v-for="item of _getDateList(row)",
              track-by="id",
              :is-active="_isActive(item.time)",
              :is-disabled="_isDisabled(item.time)",
              :is-in-range="_isInRange(item.time)",
              :class="[{'is-pass': item.isPass, 'is-future': item.isFuture, 'is-today': _isToday(item.time)}]"
              @click.stop.prevent="_pickDate(item)",
              @mouseenter="_onHover($event, 'enter', item)",
              @mouseleave="_onHover($event, 'leave', item)",
              )
                span.datepicker__day-inner {{ item.value }}

      //- timepicker
      .datepicker__content-inner(v-if="allowTimepicker", :class="{'element-invisible': !timepickerShow}")
        timepicker-pane(
          v-ref:timepicker,
          :disabled-hours="disabledHours",
          :disabled-minutes="disabledMinutes",
          :disabled-seconds="disabledSeconds",
          :show-disabled-item="showDisabledItem",
          :show-seconds="showSeconds",
          :value="date",
          @onchange="_handleTimeChange",
          )
    //- shortcut
    .datepicker__foot(v-if="showShortcut")
      button.button.--primary.--flat.--tiny.--block(@click.stop.prevent="pickNow", :class="{'is-disabled': !canPickNow}") {{ _nowText }}
    .datepicker__foot.text-right(v-if="allowTimepicker")
      button.button.--primary.--flat.--tiny(@click.prevent="_toggleTimepicker") {{ timepickerShow ? '选择日期' : '选择时间' }}
      button.button.--primary.--outline.--tiny(@click.stop.prevent="_done") 确定
</template>

<script>
  import Control from '../control'
  import TimepickerPane from '../timepicker/pane'
  import {Button} from '../../button'
  import { coerceBoolean } from '../../_helpers/coerces.js'
  import {Icon} from '../../icon'
  const TEST_FORMAT = 'YYYY-MM-DD'

  // 缓存
  let monthCache = {}

  window.monthCache = monthCache

  export default {
    name: 'DatepickerPane',
    mixins: [
      Control
    ],
    components: {
      TimepickerPane,
      Button,
      Icon
    },
    props: {
      // in Control
      // - name
      // - value        *
      // - defaultValue *
      // - disabled     *
      // - size         *
      format: {
        type: String,
        default: 'YYYY-MM-DD'
      },

      // 一些从后端返回的数据是秒为单位的时间戳
      isSecond: {
        type: Boolean,
        default: false,
        coerce: coerceBoolean
      },

      dayNames: {
        type: Array,
        default: () => ['日', '一', '二', '三', '四', '五', '六']
      },

      monthNames: {
        type: Array,
        default: () => ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      },

      todayText: {
        type: String,
        default: '今天'
      },

      nowText: {
        type: String,
        default: '现在'
      },

      // 过滤时间, 当返回false时禁用
      dateFilter: {
        type: Function,
        default: () => true
      },

      // 允许时间选择
      allowTimepicker: {
        coerce: value => !!value
      },

      // 是否显示相邻月的天数
      showAdjacentMonth: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      },

      // 是否显示快捷
      showShortcut: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      },

      // timepicker props
      disabledHours: Function,
      disabledMinutes: Function,
      disabledSeconds: Function,
      showDisabledItem: {},
      showSeconds: {},

      /**
       *  private props
       */

      // @private
      // 表示当前时间是否在区间内，配合rangepicker 使用
      inRange: {
        type: Function,
        default: () => false
      },

      // @private
      // 判断是否激活
      isActive: {
        type: Function
      },

      // @private
      // 是否可以跳转月
      canChangeMonth: {
        type: Function
      }
    },

    data () {
      return {
        // 当前选中的时间的Date对象
        date: new Date(),
        // 保存当前月的所有date
        dateList: [],
        // time
        time: {
          hour: 0,
          minute: 0
        },

        timepickerShow: false
      }
    },

    computed: {
      datepickerClasses () {
        return [
          {
            '--hide-adjacent': !this.showAdjacentMonth
          }
        ]
      },

      _nowText () {
        return this.allowTimepicker ? this.nowText : this.todayText
      },

      yearText () {
        return this.date.getFullYear()
      },

      monthText () {
        const month = this.date.getMonth()
        return this.monthNames[month] || month + 1
      },

      hourText () {
        return ('0' + (this.time.hour || this.date.getHours())).slice(-2)
      },

      minuteText () {
        return ('0' + (this.time.minute || this.date.getMinutes())).slice(-2)
      },

      /**
       * 今天
       * @return {String} 规范化的日期字符串，用于比较
       */
      _today () {
        return this.stringify(new Date(), TEST_FORMAT)
      },

      /**
       * 当前激活的日期
       * @return {String} 规范化的日期字符串，用于比较
       */
      _currentActive () {
        let tempDate = this._parse(this.value)
        return tempDate && this.stringify(tempDate, TEST_FORMAT)
      },

      /**
       * 能否选择此刻
       * @return {Boolean}
       */
      canPickNow () {
        return this.dateFilter(new Date())
      },

      /**
       * 能否切换到上一月
       * @return {Boolean}
       */
      _canChangeLastMonth () {
        if (typeof this.canChangeMonth === 'function') {
          let date = new Date(this.date)
          date.setMonth(date.getMonth() - 1)
          return this.canChangeMonth(date)
        } else {
          return true
        }
      },

      /**
       * 能否切换到下一月
       * @return {Boolean}
       */
      _canChangeNextMonth () {
        if (typeof this.canChangeMonth === 'function') {
          let date = new Date(this.date)
          date.setMonth(date.getMonth() + 1)
          return this.canChangeMonth(date)
        } else {
          return true
        }
      }
    },

    methods: {
      _getDateList (row) {
        const offset = row * 7
        return this.dateList.slice(offset, offset + 7)
      },

      getDate () {
        return this.date
      },

      setDate (date) {
        this.date = date
      },

      clear () {
        this.$changeInner(() => {
          this.value = ''
          this.date = new Date()
          this._onChange()
        })
      },

      _toggleTimepicker () {
        this.timepickerShow = !this.timepickerShow
      },

      _onChange () {
        this.timepickerShow = false
        this.$notify('onchange', null, {
          value: this.value,
          date: new Date(this.date)
        })
      },

      _changeYear (value) {
        // ⚠️直接设置setFullYear 并不会被vue捕获更新，所以必须手动重置
        // 设置为每个月的第一天,原因见changeMonth(),因为2月份在闰年时跟相邻的年不一样
        this.date.setFullYear(this.date.getFullYear() + value, this.date.getMonth(), 1)
        this.date = new Date(this.date)
      },

      _changeMonth (direction) {
        let month
        if (direction === 'up' && this._canChangeLastMonth) {
          month = this.date.getMonth() - 1
        } else if (direction === 'down' && this._canChangeNextMonth) {
          month = this.date.getMonth() + 1
        } else {
          return
        }

        // 设置为每个月的1号，避免出现点击一次跳了两个月的情况(比如当前是10/31，点击下一月，则是11/31, 由于11月没有31号，所以会被当作12/1处理)
        this.date.setMonth(month, 1)
        this.date = new Date(this.date)
      },

      _handleTimeChange () {
        const timepickerDate = this.$refs.timepicker.date
        let date = this.date
        let hour = timepickerDate.getHours()
        let minute = timepickerDate.getMinutes()

        // 不改变date, 因为会导致regenerate
        date.setHours(hour)
        date.setMinutes(minute)
        this.time.hour = hour
        this.time.minute = minute
      },

      _onHover (event, direction, item) {
        this.$notify('onhover', event, {
          direction,
          date: item.time
        })
      },

      /**
      * 选中日期
      */
      _pickDate (item) {
        if (this._isDisabled(item.time)) return

        this.$changeInner(() => {
          const time = item.time
          this.date.setFullYear(time.getFullYear())
          this.date.setMonth(time.getMonth())
          this.date.setDate(time.getDate())
          this.date = new Date(this.date)
          this.value = this.stringify()

          if (!this.allowTimepicker) {
            this._onChange()
          }
        })
      },

      pickNow () {
        if (!this.canPickNow) return
        this.$changeInner(() => {
          const now = new Date()
          this.date.setFullYear(now.getFullYear(), now.getMonth(), now.getDate())
          this.date.setHours(now.getHours(), now.getMinutes(), now.getSeconds())
          this.date = new Date(this.date)
          this.value = this.stringify()
          this._onChange()
        })
      },

      _done () {
        this.$changeInner(() => {
          this.date = new Date(this.date)
          this.value = this.stringify()
          this._onChange()
        })
      },

      /**
      * 格式化时期
      */
      stringify (date = this.date, format = this.format) {
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const hour = date.getHours()
        const hour12 = hour <= 12 ? hour : hour - 12
        const minute = date.getMinutes()
        const second = date.getSeconds()
        const monthName = this.monthNames[month - 1]

        let map = {
          YYYY: year,
          MMM: monthName,
          MM: ('0' + month).slice(-2),
          M: month,
          DD: ('0' + day).slice(-2),
          D: day,
          H: hour,
          HH: ('0' + hour).slice(-2),
          h: hour12,
          hh: ('0' + hour12).slice(-2),
          m: minute,
          mm: ('0' + minute).slice(-2),
          s: second,
          ss: ('0' + second).slice(-2)
        }

        return format.replace(/Y+|M+|D+|H+|h+|m+|s+/g, (str) => {
          return map[str]
        })
      },

      /**
       * 日期是否激活
       * @param  {Date}  date 输入日期
       * @return {Boolean}
       */
      _isActive (date) {
        if (typeof this.isActive === 'function') {
          return this.isActive(date)
        } else {
          // 只比较规范化的日期字符串
          const currentValue = this.stringify(date, TEST_FORMAT)
          return this._currentActive === currentValue
        }
      },

      _isToday (date) {
        const currentValue = this.stringify(date, TEST_FORMAT)
        return currentValue === this._today
      },

      _isDisabled (date) {
        return !this.dateFilter(date)
      },

      _isInRange (date) {
        return this.inRange(date)
      },

      /**
      * 生成当月的所有数据
      * @private
      */
      _generateDate () {
        const cacheKey = `${this.date.getFullYear()}${this.date.getMonth()}`
        if (cacheKey in monthCache) {
          this.dateList = monthCache[cacheKey]
          return
        }

        let arr = []

        let time = new Date(this.date)
        // 获取当月的第一天
        time.setMonth(time.getMonth(), 1)
        // 当月第一天的星期数
        let curFirstDay = time.getDay()

        /** 获取上个月的最后几天 **/
        // 更新为上个月的最后一天
        time.setDate(0)
        let lastDayCount = time.getDate()

        let tempYear = time.getFullYear()
        let tempMonth = time.getMonth()

        for (let i = curFirstDay; i > 0; i--) {
          let date = lastDayCount - i + 1
          let time = new Date(tempYear, tempMonth, date)
          arr.push({
            time,
            id: time.getTime(),
            value: date,
            isPass: true
          })
        }

        /** 当月的日期数据 **/
        // 移动到获取当月的最后一天
        time.setMonth(time.getMonth() + 2, 0)
        // 当月的天数
        const curDayCount = time.getDate()
        tempYear = time.getFullYear()
        tempMonth = time.getMonth()

        for (let i = 1; i <= curDayCount; i++) {
          let time = new Date(tempYear, tempMonth, i)
          arr.push({
            time,
            id: time.getTime(),
            value: i
          })
        }

        /** 下个月的前几天 **/
        let count = arr.length <= 35 ? 35 : 42
        let j = 1
        let l = count - arr.length + 1
        time.setMonth(tempMonth + 1, 1)
        tempYear = time.getFullYear()
        tempMonth = time.getMonth()
        while (j < l) {
          let time = new Date(tempYear, tempMonth, j)
          arr.push({
            time,
            id: time.getTime(),
            value: j,
            isFuture: true
          })
          j++
        }

        // freeze object
        this.dateList = monthCache[cacheKey] = Object.freeze(arr)
      },

      /**
      * 解析value
      * @private
      * @param {String|Date|Number} value - 输入值
      */
      _parse (value) {
        if (value == null || value === '') return null
        if (!(value instanceof Date)) {
          let time = new Date(value)
          if (Number.isNaN(time.getTime())) {
            let toNumber = Number.parseInt(value)
            if (Number.isNaN(toNumber)) {
              return null
            } else {
              return new Date(this.isSecond ? toNumber * 1000 : toNumber)
            }
          } else {
            return time
          }
        } else {
          return value
        }
      },

      /**
       * 更新 state
       */
      _update () {
        const date = this._parse(this.value)
        if (date) {
          this.$changeInner(() => {
            this.date = date
            this.time.hour = this.date.getHours()
            this.time.minute = this.date.getMinutes()
            this.value = this.stringify()
          })
        } else {
          this.date = new Date()
        }
      }
    },

    ready () {
      this._update()
    },

    watch: {
      /**
      * 监视now并生成新的日期列表
      */
      date () {
        this._generateDate()
      },

      /**
      * 监视value， value可能从外部被改变，需要重新解析
      */
      value (value, oldValue) {
        if (value !== oldValue && !this.$isChangingInner()) {
          this._update()
        }
      }
    }
  }
</script>