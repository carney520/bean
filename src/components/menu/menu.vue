<template lang="jade">
   ul.menu(:class="cssClass")
     slot
</template>

<script>
  export default {
    props: {
      layout: {
        type: String,
        default: 'vertical',
        validator (value) {
          return ['vertical', 'horizontal'].indexOf(value) !== -1
        }
      }
    },

    computed: {
      cssClass () {
        return [
          `--${this.layout}`
        ]
      }
    }
  }
</script>
