<!-- 步骤条容器 -->
<template lang="jade">
  .steps
    slot
</template>

<script>
  import { coerceNumber } from '../_helpers/coerces'

  export default {
    name: 'steps',
    props: {
      // 当前进行中的步骤, 索引从0开始
      current: {
        type: Number,
        default: 0,
        coerce: coerceNumber
      },

      // 当前进行中的步骤的状态, 可选状态,processing, error
      status: {
        type: String,
        default: 'processing',
        validator (val) {
          return ['processing', 'error'].indexOf(val) !== -1
        }
      },

      // TODO,步骤条方向
      direction: {
        type: String,
        default: 'horizontal',
        validator (val) {
          return ['horizontal', 'vertical'].indexOf(val) !== -1
        }
      },

      // 步骤条尺寸
      size: {
        type: String,
        default: 'default',
        validator (val) {
          return ['default', 'small', 'large', 'xlarge'].indexOf(val) !== -1
        }
      }
    },

    data () {
      return {
        // 步骤子项
        items: [],
        lastStepOffsetWidth: 0
      }
    },

    computed: {
      // 步骤树
      length () {
        return this.items.length
      },

      marginRight () {
        return `-${this.lastStepOffsetWidth / (this.length - 1) + 1}px`
      }
    },

    events: {
      'step:created' (payload) {
        this.items.push(payload)
        payload.instance.$step = this
        payload.instance.index = this.length - 1
      }
    },

    ready () {
      if (this.direction === 'horizontal') {
        // 计算偏移
        const $lastStep = this.items[this.length - 1].instance.$el
        this.lastStepOffsetWidth = $lastStep.offsetWidth

        this.$watch('size', (val, oldVal) => {
          if (val !== oldVal) {
            this.lastStepOffsetWidth = $lastStep.offsetWidth
          }
        })
      }
    },

    // 组件删除时，这个钩子从根组件到子组件递归顺序调用，而组件的删除是从子组件开始的，所以这里先去除子组件的引用
    beforeDestroy () {
      this.items = []
    }
  }
</script>
