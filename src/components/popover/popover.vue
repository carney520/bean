<template lang="jade">
  .popover(:class="['--'+position]")
    span(v-el:trigger)
      slot
    .popover__body(v-show="show")
      .popover__title
        slot(name="title")
          | {{ title }}
      .popover__content(v-if="lazy ? shown : true")
        slot(name="content")
        slot
</template>

<script>
  import tooltipMixin from '../_mixins/tooltip'
  import { coerceBoolean } from '../_helpers/coerces'

  export default {
    mixins: [tooltipMixin],
    props: {
      title: String,
      trigger: {
        default: 'click'
      },
      lazy: {
        type: Boolean,
        coerce: coerceBoolean
      }
    }
  }
</script>
