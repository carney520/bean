<!--
复选框组
@author ivan
@date 2016.9.12
-->
<template lang="jade">
  label.form-checkbox__wrapper.form__static(v-if="!button")
    span.form-checkbox(:class="checkboxClass")
      span.form-checkbox__inner
        icon.form-checkbox__icon(v-show="checked", awesome, name="check", transition="fade")
      //- 包装原生input, 利用原生的v-model 来处理数据模型
      input.form-checkbox__input(
        v-el:input,
        type="checkbox",
        v-model="value",
        :disabled="disabled",
        :tabindex="tabindex",
        :autofocus="autofocus",
        :true-value="checkedValue",
        :false-value="uncheckedValue",
        :value="checkedValue",
        @focus="_onFocus",
        @blur="_onBlur",
        @change="_handleChange")
    span.form-checkbox__label
      //-label
      slot
  //-注：vue 的props没有react灵活
  v-button(
    v-else,
    :disabled="disabled",
    :checked="checked",
    :size="buttonOptions.size",
    :type="buttonOptions.type",
    :theme="buttonOptions.theme",
    :shape="buttonOptions.shape",
    )
    input.form-checkbox__input(
      v-el:input,
      type="checkbox",
      v-model="value",
      :tabindex="tabindex",
      :autofocus="autofocus",
      :disabled="disabled",
      :true-value="checkedValue",
      :false-value="uncheckedValue",
      :value="checkedValue",
      @change="_handleChange",
      @focus="_onFocus",
      @blur="_onBlur",
      )
    slot
</template>

<script>
  import Checkable from '../checkable'
  import {Icon} from '../../icon'
  import {Button} from '../../button'

  export default {
    name: 'CheckBox',
    mixins: [
      Checkable
    ],
    components: {
      Icon,
      'vButton': Button
    },
    computed: {
      checkboxClass () {
        return [
          {
            '--checked': this.checked,
            '--disabled': this.disabled
          }
        ]
      },

      computed: {
        // 是否是数组
        _isCheckboxGroup () {
          return Array.isArray(this.value)
        }
      }
    },

    methods: {
      check () {
        if (Array.isArray(this.value) && this.value.indexOf(this.checkedValue) !== -1) {
          this.value.push(this.checkedValue)
        } else {
          this.value = this.checkedValue
        }
      },

      _handleChange () {
        if (!this.disabled) {
          this.checked = this.$els.input.checked
          this.$notify('onChange', null, {checked: this.checked, value: this.value})
        }
      }
    },

    ready () {
      // 初始化状态
      if (this.checked) {
        this.check()
      } else {
        this.checked = this.$els.input.checked
      }

      // 监视value的变动以随时改变 checked状态, 数据驱动状态
      this.$watch('value', () => {
        this.checked = this.$els.input.checked
      })
    }
  }
</script>
