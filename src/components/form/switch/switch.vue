<template lang="jade">
  .form__switch(:class="switchWrapperClass")
    .form-switch(
      :class="switchClass",
      :tabindex="tabindex",
      @click="handleChange",
      @focus="_onFocus",
      @blur="_onBlur",
      )
      .form-switch__toggle
</template>

<script>
  import Control from '../control'
  import { coerceBoolean } from '../../_helpers/coerces.js'

  export default {
    name: 'Switch',
    mixins: [
      Control
    ],
    props: {
      // in Control
      // - name
      // - value        *
      // - disabled     *
      // - size         *

      checked: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    computed: {
      switchWrapperClass () {
        return [
          this.size && `--${this.size}`
        ]
      },

      switchClass () {
        return [
          {
            'is-checked': this.checked,
            'is-disabled': this.disabled
          }
        ]
      }
    },

    methods: {
      handleChange () {
        if (!this.disabled) {
          this.checked = !this.checked
          this.$notify('onChange', null, {checked: this.checked})
        }
      }
    }
  }
</script>
