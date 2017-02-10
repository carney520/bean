<!--
内容可折叠容器
@author ivan
@date 2016.9.2
 -->
<template lang="jade">
  .collapsable(:class="{'--collapsed': ui.state.collapsed, '--need-collapse': ui.state.needCollapse}")
    //- 高度模式
    template(v-if="mode == 'height'")
      //- 占位，组件需要在初始化时计算元素的高度，以便确定是否需要折叠，
      .collapsable__placeholder(v-if="!ui.state.ready", :style="{height: height}")
      .collapsable__content(v-el:content, :class="{'--invisible': !ui.state.ready}", :style="ui.style.content")
        slot(name="content")
      //- 折叠按钮, 使用 visibility来使得vue可以获取到它的高度
      .collapsable__toggle.--h-mode(v-el:collapsable-toggle, :style="{visibility: ui.state.needCollapse ? 'visible' : 'hidden'}", @click="toggleHeight")
        slot(name="toggle")
          span {{ ui.state.collapsed ? unfoldText : foldText }}

    //- 文本模式
    template(v-if="mode == 'length'")
      .collapsable__content(v-if="ui.state.needCollapse", v-show="!ui.state.collapsed")
        span.text-break {{ value }}

      .collapsable__summary(v-el:summary, v-show="ui.state.collapsed")
        span.text-break {{ ui.state.needCollapse ? value.slice(0, length) + '...' : value }}
      .collapsable__toggle.--l-mode(v-if="ui.state.needCollapse", @click="toggle")
        slot(name="toggle")
          span {{ ui.state.collapsed ? unfoldText : foldText }}
          span(:class="[ui.state.collapsed ? 'collapsable__triangle-down' : 'collapsable__triangle-up']")
</template>

<script>
  import { coerceNumber, coerceBoolean } from 'helpers/coerces'

  export default {
    props: {
      // 折叠模式， length 按字数, height 按高度
      mode: {
        type: String,
        default: 'height',
      },

      // in px, default 100px
      height: {
        type: Number,
        default: 100,
        coerce: coerceNumber,
      },

      // 当mode为length 时 必须传
      value: {
        type: String,
      },

      length: {
        type: Number,
        default: 300,
        coerce: coerceNumber,
      },

      foldText: {
        type: String,
        default: '收起',
      },

      unfoldText: {
        type: String,
        default: '展开',
      },
    },

    data () {
      return {
        ui: {
          state: {
            collapsed: true,
            needCollapse: false,
            ready: false,
          },

          style: {
            content: {},
          },

          store: {
            originalHeight: 'auto',
            height: '100px',
          },
        },
      }
    },

    methods: {
      toggleHeight () {
        if (!this.ui.state.needCollapse) return

        const original = this.ui.store.originalHeight,
              height = this.ui.store.height

        if (this.ui.state.collapsed) {
          this.ui.style.content.height = original
          this.ui.state.collapsed = false
        } else {
          this.ui.style.content.height = height
          this.ui.state.collapsed = true
          // this.$el.scrollIntoView()
        }
      },

      toggle () {
        this.ui.state.collapsed = !this.ui.state.collapsed
      },
    },

    ready () {
      if ((this.mode == 'length') && this.value == null) {
        throw new TypeError(`Collapsable Error: Require props.value`)
      }

      if (this.mode == 'height') {
        const el = this.$els.content
        this.$nextTick(() => {
          const originalHeight = parseFloat(getComputedStyle(el).height),
                height = this.height,
                toggleHeight = this.$els.collapsableToggle.offsetHeight

          if (!Number.isNaN(originalHeight) && (originalHeight > height)) {
            this.ui.state.needCollapse = true
            this.$set('ui.style.content.height', height + 'px')

            // 展开高度是折叠按钮高度 + 主体内容高度
            this.ui.store.originalHeight = originalHeight + toggleHeight + 'px'
            this.ui.store.height = height + 'px'
          }
        })

      } else {
        if (this.value.length > this.length) {
          this.ui.state.needCollapse = true
        }

      }

      this.ui.state.ready = true
    },
  }
</script>

<style lang="scss">
  @import "share";

  @mixin collapsable-base {
    position: relative;
  }

  @mixin collapsable-toggle-base {
    cursor: pointer;
  }

  @mixin collapsable-content-base {
    transition: height .3s ease-in-out;
    overflow-y: hidden;
  }

  @mixin collapsable-toggle-h-mode {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: $dark-gray;
    background-image: linear-gradient(top, transparent, rgba($light-gray, .8));
    text-align: center;

    &:hover,
    &:active {
      background-image: linear-gradient(top, transparent, $light-gray);
    }
  }

  @mixin collapsable-toggle-l-mode {
    display: inline-block;
    color: $global-primary;
  }

  @include block(collapsable) {
    @include collapsable-base;

    @include element(content) {
      @include collapsable-content-base;

      // 不可见状态， 用于计算高度
      @include modifier(invisible) {
        position: absolute;
        visibility: invisible;
      }
    }

    @include element(toggle) {
      @include collapsable-toggle-base;
      @include modifier(h-mode) {
        @include collapsable-toggle-h-mode;
      }
      @include modifier(l-mode) {
        @include collapsable-toggle-l-mode;
      }
    }

    @include element(triangle-up, triangle-down) {
      &::before {
        display: inline-block !important;
        vertical-align: middle;
        margin-left: 2px;
      }
    }

    @include element(triangle-up) {
      &::before {
        @include triangle(5px, $global-primary, up)
      }
    }

    @include element(triangle-down) {
      &::before {
        @include triangle(5px, $global-primary, down)
      }
    }
  }
</style>
