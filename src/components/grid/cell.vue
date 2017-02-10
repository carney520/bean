<template lang="jade">
  .col(:class="classes")
    slot
</template>

<script>
  /**
  * @example
  *   //12 grid in default
  *   grid
  *     cell(size="5:4:6",push="1:2:3") // size="<small>|<medium>|<large>"
  *
  */
  import { coerceBoolean } from '../_helpers/coerces'
  import { coerceSize, serializeClassName } from './helpers'

  export default {
    name: 'cell',
    props: {
      size: {
        type: Object,
        default: () => ({small: {value: 24}}),
        coerce: coerceSize
      },

      collapse: {
        type: Boolean,
        coerce: coerceBoolean
      },

      uncollapse: {
        type: Boolean,
        coerce: coerceBoolean
      },

      push: {
        type: Object,
        default: () => ({}),
        coerce: coerceSize
      },

      pull: {
        type: Object,
        default: () => ({}),
        coerce: coerceSize
      },

      offset: {
        type: Object,
        default: () => ({}),
        coerce: coerceSize
      },

      center: {
        type: Object,
        default: () => ({}),
        coerce: coerceSize
      },

      uncenter: {
        type: Object,
        default: () => ({}),
        coerce: coerceSize
      }
    },

    data () {
      return {
        classes: []
      }
    },

    created () {
      serializeClassName(this.classes, this.size, 'size')
      serializeClassName(this.classes, this.push, 'push')
      serializeClassName(this.classes, this.pull, 'pull')
      serializeClassName(this.classes, this.offset, 'offset')
      serializeClassName(this.classes, this.center, 'center')
      serializeClassName(this.classes, this.uncenter, 'uncenter')
    }
  }
</script>
