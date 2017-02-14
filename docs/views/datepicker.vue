<template lang="jade">
article
  h2 DatePicker
  p 时间选择器
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-datepicker props
        | 属性 | 说明                                                         | 类型   |  默认值  | 
        |------|-------------------------------------------------------------|-------|----------|

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-checkbox
        b-datepicker

    .preview
      .preview-title 允许时间选择
      .preview-container.test-checkbox
        b-datepicker(allow-timepicker)

    .preview
      .preview-title 选择时间范围
      .preview-container.test-checkbox
        b-rangepicker(:value.sync="range")
        code {{ range | json }}
</template>

<script>
  export default {
    data () {
      return {
        range: null
      }
    }
  }
</script>