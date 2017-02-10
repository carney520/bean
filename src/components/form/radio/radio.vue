<!--
单选框
@author ivan
@date 2016.9.15
-->
<template lang="jade">
  label.form-checkbox__wrapper.form__static(v-if="!button")
    span.form-checkbox(:class="radioClass")
      span.form-checkbox__inner-radio
      //- 包装原生input
      input.form-checkbox__input(
        v-el:input,
        type="radio",
        v-model="value",
        :tabindex="tabindex",
        :disabled="disabled",
        :value="checkedValue",
        @focus="_onFocus",
        @blur="_onBlur",
        @change="handleChange"
        )
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
      type="radio",
      v-model="value",
      :disabled="disabled",
      :value="checkedValue",
      :tabindex="tabindex",
      @change="handleChange",
      @focus="_onFocus",
      @blur="_onBlur",
      )
    slot
</template>

<script>
  import Checkable from '../checkable'
  import {Button} from '../../button'
  import {Icon} from '../../icon'

  export default {
    name: 'Radio',
    mixins: [
      Checkable
    ],

    components: {
      Icon,
      'vButton': Button
    },

    computed: {
      radioClass () {
        return [
          {
            '--checked': this.checked,
            '--disabled': this.disabled
          }
        ]
      }
    },

    methods: {
      handleChange (e) {
        if (!this.disabled) {
          this.checked = e.target.checked
        }
      }
    },

    ready () {
      if (this.checked) {
        this.value = this.checkedValue
      } else if (this.value === this.checkedValue) {
        this.checked = true
      }

      this.$watch('value', () => {
        this.checked = this.$els.input.checked
      })

      // 由于其他单选框的变化会影响当前单选框的选中状态，所以要监视 checked 的变化
      this.$watch('checked', (value, oldValue) => {
        this.$notify('onChange', null, {value})
      })
    }
  }
</script>
