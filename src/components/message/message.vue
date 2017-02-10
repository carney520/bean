<template lang="jade">
  .message(transition="slide", v-show="show")
    .message__body
      icon.message__icon(:name="_iconName", :color="_iconColor", :loading="type === 'loading'")
      span.message__content {{ content }}
</template>

<script>
  import { coerceNumber } from '../_helpers/coerces'
  import { Icon } from '../icon'
  import {iconName, iconColor} from '../_settings/icon'

  export default {
    name: 'Message',
    components: {
      Icon
    },
    transitions: {
      slide: {
        afterLeave () {
          // 释放组件
          this.$nextTick(() => {
            this.$destroy(true)
          })
        }
      }
    },
    props: {
      duration: {
        type: Number,
        default: 3000,
        coerce: coerceNumber
      },
      type: {
        type: String,
        default: 'info'
      },
      content: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        show: false
      }
    },
    computed: {
      _iconName () {
        return iconName[this.type] || 'spinner'
      },
      _iconColor () {
        return this.type === 'loading'
          ? ''
          : iconColor[this.type] || this.type
      }
    },
    ready () {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, this.duration)
    }
  }
</script>