<template lang="jade">
  dropdown(v-ref:dropdown, :disabled="disabled", :dropdown-style="_dropdownStyle")
    slot
      //- 输入框, 可以传入slot替换
      .form__control(:class="selectClasses")
        .text-field__wrapper
          .text-field__inner
            input.text-field__input(
              v-el:input,
              readonly,
              :disabled="disabled",
              :tabindex="tabindex",
              :autofocus="autofocus",
              :autocomplete="off",
              :value="label",
              :placeholder="placeholder",
              @focus="_onFocus",
              @blur="_onBlur",
              )
            //- 清除按钮
            icon.form__clear(
              v-show="showClear",
              name="times-circle",
              type="button",
              transition="fade",
              @click.stop.prevent="clear"
              )
          .text-field__addon
            icon.icon-inset-control(name="calendar-o")
    rangepicker-pane(
      slot="menu",
      v-ref:pane,
      :allow-timepicker="allowTimepicker",
      :date-filter="dateFilter",
      :day-names="dayNames",
      :disabled-hours="disabledHours",
      :disabled-minutes="disabledMinutes",
      :disabled-seconds="disabledSeconds",
      :size="size",
      :format="format",
      :is-second="isSecond",
      :month-names="monthNames",
      :now-text="nowText",
      @onchange="_onChange",
      :show-adjacent-month="showAdjacentMonth",
      :show-disabled-item="showDisabledItem",
      :show-seconds="showSeconds",
      :today-text="todayText",
      :value="value",
      )
</template>

<script>
  import TextField from '../text-field'
  import RangepickerPane from './rangepicker-pane'
  import {Dropdown} from '../../dropdown'
  import {Icon} from '../../icon'

  export default {
    name: 'DateRangepicker',
    mixins: [
      TextField
    ],

    components: {
      RangepickerPane,
      Dropdown,
      Icon
    },

    props: {
      // in Control
      // - name
      // - value
      // - disabled
      // - size

      // in TextField
      // - placeholder
      // - allowClear

      // for datepicker
      format: {},
      isSecond: {},
      dayNames: {},
      monthNames: {},
      todayText: {},
      nowText: {},
      allowTimepicker: {},
      dateFilter: {},
      showAdjacentMonth: {},

      // for timepicker
      disabledHours: Function,
      disabledMinutes: Function,
      disabledSeconds: Function,
      showDisabledItem: {},
      showSeconds: {}
    },

    computed: {
      selectClasses () {
        return [
          this.size && `--${this.size}`,
          {
            'is-focus': this.isFocus,
            'is-disabled': this.disabled
          }
        ]
      },

      showPlaceholder () {
        return this.value == null || (Array.isArray(this.value) && this.value.length === 0)
      },

      label () {
        return this.showPlaceholder ? '' : `${this.value[0]} ~ ${this.value[1]}`
      },

      show () {
        return this.$refs.dropdown.toggled
      }
    },

    methods: {
      _onChange ({value}) {
        this.value = value
        this.close()
      },

      close () {
        const dropdown = this.$refs.dropdown
        if (dropdown) {
          dropdown.hide()
        }
        this.$els.input.focus()
      },

      clear () {
        this.$refs.pane.clear()
      }
    }
  }
</script>