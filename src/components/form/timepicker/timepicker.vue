<!--
时间选择器
采用下拉菜单的形式是为了方便的选择，而不是反复点击上下按钮来跳动.另外也方便控件时间范围
// TODO
  focus
-->
<template lang="jade">
  dropdown(v-ref:dropdown, :disabled="disabled", :dropdown-style="_dropdownStyle")
    slot
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
              @click.stop.prevent="clear",)
          .text-field__addon
            icon.icon-inset-control(name="clock-o")

    //- 下拉列表
    timepicker-pane(
      slot="menu",
      v-ref:pane,
      :separator="separator",
      :format="format",
      :disabled-hours="disabledHours",
      :disabled-minutes="disabledMinutes",
      :disabled-seconds="disabledSeconds",
      :show-disabled-item="showDisabledItem",
      :show-seconds="showSeconds",
      :value.sync="value",
      @onchange="_onChange",
      )
</template>

<script>
  import TextField from '../text-field'
  import TimepickerPane from './pane'
  import {Dropdown} from '../../dropdown'
  import {Icon} from '../../icon'

  export default {
    name: 'Timepicker',
    mixins: [
      TextField
    ],
    components: {
      TimepickerPane,
      Dropdown,
      Icon
    },
    props: [
      // in Control
      // - name
      // - value
      // - disabled
      // - size

      // in TextField
      // - placeholder
      // - allowClear
      // - onSelect
      'separator',
      'format',
      'disabledHours',
      'disabledMinutes',
      'disabledSeconds',
      'showDisabledItem',
      'showSeconds'
    ],

    computed: {
      selectClasses () {
        return [
          this.size && `--${this.size}`,
          {
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
      },

      clear () {
        this.$refs.pane.clear()
      }
    }
  }
</script>
