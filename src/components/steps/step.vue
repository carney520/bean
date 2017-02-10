<!-- 步骤 -->
<template lang="jade">
  .steps-item(:style="stepItemStyle", :class="stepItemClass")
    .steps-item__tail(v-show="!isLast")
    .steps-item__info
      .steps-item__head
        //- 自定义icon
        template(v-if="icon")
          slot(name="icon")
            icon.steps-item__icon.--custom(:name="icon", :type="iconType", :awesome="iconAwesome")
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
  import { coerceBoolean } from 'helpers/coerces'

  export default {
    name: 'step',
    props: {
      // 当前步骤的状态, 可选状态,waitting, processing, finished, error
      status: {
        type: String,
        default: 'processing',
        validator (val) {
          return ['processing', 'error', 'waitting', 'finished'].indexOf(val) !== -1
        },
      },

      // 标题
      title: {
        type: String,
        default: '',
      },

      // 描述
      description: {
        type: String,
        default: '',
      },

      // 对应icon组件的 name
      icon: {
        type: String,
        default: null,
      },

      // 对应icon组件的 type
      iconType: {
        type: String,
        default: '',
      },

      // 对应icon组件的awesome prop
      iconAwesome: {
        type: Boolean,
        default: false,
        coerce: coerceBoolean,
      },

      iconStyle: {
        type: Object,
        default () { return {}},
      },
    },

    data () {
      return {
        // 当前索引
        index: 0,
      }
    },

    computed: {
      stepItemStyle () {
        return {
          width: !this.isHorizontal || this.isLast ? '' : `${(1 / (this.$step.length -1 )) * 100}%`,
          marginRight: !this.isHorizontal || this.isLast ? '' : this.$step.marginRight,
        }
      },

      stepItemClass () {
        return [
          // size
          `--${this.$step.size}`,
          `--${this.$step.direction}`,
          //status
          {
            '--processing': this.isProcessing,
            '--waitting': this.isWaitting,
            '--finished': this.isFinished,
            '--error': this.isError,
            '--next-step-error': this.isNextStepEror,
          },
        ]
      },

      isHorizontal () {
        return this.$step.direction === 'horizontal'
      },

      isProcessing () {
        return this.$step.current == this.index
          ? this.status == 'processing'
            ? true
            : this.$step.status == 'processing'
              ? true
              : false
          : false
      },

      isError () {
        return this.$step.current == this.index
          ? this.status == 'error'
            ? true
            : this.$step.status == 'error'
              ? true
              : false
          : false
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
      },
    },

    // 向steps 组件注册 step 组件
    created () {
      this.$dispatch('step:created', {
        instance: this,
      })
    },
  }
</script>

