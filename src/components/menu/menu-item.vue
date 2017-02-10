<template lang="jade">
  li.menu__item(:class="cssClass")
    slot
</template>

<script>
  import { coerceBoolean } from '../_helpers/coerces.js'

  export default {
    props: {
      disabled: {
        type: Boolean,
        coerce: coerceBoolean
      },

      actived: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    computed: {
      cssClass () {
        return [
          {
            '--disabled': this.disabled,
            '--actived': this.actived
          }
        ]
      }
    }
  }
</script>
