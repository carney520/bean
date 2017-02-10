<!-- 无限滚动组件 -->
<template lang="jade">
  .infinite-scroll
    .infinite-scroll__body
      slot
    .infinite-scroll__tip(v-show="loading", transition="fade")
       icon(name="o-loop", type="loader:muted")
    .infinite-scroll__tip(v-show="noresults", transition="fade")
      slot(name="no-results") {{ noResultsText }}
    .infinite-scroll__tip(v-show="nomore", transition="fade")
      slot(name="no-more") {{ noMoreText }}
    .infinite-scroll__tip(v-show="error", transition="fade")
      slot(name="error")
        div(title="retry"): icon(name="o-loop", type="muted:button", @click="onscroll")
        span {{ errorText }}
</template>

<script>
  import _ from 'lodash'
  import { noop } from 'helpers/util'
  import { coerceNumber } from 'helpers/coerces'
  import { on } from 'helpers/dom'

  /**
  * 获取滚动的容器
  */
  function getScrollContainer (el) {
    if (el.nodeName === 'BODY') {
      return window
    } else if (['scroll', 'auto'].indexOf(getComputedStyle(el).overflowY) !== -1) {
      return el
    }

    return getScrollContainer(el.parentNode)
  }

  /**
  * 获取与底部的距离
  * @param {Node} el - 容器
  */
  function getDistance(el) {
    // 容器可视高度
    const innerHeight = el === window
                      ? window.innerHeight
                      : Number.parseInt(getComputedStyle(el).height, 10)

    // 滚动高度，包括不可视的内容
    const scrollHeight = el === window
                      ? document.body.scrollHeight
                      : el.scrollHeight
    const scrollTop = el === window
                      ? document.body.scrollTop
                      : el.scrollTop
    // 距离 = scrollHeight - (scorllTop + innerHeight)
    return scrollHeight - (scrollTop + innerHeight)
  }

  import {
    IS_NO_MORE,
    IS_NO_RESULTS,
    IS_ERROR,
  } from './types'

  export default {
    name: 'infinite-scroll',
    props: {
      /**
      * 到达底部事件回调，
      * @param {Function} cb - 回调传入一个回调参数用于表示加载完毕
      */
      onreach: {
        type: Function,
        default: noop,
      },

      // 指定距离触发到达底部事件
      distance: {
        type: Number,
        coerce: coerceNumber,
        default: 100,
      },

      throttle: {
        type: Number,
        coerce: coerceNumber,
        default: 400,
      },

      noMoreText: {
        type: String,
        default: '没有更多',
      },

      noResultsText: {
        type: String,
        default: '这里什么也没有'
      },

      errorText: {
        type: String,
        default: '加载错误'
      },


    },

    data () {
      return {
        loading: false,
        noresults: false,
        nomore: false,
        error: false,
        container: null,
      }
    },

    methods: {
      onscroll () {
        this.reset()

        const currentDistance = getDistance(this.container)
        if (!this.loading && currentDistance <= this.distance ) {
          this.loading = true
          this.onreach(this.onloaded.bind(this))
        }
      },

      reset () {
        this.noresults =
        this.nomore =
        this.error =  false
      },

      onloaded (type) {
        this.loading = false

        switch (type) {
          case IS_NO_RESULTS:
            this.noresults = true
            break;
          case IS_NO_MORE:
            this.nomore = true
            break
          case IS_ERROR:
            this.error = true
            break
        }
      },
    },

    ready () {
      this.container = getScrollContainer(this.$el)

      // 注册滚动事件
      let handler = () => this.onscroll()
      this._scrollEvent = on(this.container, 'scroll', _.throttle(handler, this.throttle))
      this.$nextTick(handler)
    },

    beforeDestroy () {
      this._scrollEvent.remove()
    }
  }
</script>

<style lang="scss">
  @import 'share';

  @include block(infinite-scroll) {
    @include element(tip) {
      display: block;
      width: 100%;
      max-width: 25em;
      margin: 1em auto;
      padding: .5em;
      border: 1px solid $light-gray;
      background-color: $lighter-gray;
      text-align: center;
      color: $dark-gray;
    }
  }
</style>
