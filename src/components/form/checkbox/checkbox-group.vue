<!--
复选框
@author ivan
@date 2016.9.6
-->
<template lang="jade">
  template(v-if="!button")
    .checkbox-group(:class="checkboxGroupClass")
      checkbox(
        v-for="item of options",
        :value.sync="value",
        :checked-value="item[valueKey]",
        :checked="item.checked",
        :disabled="disabled || item.disabled") {{ item[labelKey] }}
  template(v-else)
    button-group(:size="size", :direction="direction")
      checkbox(
        button,
        v-for="item of options",
        :value.sync="value",
        :checked-value="item[valueKey]",
        :checked="item.checked",
        :disabled="disabled || item.disabled",
        :button-options="buttonOptions") {{ item[labelKey] }}
</template>

<script>
  import { coerceBoolean } from '../../_helpers/coerces.js'
  import Control from '../control'
  import Checkbox from './checkbox'
  import {ButtonGroup} from '../../button'

  export default {
    name: 'CheckboxGroup',
    mixins: [
      Control
    ],

    components: {
      Checkbox,
      ButtonGroup
    },

    props: {
      // in Control
      // - name
      // - value        *
      // - disabled     *
      // - size         *

      // 选项数据源
      options: {
        type: Array,
        required: true
      },

      // 数据源结构，label键名
      labelKey: {
        type: String,
        default: 'label'
      },

      // 数据源结构，value键名
      valueKey: {
        type: String,
        default: 'value'
      },

      // button类型
      button: {
        type: Boolean,
        coerce: coerceBoolean
      },

      direction: {
        type: String,
        validator (value) {
          return ['vertical', undefined].indexOf(value) !== -1
        }
      },

      buttonOptions: {
        type: Object,
        default: () => ({})
      }
    },

    computed: {
      checkboxGroupClass () {
        return [
          this.direction && `--${this.direction}`
        ]
      }
    },

    watch: {
      value (value) {
        this.$notify('onChange', null, {value})
      }
    }
  }
</script>