<template lang="jade">
article
  h2 Slider
  p 滑动条
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-slider props
        | 属性 | 说明                                                         | 类型   |  默认值  | 
        |------|-------------------------------------------------------------|-------|----------|

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-slider
        b-slider(:value.sync="one")
        span {{ one }}

    .preview
      .preview-title 设置滑动范围
      .preview-container.test-slider
        b-slider(:value.sync="two", :min="30", :max="50")
        span {{ two }}

    .preview
      .preview-title 设置步长和显示刻度
      .preview-container.test-slider
        b-slider(:value.sync="three", :step="10", show-scale)
        span {{ three }}

    .preview
      .preview-title 范围模式
      .preview-container.test-slider
        b-slider(:value.sync="four", range)
        span {{ four | json }}
</template>

<script>
  export default {
    data () {
      return {
        one: 6,
        two: 35,
        three: 10,
        four: [1, 70]
      }
    }
  }
</script>