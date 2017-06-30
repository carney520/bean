<!--
文本输入框
TODO
  表单验证
  字数限制
  - disabled
  - password
-->
<template lang="jade">
  .form__control.text-field(:class="controlClasses")
    .text-field__wrapper
      .text-field__addon
        slot(name="addon-left")
          feedback-icons(:status="_status")
      .text-field__inner
        template(v-if="type === 'textarea'")
          textarea.text-field__input(
            v-el:input,
            :disabled="disabled",
            v-model="_value",
            :autofocus="autofocus",
            @focus="_onFocus",
            @blur="_onBlur",
            @change="_onChange",
            @input="_onInput",
            :rows="rows",
            :placeholder="placeholder",
            )
        template(v-else)
          input.text-field__input(
            v-el:input,
            :type="_type",
            v-model="_value",
            :disabled="disabled",
            :autofocus="autofocus",
            @focus="_onFocus",
            @blur="_onBlur",
            @change="_onChange",
            @input="_onInput",
            :placeholder="placeholder",
            )
          icon.form__clear(v-show="type != 'textarea' && showClear", name="times-circle", type="button", awesome, transition="fade", @click.stop.prevent="clear")
      .text-field__addon(v-if="type === 'password'")
        icon.icon-inset-control(:name="hidePassword ? 'eye' : 'eye-slash'", type="button", awesome, @click.stop.prevent="togglePasswordHide")
      .text-field__addon
        slot(name="addon-right")
</template>

<script>
  import TextField from '../text-field'
  import FeedbackIcons from './feedback-icons'
  import { coerceNumber, coerceBoolean } from '../../_helpers/coerces'
  import {Icon} from '../../icon'

  export default {
    name: 'VInput',
    mixins: [
      TextField
    ],
    components: {
      FeedbackIcons,
      Icon
    },
    props: {
      // in Control
      // - name
      // - value        *
      // - disabled     *
      // - size         *

      // in TextField
      // - placeholder  *
      // - allowClear   *
      // - onSelect     *
      // 表单类型
      type: {
        type: String,
        default: 'text'
      },

      rows: {
        type: Number,
        default: 2,
        coerce: coerceNumber
      },

      status: {
        type: String,
        validator (value) {
          return [undefined, 'success', 'warning', 'error', 'alert', 'info'].indexOf(value) !== -1
        }
      },
      number: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    data () {
      return {
        // in TextField
        // - isFocus
        hidePassword: true
      }
    },

    computed: {
      _value: {
        get () {
          return this.value
        },
        set (value) {
          if (this.number) {
            let num = Number(value)
            if (Number.isNaN(num)) {
              this.value = value
            } else {
              this.value = num
            }
          } else {
            this.value = value
          }
        }
      },
      controlClasses () {
        return [
          this.size && `--${this.size}`,
          this.type,
          {
            'is-focus': this.isFocus,
            'is-disabled': this.disabled
          }
        ]
      },

      _type () {
        if (this.type === 'password') {
          return this.hidePassword ? 'password' : 'text'
        } else {
          return this.type
        }
      },

      _status () {
        return this.status || this.validation.status
      },

      showPlaceholder () {
        return this.value == null || this.value === ''
      }
    },

    methods: {
      // in TextField
      // - _onFocus
      // - _onBlur

      _onChange (event) {
        this.$notify('onchange', event, {
          value: this.value
        })
      },

      _onInput (event) {
        this.$notify('oninput', event, {
          value: this.value
        })
      },

      /**
      * @override
      */
      focus () {
        const el = this.$els.input
        if (el) {
          this.$nextTick(() => {
            el.focus()
            el.selectionStart = el.selectionEnd = el.value.length
          })
        }
      },

      clear () {
        this.value = ''
        this.focus()
        this._onChange()
      },

      togglePasswordHide () {
        this.hidePassword = !this.hidePassword
        this.focus()
      }
    },
    ready () {
      if (this.number && typeof this.value !== 'number') {
        let num = Number(this.value)
        if (!Number.isNaN(num)) this.value = num
      }
    }
  }
</script>
