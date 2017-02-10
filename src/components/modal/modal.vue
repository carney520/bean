<template lang="jade">
  .modal(
    v-show="show",
    @click.self="clickDimmerToClose && close('cancel')",
    transition="fade", :class="[size ? '--' + size : '']")
    .modal__dialog(
      v-show="show",
      transition="slide")
      .modal__header.--primary(v-if="!hideHeader")
        slot(name="header")
          h5 {{ title }}
        button.close-button.--light(@click="close")
      .modal__content
        slot(name="content")
        slot
      .modal__footer(v-if="!hideFooter")
        slot(name="footer")
          b-button(theme="warning", @onclick="confirm", :loading="loading") {{ okText }}
          b-button(@onclick="close") {{ cancelText }}
</template>

<script>
  import { coerceBoolean } from '../_helpers/coerces'
  import { Button } from '../button'

  export default {
    name: 'Modal',
    components: {
      bButton: Button
    },
    props: {
      show: {
        type: Boolean,
        required: true,
        coerce: coerceBoolean
      },
      title: String,
      size: String,
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      beforeClose: Function,
      hideHeader: {
        type: Boolean,
        coerce: coerceBoolean
      },
      hideFooter: {
        type: Boolean,
        coerce: coerceBoolean
      },
      clickDimmerToClose: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },
      loading: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    transitions: {
      fade: {
        afterLeave () {
          this.$emit('onleave')
        }
      }
    },

    methods: {
      close (event) {
        if (this.beforeClose) {
          this.beforeClose(() => {
            this.hide()
          })
        } else {
          this.hide()
        }
      },

      hide () {
        this.show = false
        this.$emit('onclose', {confirm: event === 'confirm'})
      },

      cancel () {
        this.close('cancel')
      },

      ok () {
        this.close('confirm')
      },

      confirm () {
        this.ok()
      }
    },

    ready () {
      // 向body添加一个class防止body滚动
      const body = document.body
      let classList = body.classList
      this.$watch('show', (val) => {
        if (val) {
          classList.add('modal-open')
          this.$emit('onshow')
        } else {
          classList.remove('modal-open')
        }
      }, {immediate: true})
    }
  }
</script>
