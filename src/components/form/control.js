/**
* 所有表单控件的基类
* Control
*/

import ViewMixin from '../_mixins/view'
import { coerceBoolean, coerceNumber } from '../_helpers/coerces.js'

export default {
  mixins: [
    ViewMixin
  ],

  props: {
    // 表单名, 在表单验证时用于标志一个特定的控件
    name: String,

    // 表单尺寸
    size: {
      type: String,
      validator (value) {
        return ['tiny', 'small', undefined, 'large'].indexOf(value) !== -1
      }
    },

    // 表单值
    value: {},

    // 用于自定义控件的激活顺序
    // 另外tabindex可以让自定义表单获得可以获取焦点的能力
    tabindex: {
      type: Number,
      coerce: coerceNumber,
      default: 0
    },

    // 表单是否被禁用
    disabled: {
      type: Boolean,
      coerce: coerceBoolean
    }
  },

  data () {
    return {
      isFocus: false
    }
  },

  methods: {
    /**
    * 获取焦点
    */
    focus () {
      this.$el.scrollIntoView()
    },

    /**
    * 包含可能改变**双向绑定prop**的操作函数，使得可以检测**双向绑定prop**是在组件内部被修改还是在被外部被修改
    * @param {Function} cb - 操作函数
    */
    $changeInner (cb) {
      this._valueChanging = true
      cb()

      // watcher 是异步更新的
      this.$nextTick(() => {
        this._valueChanging = false
      })
    },

    /**
    * 判断**双向绑定prop** 是否在内部被修改
    */
    $isChangingInner () {
      return this._valueChanging
    },

    _onFocus (event) {
      this.isFocus = true
      this.$notify('onfocus', event)
    },

    _onBlur (event) {
      this.isFocus = false
      this.$notify('onblur', event)
    }
  }
}
