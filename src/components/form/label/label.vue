<!-- 标签 -->
<template lang="jade">
  label.form__label(:class="labelClass")
    span
      slot
</template>

<script>
  export default {
    name: 'vLabel',
    props: {
      size: String
    },
    computed: {
      labelClass () {
        return [
          this.size && `--${this.size}`
        ]
      }
    }
  }
</script>