<!-- 
日期选择器
@author ivan
@date 2016.9.24
-->
<template lang="jade">
  //－不要包含在label中
  .datepicker
    .datepicker__input
      input.form__control(type="text", :value="value", :class="[size ? '--' + size : '']", @click.self="show = !show")
    .datepicker__popup(v-show="show")
       .datepicker__inner(v-show="datepickerShow", transition="slide-horizontal")
        .datepicker__ctrl
          .datepicker__ctrl-year
            span.datepicker__btn(@click="changeYear(-1)") &lt;
            span.show-year {{ now.getFullYear() }}
            span.datepicker__btn(@click="changeYear(1)") &gt;
          .datepicker__ctrl-month
            span.datepicker__btn(@click="changeMonth(-1)") &lt;
            span.show-month {{ month }}
            span.datepicker__btn(@click="changeMonth(1)") &gt;
        .datepicker__week-range
          span(v-for="day in dayNames") {{ day }}
        .datepicker__date-range
          template(v-for="i in date.length/7")
            span(v-for="j in 7", :class="date[i * 7 + j].state", @click="pickDate(i*7 + j)") {{ date[i * 7 + j].value }}

       .datepicker__inner.--time(v-show="timepickerShow", transition="slide-horizontal")
         .time-input
           input(type="text", v-model="time.hour", @change="hourChange", number)
         .time-input
           input(type="text", v-model="time.minute", @change="minuteChange", number)
         .time-input
           input(type="text", v-model="time.second", @change="secondChange", number)
         div: button.datepicker__done(@click="done") done
</template>

