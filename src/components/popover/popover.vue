<template lang="jade">
  .popover(:class="['--'+position]")
    span(v-el:trigger)
      slot
    .popover__body(v-show="show")
      .popover__title
        slot(name="title")
          | {{ title }}
      .popover__content
        slot(name="content")
</template>

<script>
  import tooltipMixin from '../_mixins/tooltip'

  export default {
    mixins: [tooltipMixin],
    props: {
      title: String,
      trigger: {
        default: 'click'
      }
    }
  }
</script>
