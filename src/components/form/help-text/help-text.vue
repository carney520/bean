<template lang="jade">
  .form__help-text(v-show="_show")
    slot
      span {{ _message }}
</template>

<script>
  import ViewMixin from '../../_mixins/view'
  export default {
    name: 'HelpText',
    mixins: [
      ViewMixin
    ],
    props: {
      // 绑定的表单，类型于label的for属性, helpText 从中获取错误信息
      for: String,

      // 帮助信息，在表单没有出现错误的时候显示
      text: String
    },

    data () {
      return {
        message: null,
        relativeControl: null
      }
    },

    computed: {
      _show () {
        return this._message || this.$getSlot('default') != null
      },

      _message () {
        return this.message || this.text
      }
    },

    events: {
      'form:ready' (form) {
        const control = form.getFieldInstance(this.for)

        if (control) {
          this.relativeControl = control
          this.$watch('relativeControl.validation.message', (val) => {
            // getFirstError
            if (Array.isArray(val)) {
              this.message = val[0]
            } else {
              this.message = null
            }
          })
        }
      }
    }
  }
</script>
