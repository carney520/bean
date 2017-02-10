<template lang="jade">
  .tooltip(:class="['--' + position]")
    span(v-el:trigger, tabindex=2)
      slot
    .tooltip__tip(v-show="show") {{ text }}
</template>

<script>
  import tooltipMixin from '../_mixins/tooltip'

  export default {
    name: 'Tooltip',
    mixins: [tooltipMixin],
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
</script>
