<template lang="jade">
  div.scroll-anchor(:style="{top: offset}")
</template>

<script>
  export default {
    props: {
      offset: {
        type: String,
        default: '0px'
      }
    },

    methods: {
      focus () {
        this.$el.scrollIntoView()
      }
    }
  }
</script>

<style lang="scss">
 .scroll-anchor {
   position: absolute;
 }
</style>