<script>
  import {on} from 'helpers/dom'
  import { coerceBoolean } from 'helpers/coerces'

  const TEST_FORMAT = 'YYYY-MM-DD'

  export default {
    props: {
      size: {
        type: String,
      },

      format: {
        type: String,
        default: 'YYYY-MM-DD',
      },

      isSecond: {
        type: Boolean,
        default: false,
        coerce: coerceBoolean,
      },

      dayNames: {
        type: Array,
        default () { return ['日','一','二','三','四','五','六'] },
      },

      monthNames: {
        type: Array,
        default () { return ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'] },
      },

      value: {
        twoWay: true,
        required: true,
      },

      // 允许时间选择
      allowTimepicker: {
        type: Boolean,
        default: false,
        coerce: coerceBoolean,
      },
    },

    data () {
      return {
        show: false,
        datepickerShow: true,
        timepickerShow: false,
        now: new Date(),
        date: [],
        time: {
          hour: 12,
          minute: 0,
          second: 0,
        },
      }
    },

    computed: {
      month () {
        return this.now.getMonth() + 1
      },
    },

    watch: {
      now () {
        this.generateDate()
      },
      show (val) {
        if (val) {
          this.generateDate()
        }
      }
    },

    methods: {
      changeYear(value) {
        //⚠️直接设置setFullYear 并不会被vue捕获更新，所以必须手动重置
        this.now.setFullYear(this.now.getFullYear() + value)
        this.now = new Date(this.now)
      },

      changeMonth(value) {
        this.now.setMonth(this.now.getMonth() + value)
        this.now = new Date(this.now)
      },

      hourChange () {
        const { hour } = this.time
        if (typeof hour != 'number') this.time.hour = 0
        if (hour > 23) this.time.hour = 23
        if (hour < 0)  this.time.hour = 0
      },

      minuteChange () {
        const { minute } = this.time
        if (typeof minute != 'number') this.time.minute = 0
        if (minute > 59) this.time.minute = 59
        if (minute < 0)  this.time.minute = 0
      },

      secondChange () {
        const { second } = this.time
        if (typeof second != 'number') this.time.second = 0
        if (second > 59) this.time.second = 59
        if (second < 0)  this.time.second = 0
      },

      pickDate (index) {
        this.now = new Date(this.date[index].time)

        if (this.allowTimepicker) {
          this.datepickerShow = false
          this.timepickerShow = true
        } else {
          this.value = this.stringify()
          this.close()
        }
      },

      done () {
        let {hour, minute, second}  = this.time
        this.now.setHours(hour, minute, second)
        this.value = this.stringify()
        this.close()
        this.datepickerShow = true
        this.timepickerShow = false
      },

      stringify (date = this.now, format = this.format) {
        const year = date.getFullYear(),
              month = date.getMonth() + 1,
              day = date.getDate(),
              hour = date.getHours(),
              hour12 = hour <= 12 ? hour : hour - 12,
              minute = date.getMinutes(),
              second = date.getSeconds(),
              monthName = this.monthNames[month - 1]


        let  map = {
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
          ss: ('0' + second).slice(-2),
        }

        return format.replace(/Y+|M+|D+|H+|h+|m+|s+/g, (str) => {
          return map[str]
        })
      },

      generateDate () {
        let arr = []
        let time = new Date(this.now)
        // 获取当月的第一天
        time.setMonth(time.getMonth(), 1)
        // 当月第一天的星期数
        let curFirstDay = time.getDay()
        // 上个月的最后一天
        time.setDate(0)
        let lastDayCount = time.getDate()

        // 上个月的最后几天
        let tempYear = time.getFullYear(),
            tempMonth = time.getMonth()
        for (let i = curFirstDay; i > 0; i--) {
          let date = lastDayCount - i + 1
          arr.push({
            value: date,
            time: new Date(tempYear, tempMonth, date),
            state: 'date-pass'
          })
        }

        // 获取当月的最后一天
        time.setMonth(time.getMonth() + 2, 0)
        //当月的天数
        const curDayCount = time.getDate()
        tempYear = time.getFullYear()
        tempMonth = time.getMonth()
        // 忽略时间
        let value = this.stringify(this.now, TEST_FORMAT) || this.stringify(new Date(), TEST_FORMAT)
        for (let i = 0; i < curDayCount; i++) {
          let tempDate = new Date(tempYear, tempMonth, i + 1)
          let isActive = value == this.stringify(tempDate, TEST_FORMAT)
          arr.push({
            value: i + 1,
            time: new Date(tempYear, tempMonth, i + 1),
            state: isActive ? 'date-actived' : ''
          })
        }

        // 下个月的前几天
        let count = arr.length < 35 ? 35 : 42
        let j = 1, l = count - arr.length + 1
        time.setMonth(tempMonth + 1)
        tempYear = time.getFullYear()
        tempMonth = time.getMonth()
        while (j < l) {
          arr.push({
            value: j,
            time: new Date(tempYear, tempMonth, j),
            state: 'date-future'
          })
          j++
        }


        this.date = arr
      },

      parse(value) {
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

      close () {
        this.show = false
      }
    },

    ready () {
      const parseResult = this.parse(this.value)

      if (parseResult) {
        this.now = parseResult
        this.value = this.stringify()
      } else {
        this.now = new Date()
      }

      this.$nextTick(() => {
        // this.value = this.stringify()
        this.time.hour = this.now.getHours()
        this.time.minute = this.now.getMinutes()
        this.time.second = this.now.getSeconds()
      })

      let el = this.$el
      this._closeEvent = on(window, 'click', (event) => {
        if (!el.contains(event.target)) {
          this.close()
        }
      })
    },

    beforeDestroy () {
      if (this._closeEvent) this._closeEvent.remove()
    }
  }
</script>

<style lang="scss">
  @import 'share';

  $datepicker-radius: $global-radius !default;
  $datepicker-z-index: $z-datepicker !default;
  $datepicker-border: 1px solid $medium-gray !default;
  $datepicker-width: 218px;
  $datepicker-padding: .6em !default;

  $datepicker-ctrl-padding: .5em 0;

  @mixin datepicker-base {
    position: relative;
    display: inline-block;
    width: 100%;
    font-size: 1rem;
  }

  @mixin datepicker-popup {
    position: absolute;
    width: 15em;
    height: 14em;
    margin-top: 2px;
    padding: $datepicker-padding;
    border: $datepicker-border;
    border-radius: $datepicker-radius;
    background-color: $white;
    z-index: $datepicker-z-index;
    overflow: hidden;
  }

  @mixin datepicker-inner {
    position: absolute;
    width: $datepicker-width;
    text-align: center;
  }

  @mixin datepicker-ctrl-base {
    @include clearfix;
    position: relative;
    padding: $datepicker-ctrl-padding;
    border-bottom: 1px solid $light-gray;
  }

  @mixin datepicker-btn-base {
    padding: .3em;
    margin: 0 .3em;
    border: 1px solid $light-gray;
    color: $light-gray;
    cursor: pointer;
    &:hover {
      background-color: $light-gray;
      color: $black;
    }
  }

  @mixin datepicker-done {
    display: inline-block;
    margin: 1em;
    padding: .5em 1em;
    background-color: $global-primary;
    color: $white;
  }

  @mixin time-input {
    display: inline-block;
    input {
      font-weight: bold;
      width: 3em;
      padding: .3em;
      font-size: 1.3rem;
    }

    &:not(:first-child)::before {
      content: ':';
      margin: 0 .1em;
      font-size: 1.3rem;
      font-weight: bold;
      color: $medium-gray;
    }
  }

  @mixin generate-datepicker {
    @include block(datepicker) {
      @include datepicker-base;

      @include element(popup) {
        @include datepicker-popup;
      }

      @include element(inner) {
        @include datepicker-inner;
        @include modifier(time) {
          @include absolute-center;
        }
      }

      @include element(ctrl) {
        @include datepicker-ctrl-base;
      }

      @include element(ctrl-year, ctrl-month) {
        font-weight: bold
      }

      @include element(ctrl-year) {
        float: left;
      }

      @include element(ctrl-month) {
        float: right;
      }

      @include element(btn) {
        @include datepicker-btn-base;
      }

      @include element(done) {
        @include datepicker-done;
      }

      @include element(week-range, date-range) {
        @include clearfix;
        > * {
          width: (100% / 7);
          float: left;
          text-align: center;
          cursor: pointer;
        }
      }
      @include element(week-range) {
        font-weight: bolder;
        border-bottom: 1px solid gray;
        margin-bottom: .4em;
      }
      @include element(date-range) {
        .date-pass,
        .date-future {
          color: $light-gray;
        }

        .date-actived {
          background-color: $global-primary;
          color: $white;
        }

        > * {
          &:hover {
            background-color: $global-primary;
            color: $white;
          }
        }
      }
    }

    @include block(time-input) {
      @include time-input;
    }
  }
  @include generate-datepicker;
</style>
