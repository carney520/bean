<!-- 弹出确认框 -->
<template lang="jade">
  .popover(:class="['--'+position]")
    span(v-el:trigger)
      slot
    .popover__body(v-show="show")
      .popover__content
        .popover-confirm__message
          icon(name="exclamation-circle", type="warning", awesome)
          .popover-confirm__title {{ title }}
        .popover-confirm__buttons
          b-button(theme="primary", type="flat", @onclick="cancel", size="small") {{ cancelText }}
          b-button(theme="primary", @onclick="confirm", size="small") {{ okText }}
</template>

<script>
  import tooltipMixin from '../_mixins/tooltip'
  import {Icon} from '../icon'
  import {Button} from '../button'

  export default {
    name: 'PopoverConfirm',
    components: {
      Icon,
      bButton: Button
    },
    mixins: [tooltipMixin],
    props: {
      title: {
        type: String,
        required: true
      },

      okText: {
        type: String,
        default: '确认'
      },

      cancelText: {
        type: String,
        default: '取消'
      },

      trigger: {
        type: String,
        default: 'click'
      }
    },

    methods: {
      confirm () {
        this.$emit('onconfirm')
        this.hide()
      },

      cancel () {
        this.$emit('oncancel')
        this.hide()
      }
    }
  }
</script>
