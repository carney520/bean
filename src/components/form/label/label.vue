<!-- 标签 -->
<template lang="jade">
  label.form__label(:class="labelClass", :style="labelStyle")
    span(v-if="required", class="text-alert") *
    span
      slot
</template>

<script>
  import { coerceBoolean } from '../../_helpers/coerces'

  export default {
    name: 'vLabel',
    props: {
      size: String,
      required: {
        type: Boolean,
        coerce: coerceBoolean
      },
      align: String
    },
    computed: {
      labelClass () {
        return [
          this.size && `--${this.size}`
        ]
      },
      labelStyle () {
        return {
          'text-align': this.align
        }
      }
    }
  }
</script>