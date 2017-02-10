<!--
时间选择器
@author ivan
@date 2016.9.23
@deprecated
-->
<template lang="jade">
  dropdown(v-ref:dropdown, :disabled="disabled", :dropdown-style="_dropdownStyle")
    slot
      .form__control(:class="selectClasses")
        .text-field__wrapper
          .text-field__inner
            input.text-field__input(
              v-el:input,
              :tabindex="tabindex",
              :autofocus="autofocus",
              :autocomplete="off",
              @focus="_onFocus",
              @blur="_onBlur",
              )
            //- 占位符
            span.form__placeholder(v-show="showPlaceholder") {{ placeholder }}
            //- 清除按钮
            icon.form__clear(
              v-show="showClear",
              name="times-circle",
              type="button",
              awesome,
              transition="fade",
              @click.stop.prevent="clear",)
          .text-field__addon
            icon.icon-inset-control(name="clock-o", awesome)

    //- 下拉列表
    .time-picker__popup(slot="menu")
      .time-picker__item
        icon.time-picker__handle(name="angle-up", awesome, @click.prevent="_increate('hour', 'up')")
        input.time-picker__input(v-el:hour, type="text", :value="_formatNumber(hour)", @change="_onChange($event, 'hour')")
        icon.time-picker__handle(name="angle-down", awesome, @click.prevent="_increate('hour', 'down')")
      .time-picker__separator :
      .time-picker__item
        icon.time-picker__handle(name="angle-up", awesome, @click.prevent="_increate('minute', 'up')")
        input.time-picker__input(v-el:minute, type="text", :value="_formatNumber(minute)", @change="_onChange($event, 'minute')")
        icon.time-picker__handle(name="angle-down", awesome, @click.prevent="_increate('minute', 'down')")
      .time-picker__separator :
      .time-picker__item
        icon.time-picker__handle(name="angle-up", awesome, @click.prevent="_increate('second', 'up')")
        input.time-picker__input(v-el:second, type="text", :value="_formatNumber(second)", @change="_onChange($event, 'second')")
        icon.time-picker__handle(name="angle-down", awesome, @click.prevent="_increate('second', 'down')")

</template>

<script>
  import TextField from '../text-field'
  import { coerceBoolean, coerceNumber } from 'helpers/coerces'

  export default {
    name: 'TimePicker',
    mixins: [
      TextField,
    ],
    props: {
      //in Control
      //- name
      //- value        *
      //- defaultValue *
      //- disabled     *
      //- size         *
      //- onChange     *
      //- onFocus
      //- onBlur

      //in TextField
      //- placeholder
      //- allowClear
      //- onSelect

      separator: {
        default: ':',
      },
    },

    data () {
      return {
        date: new Date(),
      }
    },

    computed: {
      hour () {
        return this.date.getHours()
      },

      minute () {
        return this.date.getMinutes()
      },

      second () {
        return this.date.getSeconds()
      },
    },

    methods: {
      _formatNumber (value) {
        return ('0' + value).slice(-2)
      },

      _parse (value) {
        let date = new Date()
        if (!value instanceof Date) {
          let [hour, minute, second] = value.split(this.separator)
          let time = new Date(0, 0, 0, hour, minute, second)
          if (!Number.isNaN(time.getTime())) {
            date = time
          }
        } else{
          date = value
        }

        this.date = date
      },

      _onChange (event, section) {
        console.log(section)
        let value = parseInt(event.target.value.trim())
        if (Number.isNaN(value)) {
          // reset
          event.target.value = this[section]
          return
        } else {
          this._setValue(section, value)
        }
      },

      _setValue (section, value) {
        switch (section) {
          case 'hour':
            this.date.setHours(value)
            break;
          case 'minute':
            this.date.setMinutes(value)
            break
          default:
            this.date.setSeconds(value)
            break
        }
        this.date = new Date(this.date)
      },

      _increate (section, direction) {
        this.$els[section].focus()
        let value = this[section]
        value += direction === 'up' ? 1 : -1
        this._setValue(section, value)
      },
    },

    created () {
    },
  }
</script>

<style lang="scss">
  @import "share";

  @mixin generate-timepicker {
    @include block(time-picker) {
      @include element(popup) {
        text-align: center;
        padding: 1em;
      }

      @include element(item) {
        display: inline-block;
        vertical-align: middle;
        width: 3em;
        user-select: none;
      }

      @include element(input) {
        width: 100%;
        margin: .8em 0;
        border: none;
        border-bottom: 2px solid $lighter-gray;
        border-top: 2px solid $lighter-gray;
        font-size: 1.1em;
        font-weight: bolder;
        text-align: center;
        color: $dark-gray;
        letter-spacing: 1px;

        &:active,
        &:focus,
        &.is-actived {
          color: $global-primary;
          border-color: $global-primary;
        }
      }

      @include element(handle) {
        box-sizing: content-box;
        color: $dark-gray;
        fill: $dark-gray;
        border: 5px solid transparent;
        cursor: pointer;

        &:hover,
        &:active {
          color: $global-primary;
          fill: $global-primary;
        }
      }

      @include element(separator) {
        display: inline-block;
        vertical-align: middle;
        font-size: 1.5em;
        font-weight: lighter;
        color: $medium-gray;
      }
    }
  }

  @include generate-timepicker;
</style>
