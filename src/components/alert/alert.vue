<template lang="jade">
  .alert(:class="alertClasses", v-show="show", transition="fade")
    icon.alert__icon(v-if="showIcon", :name="_iconName", :type="_type")
    slot
    .alert__desc(v-if="description") {{ description }}
    button.close-button(v-if="dismissable", @click="show = false")
</template>

<script>
  import { coerceBoolean, coerceNumber } from '../_helpers/coerces'
  import {Icon} from '../icon'
  import {iconName, typeMap} from '../_settings/icon'

  export default {
    name: 'Alert',
    components: {
      Icon
    },
    transitions: {
      fade: {
        afterLeave () {
          // 在这里释放alert组建实例
          if (this.dismissable || this.duration > 0) {
            this.$nextTick(() => {
              this.$destroy(true)
            })
          }
        }
      }
    },
    props: {
      type: {
        type: String,
        default: 'warning'
      },

      showIcon: {
        type: Boolean,
        coerce: coerceBoolean
      },

      size: String,

      description: String,

      show: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },

      dismissable: {
        type: Boolean,
        coerce: coerceBoolean
      },

      duration: {
        type: Number,
        coerce: coerceNumber,
        default: 0
      }
    },

    computed: {
      _iconName () {
        return iconName[this.type]
      },

      _type () {
        return typeMap[this.type] || this.type
      },

      alertClasses () {
        return [
          `--${this._type}`,
          this.size && `--${this.size}`,
          {
            'with-description': !!this.description,
            'with-icon': this.showIcon
          }
        ]
      }
    },

    watch: {
      duration (val) {
        if (val > 0 && this.show) {
          this.setupTimer()
        }
      }
    },

    methods: {
      setupTimer () {
        this._timer = setTimeout(() => {
          this.show = false
        }, this.duration)
      }
    },

    ready () {
      this.$watch('show', (val) => {
        if (this._timer) clearTimeout(this._timer)
        if (val && this.duration > 0) this.setupTimer
      }, {immediate: true})
    },

    beforeDestroy () {
      if (this._timer) clearTimeout(this._timer)
    }
  }
</script>
