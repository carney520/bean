<template lang="jade">
article
  h2 Checkbox
  p 单选框
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-radio props

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-radio
        p {{ one }}
        b-radio(:value.sync="one", checked-value="one") one
        b-radio(:value.sync="one", checked-value="two") two
    .preview
      .preview-title 按钮形式
      .preview-container.test-radio
        p {{ one }}
        b-radio(:value.sync="one", checked-value="one", button) one
        b-radio(:value.sync="one", checked-value="two", button) two
    .preview
      .preview-title Radio 组
      .preview-container.test-radio
        p {{ two }}
        b-radio-group(
          :value.sync="two",
          :options="[{label: 'one', value: 'one'}, {label: 'two', value: 'two'}]")

    .preview
      .preview-title Radio 组, 按钮形式
      .preview-container.test-radio
        p {{ two }}
        b-radio-group(
          button,
          :value.sync="two",
          :options="[{label: 'one', value: 'one'}, {label: 'two', value: 'two'}]")
</template>

<script>
  export default {
    data () {
      return {
        one: 'one',
        two: 'one'
      }
    }
  }
</script>

<style>
.test-radio .button {
  margin-left: .5em;
}
</style>