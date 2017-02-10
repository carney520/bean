/**
* 可选中组件的父类
*/
import Control from './control'
import { coerceBoolean } from '../_helpers/coerces.js'

export default {
  mixins: [
    Control
  ],

  props: {
    // in Control
    // - name
    // - value        *
    // - disabled     *
    // - size         *

    // extends
    checked: {
      type: Boolean,
      coerce: coerceBoolean
    },

    // 表单选中状态的值
    checkedValue: {
      default: true
    },

    // 表单未选中时的值
    uncheckedValue: {
      default: false
    },

    // button 类型
    button: {
      type: Boolean,
      coerce: coerceBoolean
    },

    // button 的一些props
    buttonOptions: {
      type: Object,
      default: () => ({})
    }
  }
}
