<!--
timepicker pane
-->
<template lang="jade">
  .time-picker(:class="timepickerClasses")
    //- hours
    .time-picker__section
      .time-picker__title hh
      ul.time-picker__select
        li.time-picker__option(
          v-for="_hour of hourList",
          v-scroll-active="_hour.value === hour",
          :class="{'is-active': _hour.value === hour, 'is-disabled': _hour.disabled }",
          @click.prevent="_handleClick($event, 'hour', _hour)",
          ) {{ _formatNumber(_hour.value) }}

    //- minute
    .time-picker__section
      .time-picker__title mm
      ul.time-picker__select
        li.time-picker__option(
          v-for="_minute in minuteList",
          v-scroll-active="_minute.value === minute",
          :class="{'is-active': _minute.value === minute, 'is-disabled': _minute.disabled}",
          @click.prevent="_handleClick($event, 'minute', _minute)",
          ) {{ _formatNumber(_minute.value) }}

    //- second
    .time-picker__section(v-if="showSeconds")
      .time-picker__title ss
      ul.time-picker__select
        li.time-picker__option(
          v-for="_second in secondList",
          v-scroll-active="_second.value === second",
          :class="{'is-active': _second.value === second, 'is-disabled': _second.disabled}",
          @click.prevent="_handleClick($event, 'second', _second)",
          ) {{ _formatNumber(_second.value) }}
</template>

<script>
  import Control from '../control'
  import { coerceBoolean } from '../../_helpers/coerces.js'
  import { dateFormat } from '../../_helpers/util.js'

  /**
  * 合并禁用时间项和可用时间项
  * @param {Array} array - 禁用的时间项数组
  * @param {Number} count - 数量
  * @param {Function} processItem - 数据时间项，processItem(index, isDisabled)
  */
  function combindSection (array, count, processItem) {
    array = Array.isArray(array) ? array : []
    let out = []

    for (let i = 0; i < count; i++) {
      out[i] = processItem(i, false)
    }

    // 稀疏数组
    for (let i of array) {
      if (i < count) {
        out[i] = processItem(i, true)
      }
    }

    return out
  }

  export default {
    name: 'TimepickerPane',
    mixins: [
      Control
    ],
    directives: {
      /**
      * 在时间项被激活时滚动
      */
      scrollActive (value) {
        if (value) {
          this.vm.$nextTick(()=> {
            const el = this.el
            const parent = el.parentElement
            if (!this.scrollTop) {
              const top = parent.offsetHeight / 2 - el.offsetHeight / 2
              this.scrollTop = el.offsetTop - top
            }

            parent.scrollTop = this.scrollTop
          })
        }
      }
    },

    props: {
      // in Control
      // - name
      // - value        *
      // - disabled     *
      // - size         *

      separator: {
        default: ':'
      },

      format: {
        type: String,
        default: 'HH:mm:ss'
      },

      // 禁用的小时项，返回数组
      disabledHours: {
        type: Function,
        default: () => []
      },

      disabledMinutes: {
        type: Function,
        default: () => []
      },

      disabledSeconds: {
        type: Function,
        default: () => []
      },

      showDisabledItem: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      },

      // 是否显示秒，精确到秒的场景不多
      showSeconds: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      }
    },

    data () {
      return {
        date: new Date()
      }
    },

    computed: {
      timepickerClasses () {
        return [
          this.size && `--${this.size}`,
          {
            'hide-disabled': !this.showDisabledItem
          }
        ]
      },

      hour () {
        return this.date && this.date.getHours()
      },

      minute () {
        return this.date && this.date.getMinutes()
      },

      second () {
        return this.date && this.date.getSeconds()
      },

      hourList () {
        return combindSection(this.disabledHours(), 24, (value, disabled) => ({value, disabled}))
      },

      minuteList () {
        return combindSection(this.disabledMinutes(), 60, (value, disabled) => ({value, disabled}))
      },

      secondList () {
        return combindSection(this.disabledSeconds(), 60, (value, disabled) => ({value, disabled}))
      }
    },
    methods: {
      clear () {
        this.$changeInner(() => {
          this.value = ''
          this.date = new Date()
          this.$notify('onchange', null, {value: this.value})
        })
      },

      /**
      * 格式化数字
      */
      _formatNumber (value) {
        return ('0' + value).slice(-2)
      },

      /**
      * 解析value
      */
      _parse (value) {
        if (value == null) return
        let date = new Date()

        if (typeof value === 'string') {
          let [hour, minute, second] = value.split(this.separator)
          let time = new Date(0, 0, 0, hour, minute, second)
          if (!Number.isNaN(time.getTime())) {
            date = time
          }
        } else if (value instanceof Date) {
          date = value
        }

        this.date = date
      },

      _handleClick (event, section, item) {
        const { value, disabled } = item
        if (disabled || value === this[section]) return
        this._setValue(section, value)
      },

      _setValue (section, value) {
        switch (section) {
          case 'hour':
            this.date.setHours(value)
            break
          case 'minute':
            this.date.setMinutes(value)
            break
          default:
            this.date.setSeconds(value)
            break
        }

        this.date = new Date(this.date)
        this._onChange()
      },

      _onChange () {
        this.$changeInner(() => {
          this.value = dateFormat(this.date, this.format)
          this.$notify('onchange', null, {value: this.value})
        })
      }
    },

    created () {
      this._parse(this.value)
    },

    watch: {
      'value' (value) {
        if (this.$isChangingInner()) {
          return
        } else {
          this._parse(value)
        }
      }
    }
  }
</script>
