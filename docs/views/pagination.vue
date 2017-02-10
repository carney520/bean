<template lang="jade">
article
  h2 Pagination
  p 分页
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-paginaion props
        | 属性 | 说明                                                         | 类型   |  默认值  | 
        |------|-------------------------------------------------------------|-------|----------|

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-modal
        b-pagination(count="99", :current.sync="one")

    .preview
      .preview-title 简单模式
      .preview-container.test-modal
        b-pagination(simple, count="5", :current.sync="one")
</template>

<script>
  export default {
    data () {
      return {
        one: 1
      }
    }
  }
</script>