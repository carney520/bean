<template lang="jade">
  button.button(:class="buttonClass", :type="nativeType", @click="handleClick")
    icon(name="circle-o-notch", v-if="loading", loading)
    slot(v-else)
</template>

<script>
  import { coerceBoolean } from '../_helpers/coerces'
  import { Icon } from '../icon'

  export default {
    name: 'BButton',
    components: {
      Icon
    },
    props: {
      // 按钮类型,
      // solid - 实体的，
      // flat - 无边框,
      // outline - 与filled相反,
      // dashed - 虚线模式
      type: {
        type: String,
        validator (value) {
          return ['solid', 'flat', 'outline', 'dashed'].indexOf(value) !== -1
        }
      },

      // 原生的button属性
      nativeType: {
        type: String,
        default: 'button'
      },

      // 语义颜色
      theme: String,
      // alias of theme
      color: String,

      // 尺寸
      size: {
        type: String,
        validator (value) {
          return ['tiny', 'small', 'default', 'large'].indexOf(value) !== -1
        }
      },

      circle: {
        type: Boolean,
        coerce: coerceBoolean
      },

      // block 形式
      block: {
        type: Boolean,
        coerce: coerceBoolean
      },

      // 禁用状态
      disabled: {
        type: Boolean,
        coerce: coerceBoolean
      },

      // 选中状态，用于checkbox或radio
      checked: {
        type: Boolean,
        coerce: coerceBoolean
      },

      // 加载中状态
      loading: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    computed: {
      buttonClass () {
        return [
          this.size && `--${this.size}`,
          this.theme && `--${this.theme}`,
          this.color && `--${this.color}`,
          this.type && `--${this.type}`,
          {
            '--block': this.block,
            '--circle': this.circle,
            'is-checked': this.checked,
            'is-loading': this.loading,
            'is-disabled': this.disabled
          }
        ]
      }
    },
    methods: {
      handleClick (event) {
        if (this.loading || this.disabled) {
          return
        } else {
          this.$emit('onclick', event)
        }
      }
    }
  }
</script>