<style lang="scss">
  @import "share";

  /// 以图标尺寸为基准
  $step-sizes: (
    small: 1.7rem,
    default: 2rem,
    large: 3rem,
    xlarge: 4rem,
  ) !default;

  // 尾巴的跨度
  $tail-width: 1px !default;
  // 尾巴的样式(同border)
  $tail-style: solid !default;
  // 图标的间隔
  $icon-gutter: .5rem !default;

  // 步骤的颜色
  $step-color-waitting: $medium-gray !default;
  $step-color-actived: $global-primary !default;
  $step-color-error: $global-alert !default;

  $default-size: map-get($step-sizes, default);

  @mixin steps-item-tail-base {
    &,
    &::before {
      position: absolute;
      border-style: solid;
      border-width: 0;
    }
    border-color: $step-color-waitting;

    &::before {
      content: '';
      border-color: $step-color-actived;
      transition-property: width, height;
      transition-duration: .4s;
      transition-timing-function: ease-in-out;
    }
  }

  @mixin steps-item-tail-horizontal {
    &,
    &::before {
      border-top-width: $tail-width;
    }

    top: ($default-size + convert-to-rem($tail-width)) / 2;
    width: 100%;

    &::before {
      top: -$tail-width;
      width: 0%;
    }
  }

  @mixin steps-item-tail-vertical {
    &,
    &::before {
      top: 0;
      border-left-width: $tail-width;
    }

    left: ($default-size + 2 * $icon-gutter + convert-to-rem($tail-width)) / 2;
    height: 100%;

    &::before {
      height: 0%;
      left: -$tail-width;
    }
  }

  @mixin steps-item-icon-base {
    @include square($default-size);
    display: block;
    padding: .4em;
    line-height: $default-size;
    font-size: 1.1rem;
    color: $step-color-waitting;
    fill: $step-color-waitting;
    text-align: center;
    border: 1px solid $step-color-waitting;
    border-radius: $default-size;
  }


  @include block(steps-item) {
    position: relative;

    @include modifier(horizontal) {
      display: inline-block;
    }

    // 尾巴
    @include element(tail) {
      @include steps-item-tail-base;

      @include shadow(next-step-error) {
        &::before{
          border-color: $step-color-error;
        }
      }

      /// 水平
      @include shadow(horizontal) {
        @include steps-item-tail-horizontal;
      }

      @include shadow-and(horizontal, finished) {
        &::before {
          width: 100%;
        }
      }

      /// 垂直
      @include shadow(vertical) {
        @include steps-item-tail-vertical;
      }

      @include shadow(vertical, finished) {
        &::before {
          height: 100%;
        }
      }

    }

    @include element(head, main) {
      position: relative;
      display: inline-block;
      vertical-align: top;
      padding-right: $icon-gutter;
      background-color: $white;
    }

    @include element(head) {
      padding-left: $icon-gutter;
      @include shadow(vertical) {
        padding: $icon-gutter;
      }
    }

    @include element(main) {
      margin-bottom: .8em;
    }

    // 标题
    @include element(title) {
      display: inline-block;
      height: $default-size;
      color: $dark-gray;
      font-size: .875rem;
      font-weight: bold;
      @include ghost-center-wrapper;
    }

    @include element(title-inner) {
      @include ghost-center-content;
    }

    // 描述
    @include element(description) {
      font-size: .8rem;
      font-weight: lighter;
      color: $medium-gray;

      @include shadow(horizontal) {
        max-width: 5em;
      }
    }

    @include element(title, description) {
      @include shadow(processing) {
        color: $black;
      }

      @include shadow(error) {
        color: $step-color-error;
      }
    }

    // 图标
    @include element(icon, num-icon) {
      @include steps-item-icon-base;
      // 只能用于颜色，不然会影响尺寸的计算
      transition-property: fill, border-color, backgroud-color;
      transition-duration: .4s;
      transition-delay: .4s;
      transition-timing-function: cubic-bezier(.42, 0, .58, 1);

      @include modifier(custom) {
        border: none !important;
        border-radius: 0 !important;
      }

      //正在处理中, 背景实体化
      @include shadow(processing) {
        background-color: $step-color-actived;
        border-color: $step-color-actived;
        color: $white;
        fill: $white;
        border-radius: $default-size;
      }

      // 已完成
      @include shadow(finished) {
        background-color: $white;
        border-color: $step-color-actived;
        color: $step-color-actived;
        fill: $step-color-actived;
      }
      // 出错
      @include shadow(error) {
        background-color: $white;
        border-color: $step-color-error;
        color: $step-color-error;
        fill: $step-color-error;
      }
    }

    @include element(num-icon) {
      padding: 0 !important;
    }

    // size
    @each $name, $size in map-remove($step-sizes, default) {
      @include element(tail) {
        @include shadow-and(horizontal, $name) {
          top: ($size + convert-to-rem($tail-width)) / 2;
        }

        @include shadow-and(vertical, $name) {
          left: ($size + 2 * $icon-gutter + convert-to-rem($tail-width)) / 2;
        }
      }

      @include element(title) {
        @include shadow($name) {
          height: $size;
        }
      }

      @include element(icon, num-icon) {
        @include shadow($name) {
          @include square($size);
          line-height: $size;
          border-radius: $size;
        }

        @include shadow-and(processing, $name) {
          border-radius: $size !important;
        }
      }
    }
  }
</style>
