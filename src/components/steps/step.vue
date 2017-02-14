<!-- 步骤 -->
<template lang="jade">
  .steps-item(:style="stepItemStyle", :class="stepItemClass")
    .steps-item__tail(v-show="!isLast")
    .steps-item__info
      .steps-item__head
        //- 自定义icon
        template(v-if="icon")
          slot(name="icon")
            icon.steps-item__icon.--custom(:name="icon", :type="iconType")
        //- 内置icon
        template(v-else)
          icon.steps-item__icon(v-if="isFinished", name="check", awesome)
          icon.steps-item__icon(v-if="isError", name="close", awesome)
          span.steps-item__num-icon(v-if="(isWaitting || isProcessing) && !isError ") {{ index }}
      .steps-item__main
        .steps-item__title(v-if="title")
           span.steps-item__title-inner  {{ title }}
        .steps-item__description(v-if="description") {{ description }}
</template>

<script>
  import { Icon } from '../icon'

  export default {
    name: 'step',
    components: {
      Icon
    },
    props: {
      // 当前步骤的状态, 可选状态,waitting, processing, finished, error
      status: {
        type: String,
        default: 'processing',
        validator (val) {
          return ['processing', 'error', 'waitting', 'finished'].indexOf(val) !== -1
        }
      },

      // 标题
      title: {
        type: String,
        default: ''
      },

      // 描述
      description: {
        type: String,
        default: ''
      },

      // 对应icon组件的 name
      icon: String,

      // 对应icon组件的 type
      iconType: String,

      iconStyle: Object
    },

    data () {
      return {
        // 当前索引
        index: 0
      }
    },

    computed: {
      stepItemStyle () {
        return {
          width: !this.isHorizontal || this.isLast ? '' : `${(1 / (this.$step.length - 1)) * 100}%`,
          marginRight: !this.isHorizontal || this.isLast ? '' : this.$step.marginRight
        }
      },

      stepItemClass () {
        return [
          // size
          `--${this.$step.size}`,
          `--${this.$step.direction}`,
          // status
          {
            '--processing': this.isProcessing,
            '--waitting': this.isWaitting,
            '--finished': this.isFinished,
            '--error': this.isError,
            '--next-step-error': this.isNextStepEror
          }
        ]
      },

      isHorizontal () {
        return this.$step.direction === 'horizontal'
      },

      isProcessing () {
        return this.$step.current === this.index &&
          (this.status === 'processing' || this.$step.status === 'processing')
      },

      isError () {
        return this.$step.current === this.index &&
          (this.status === 'error' || this.$step.status === 'error')
      },

      isNextStepEror () {
        return this.$step.items[this.index + 1]
          ? this.$step.items[this.index + 1].instance.isError
          : false
      },

      isFinished () {
        return this.$step.current > this.index
      },

      isWaitting () {
        return this.$step.current < this.index
      },

      isLast () {
        if (this.$step) {
          return this.index + 1 === this.$step.length
        } else {
          return false
        }
      }
    },

    // 向steps 组件注册 step 组件
    created () {
      this.$dispatch('step:created', {
        instance: this
      })
    }
  }
</script>