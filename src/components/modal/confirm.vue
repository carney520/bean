<template lang="jade">
div
  modal.confirm(
    :show.sync="show",
    :click-dimmer-to-close="false",
    @onleave="readyDestroy",
    hide-header,
    hide-footer)
    .confirm__body
      icon.confirm__icon(:name="_iconName", :type="_iconColor + ':xlarge'")
      span.confirm__title {{ title }}
      p.confirm__content {{ content }}
      .confirm__footer 
        b-button(@onclick="confirm", theme="primary") {{ okText }}
        b-button(v-if="!alert", @onclick="close") {{ cancelText }}
</template>

<script>
  import Modal from './modal'
  import {Icon} from '../icon'
  import {Button} from '../button'
  import {iconName, iconColor} from '../_settings/icon'

  export default {
    name: 'Confirm',
    components: {
      Modal,
      Icon,
      bButton: Button
    },
    props: {
      title: String,
      content: String,
      alert: Boolean,
      type: String,
      okText: { type: String, default: '确认' },
      cancelText: { type: String, default: '取消' }
    },

    data () {
      return {
        show: false
      }
    },

    computed: {
      _iconName () {
        return iconName[this.type] || 'question-circle'
      },
      _iconColor () {
        return iconColor[this.type] || this.type || 'warning'
      }
    },

    methods: {
      // 确认按钮
      confirm (event) {
        this.show = false
        this.$emit('onconfirm')
      },
      // 关闭模态框
      close () {
        this.show = false
        this.$emit('oncancel')
      },

      readyDestroy () {
        this.$nextTick(() => {
          this.$destroy(true)
        })
      }
    }
  }
</script>