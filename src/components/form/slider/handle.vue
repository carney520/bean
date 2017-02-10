<!--
把柄
@author ivan
@date 2016.9.18
-->
<template lang="jade">
  .slider__handle(
    :style="handleStyle",
    @mouseenter="tipShow = true",
    @mouseleave="tipShow = false",
     )
    .slider__tip(v-if="showTip", v-show="canShowTip", transition="fade") {{ tipFormatter(value) }}
</template>

<script>
  export default {
    name: 'Handle',
    props: ['showTip', 'value', 'offset', 'dragging', 'tipFormatter', 'currentHandle', 'handle'],
    data () {
      return {
        tipShow: false
      }
    },

    computed: {
      handleStyle () {
        return {
          left: `${this.offset}%`
        }
      },

      canShowTip () {
        const { tipShow, dragging, currentHandle, handle } = this
        return tipShow || (dragging && currentHandle === handle)
      }
    }
  }
</script>
