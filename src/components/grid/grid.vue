<template lang="jade">
  .row(:class="classes")
    slot
</template>

<script>
  import { serializeClassName, coerceSize, serializeExpanded } from './helpers'
  import { coerceBoolean } from '../_helpers/coerces'

  export default {
    name: 'grid',
    props: {
      collapse: {
        type: Object,
        default: () => ({}),
        coerce: coerceSize
      },

      uncollapse: {
        type: Object,
        default: () => ({}),
        coerce: coerceSize
      },

      expanded: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    data () {
      return {
        classes: []
      }
    },

    created () {
      serializeClassName(this.classes, this.collapse, 'rowcollapse')
      serializeClassName(this.classes, this.uncollapse, 'rowuncollapse')
      if (this.expanded) this.classes.push(serializeExpanded())
    }
  }
</script>
