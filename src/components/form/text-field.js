/**
* 可输入性控件, 包括select, datepicker, input 等文本输入型的组件
*/

import Control from './control'
import ValidatableMixin from './validatable'
import { coerceBoolean } from '../_helpers/coerces.js'

export default {
  mixins: [
    // 继承Control
    Control,
    ValidatableMixin
  ],

  props: {
    placeholder: {
      type: String,
      default: ''
    },

    allowClear: {
      type: Boolean,
      default: true,
      coerce: coerceBoolean
    }
  },

  computed: {
    // - showPlaceholder() - 是否显示placehoder
    /**
    * 显示清除按钮
    * 条件: focus + placeholder 隐藏 ＋ 没有被禁用
    */
    showClear () {
      return this.isFocus && !this.showPlaceholder && !this.disabled
    }
  }
}
