<template lang="jade">
  .notification(v-show="show", transition="notify", :class="{'with-icon': showIcon}")
    icon.notification__icon(v-if="showIcon", :name="_iconName", :color="_iconColor")
    button.notification__close.close-button(@click="close")
    .notification__body
      .notification__title {{ title }}
      .notification__content  {{ content }}
    .notification__actions(v-if="showConfirm")
      b-button(@onclick="confirm", type="flat", :color="_iconColor", size="small") {{ confirmText }}
</template>

<script>
  import { coerceBoolean, coerceNumber } from '../_helpers/coerces'
  import {Icon} from '../icon'
  import {Button} from '../button'
  import {iconName, iconColor} from '../_settings/icon'

  export default {
    name: 'Notification',
    components: {
      Icon,
      bButton: Button
    },
    transitions: {
      notify: {
        afterLeave () {
          this.$nextTick(() => {
            this.$destroy(true)
          })
        }
      }
    },
    props: {
      type: {
        type: String,
        default: 'info'
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      showIcon: {
        type: Boolean,
        coerce: coerceBoolean
      },
      showConfirm: {
        type: Boolean,
        coerce: coerceBoolean
      },
      confirmText: {
        type: String,
        default: '确认'
      },
      duration: {
        type: Number,
        coerce: coerceNumber,
        default: 4500
      }
    },
    data () {
      return {
        show: false
      }
    },
    computed: {
      _iconName () {
        return iconName[this.type]
      },
      _iconColor () {
        return iconColor[this.type] || this.type
      }
    },
    methods: {
      close () {
        this.show = false
        this.$emit('onclose')
      },
      confirm () {
        this.show = false
        this.$emit('onconfirm')
      }
    },
    ready () {
      this.show = true
      if (this.duration > 0) {
        this._timer = setTimeout(() => {
          this.close()
        }, this.duration)
      }
    },
    beforeDestroy () {
      clearTimeout(this._timer)
    }
  }
</script>

<style lang="scss">
  .notify-transition {
    transition: all .4s ease;
  }

  .notify-enter,
  .notify-leave {
    opacity: 0;
    filter: blur(7px);
  }
</style>
