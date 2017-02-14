<template lang="jade">
  dropdown.form__select.text-field(v-ref:dropdown, :disabled="disabled", :dropdown-style="_dropdownStyle")
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
              :value="value",
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
              awesome,
              @click.stop.prevent="clear")
          .text-field__addon
            icon.icon-inset-control(name="calendar-o", awesome)
    datepicker-pane(
      slot="menu",
      v-ref:pane,
      :allow-timepicker="allowTimepicker",
      :day-names="dayNames",
      :date-filter="dateFilter",
      :format="format",
      :is-second="isSecond",
      :month-names="monthNames",
      :now-text="nowText",
      :size="size",
      :show-adjacent-month="showAdjacentMonth",
      :today-text="todayText",
      :value.sync="value",
      @onchange="_onChange")
</template>

<script>
  import TextField from '../text-field'
  import DatepickerPane from './pane'
  import {Dropdown} from '../../dropdown'
  import { coerceBoolean } from '../../_helpers/coerces'
  import {Icon} from '../../icon'

  export default {
    name: 'Datepicker',
    mixins: [
      TextField
    ],
    components: {
      DatepickerPane,
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
      format: String,
      isSecond: {
        type: Boolean,
        coerce: coerceBoolean
      },
      dayNames: Array,
      monthNames: Array,
      todayText: String,
      nowText: String,
      dateFilter: Function,
      allowTimepicker: {
        type: Boolean,
        coerce: coerceBoolean
      },
      showAdjacentMonth: {
        type: Boolean,
        coerce: coerceBoolean
      }
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
        return this.value == null || this.value === ''
      },

      show () {
        return this.$refs.dropdown.toggled
      }
    },

    methods: {
      _onChange () {
        this.$notify('onchange', null, {
          value: this.value
        })
        this.close()
      },

      clear () {
        this.$refs.pane.clear()
      },

      close () {
        const dropdown = this.$refs.dropdown
        if (dropdown) {
          dropdown.hide()
        }
        this.$els.input.focus()
      }
    }
  }
</script>
