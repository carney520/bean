<template lang="jade">
  template(v-if="!button")
    .radio-group(:class="radioGroupClass")
      radio(
        v-for="item of options",
        :value.sync="value",
        :checked-value="item[valueKey]",
        :checked="item.checked",
        :disabled="disabled || item.disabled"
        ) {{ item[labelKey] }}
  template(v-else)
    button-group(:size="size", :direction="direction")
      radio(
        button,
        v-for="item of options",
        :value.sync="value",
        :checked-value="item[valueKey]",
        :checked="item.checked",
        :disabled="disabled || item.disabled",
        :button-options="buttonOptions",
        ) {{ item[labelKey] }}
</template>

<script>
  import { coerceBoolean } from '../../_helpers/coerces.js'
  import Control from '../control'
  import Radio from './radio'
  import {ButtonGroup} from '../../button'

  export default {
    name: 'RadioGroup',

    mixins: [
      Control
    ],

    components: {
      Radio,
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
      radioGroupClass () {
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
