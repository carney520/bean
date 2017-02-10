/**
* 可验证组件的mixin
*/
import { coerceBoolean } from '../_helpers/coerces.js'

export default {
  props: {
    validatable: {
      type: Boolean,
      default: true,
      coerce: coerceBoolean
    }
  },

  data () {
    return {
      // 验证结果
      validation: {
        // 当前状态
        status: null,
        // 状态信息
        message: null
      }
    }
  },

  methods: {
    getValue () {
      return this.value
    },

    setError (status, message) {
      this.validation.status = status
      this.validation.message = message
    },

    setValue (value) {
      this.value = value
    }
  },

  created () {
    // 注册可以验证控件到Form中
    if (this.validatable) {
      if (this.name == null) {
        return
      }
      this.$dispatch('validatable:created', this)
    }
  }
}
