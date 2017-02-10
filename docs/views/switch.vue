<template lang="jade">
article
  h2 Switch
  p 开关
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-switch props
        | 属性 | 说明                                                         | 类型   |  默认值  | 
        |------|-------------------------------------------------------------|-------|----------|
        | checked | 开关是否打开(支持双向绑定)                                   | Boolean | false |
        | disabled | 禁用                                   | Boolean | false |

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-checkbox
        p 开关: {{ one | json }}
        b-switch(:checked.sync="one")
</template>

<script>
  export default {
    data () {
      return {
        one: true
      }
    }
  }
</script>