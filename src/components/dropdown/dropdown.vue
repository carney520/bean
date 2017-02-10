<template lang="jade">
  div.dropdown(:class="dropdownClasses")
    .dropdown__title(v-el:title, @click.prevent="toggle")
      slot
    .dropdown__pane(:style="dropdownStyle")
      slot(name="menu")
</template>

<script>
  import { coerceBoolean } from '../_helpers/coerces.js'
  export default {
    props: {
      dropdownStyle: {
        type: Object
      },
      disabled: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    data () {
      return {
        toggled: false
      }
    },

    computed: {
      dropdownClasses () {
        return [
          {
            'is-open': this.toggled
          }
        ]
      }
    },

    methods: {
      show () {
        this.toggled = true
        window.addEventListener('click', this._handleWindowClick)
      },

      hide () {
        this.toggled = false
        window.removeEventListener('click', this._handleWindowClick)
      },

      _handleWindowClick (event) {
        if (!this.$el.contains(event.target)) this.hide()
      },

      toggle (event) {
        if (this.disabled) {
          return
        }

        if (this.toggled) {
          this.hide()
        } else {
          this.show()
        }
      }
    }
  }
</script>
