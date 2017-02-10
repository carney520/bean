<template lang="jade">
  div.spinner(:class="spinnerClass")
    spin(:type="type", :light="light", :dark="dark", :size="size", :text="text")
    slot
</template>

<script>
  import { coerceBoolean, coerceNumber } from '../_helpers/coerces.js'
  import Spin from './spin'

  export default {
    components: {
      Spin
    },
    props: {
      type: String,

      light: {
        type: Boolean,
        coerce: coerceBoolean
      },

      dark: {
        type: Boolean,
        coerce: coerceBoolean
      },

      size: String,
      text: String,

      loading: {
        type: Boolean,
        coerce: coerceBoolean
      },

      delay: {
        type: Number,
        coerce: coerceNumber,
        default: 0
      }
    },
    data () {
      return {
        isLoading: false
      }
    },
    computed: {
      asWrapper () {
        return !!this.$getSlot('default')
      },
      spinnerClass () {
        return {
          'as-wrapper': this.asWrapper,
          'is-loading': this.isLoading
        }
      }
    },
    ready () {
      this.$watch('loading', (val) => {
        if (val) {
          this.isLoading = true
        } else if (this.delay > 0) {
          this._timer = setTimeout(() => {
            this.isLoading = false
          }, this.delay)
        } else {
          this.isLoading = false
        }
      }, {immediate: true})
    },
    beforeDestroy () {
      if (this._timer) clearTimeout(this._timer)
    }
  }
</script>