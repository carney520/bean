<template lang="jade">
  div.tab__panel(
    :class="{'--active': show}",
    v-show="show",
    :transition="transition")
    template(v-if="lazy ? shown : true")
      slot
</template>

<script>
  /**
  *  @example
  *    惰性初始化tab-panel的组件
  *    tab-view
  *      tab-item(v-ref:name, title="title")
  *        template(v-if="$refs.name.shown")
  *          some-component
  *
  */
  import { coerceBoolean } from '../_helpers/coerces.js'

  export default {
    name: 'TabItem',
    props: {
      title: {
        type: String,
        required: true
      },

      disabled: {
        type: Boolean,
        coerce: coerceBoolean
      },
      lazy: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    data () {
      return {
        index: 0,
        // 初始
        show: false,
        // 是否被显示过了
        shown: false
      }
    },

    computed: {
      show () {
        return this.$parent.active === this.index
      },

      transition () {
        return this.$parent.effect
      }
    },

    created () {
      this.$parent.items.push({
        title: this.title,
        disabled: this.disabled
      })
    },

    ready () {
      // 确定id
      for (let i = 0, l = this.$parent.$children.length; i < l; i++) {
        if (this.$parent.$children[i].$el === this.$el) {
          this.index = i
          break
        }
      }

      this.$watch('$parent.active', (value) => {
        if (value === this.index) {
          this.$emit('onshow', value)
          if (!this.shown) {
            this.$emit('onfirstshow', value)
            this.shown = true
          }
        }
      }, {immediate: true})
    },

    beforeDestroy () {
      this.$parent.items.splice(this.index, 1)
    }
  }
</script>
