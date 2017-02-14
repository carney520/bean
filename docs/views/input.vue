<template lang="jade">
article
  h2 Input
  p 输入框
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-input props
        | 属性 | 说明                                                         | 类型   |  默认值  | 
        |------|-------------------------------------------------------------|-------|----------|

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-input
        b-input(placeholder="placeholder", :value.sync="one")
        b-input(placeholder="password", type="password", :value.sync="two")
        b-input(type="textarea", placeholder="textarea")

    .preview
      .preview-title 状态
      .preview-container.test-input
        b-input(placeholder="placeholder", status="success")
        b-input(placeholder="placeholder", status="warning")
        b-input(placeholder="placeholder", status="error")
        b-input(placeholder="placeholder", status="alert")
        b-input(placeholder="placeholder", status="info")

    .preview
      .preview-title 按钮组
      .preview-container
        b-input-group
          b-icon(slot="left", name="apple")
          b-input(placeholder="placeholder")

        b-input-group(color="primary")
          b-icon(slot="left", name="apple")
          b-input(placeholder="placeholder")

        b-input-group(color="primary", size="large")
          b-icon(slot="left", name="apple")
          b-input(placeholder="placeholder")

    .preview
      .preview-title 数字输入框
      .preview-container.test-input
        b-input-number
</template>

<script>
  export default {
    data () {
      return {
        one: 'hello',
        two: ''
      }
    }
  }
</script>

<style>
  .test-input .text-field {
    margin-bottom: .5em;
  }
</style>