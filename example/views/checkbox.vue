<template lang="jade">
article
  h2 Checkbox
  p 复选框
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-button props
        | 属性 | 说明                                                         | 类型   |  默认值  | 
        |------|-------------------------------------------------------------|-------|----------|

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-checkbox
        b-checkbox(:value.sync="one") {{ one | json }}
    .preview
      .preview-title 按钮形式
      .preview-container.test-checkbox
        b-checkbox(:value.sync="one", button) {{ one | json }}
    .preview
      .preview-title 多个checkbox
      .preview-container.test-checkbox
        p value: {{ two | json }}
        b-checkbox(:value.sync="two", checked-Value="one") one
        b-checkbox(:value.sync="two", checked-Value="two") two
        b-checkbox(:value.sync="two", checked-Value="three") three

    .preview
      .preview-title 多个Checkbox 按钮形式
      .preview-container.test-checkbox
        p value: {{ two | json }}
        b-button-group
          b-checkbox(button, :value.sync="two", checked-Value="one") one
          b-checkbox(button, :value.sync="two", checked-Value="two") two
          b-checkbox(button, :value.sync="two", checked-Value="three") three

    .preview
      .preview-title checkbox 组
      .preview-container.test-checkbox
        p value: {{ three | json }}
        b-checkbox-group(
          :value.sync="three",
          :options="[{label: 'one', value: 'one'}, {label: 'two', value: 'two'}]")
        p 按钮形式 
        b-checkbox-group(
          button,
          :value.sync="three",
          :options="[{label: 'one', value: 'one'}, {label: 'two', value: 'two'}]")
</template>

<script>
  export default {
    data () {
      return {
        one: false,
        two: [],
        three: []
      }
    }
  }
</script>