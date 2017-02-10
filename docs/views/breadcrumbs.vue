<template lang="jade">
article
  h2 Breadcrumbs
  p 面包屑
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-switch props
        | 属性 | 说明                                                         | 类型   |  默认值  | 
        |------|-------------------------------------------------------------|-------|----------|

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-breadcrumbs
        b-breadcrumbs
          b-breadcrumb-item
            a(href="/a") One
          b-breadcrumb-item(disabled)
            a(href="/a") Two
          b-breadcrumb-item
            a(href="/a") Three

    .preview
      .preview-title 指定分隔符
      .preview-container.test-breadcrumbs
        b-breadcrumbs(separator=">")
          b-breadcrumb-item
            a(href="/a") One
          b-breadcrumb-item(disabled)
            a(href="/a") Two
          b-breadcrumb-item
            a(href="/a") Three

    .preview
      .preview-title 结合vue-router
      .preview-container.test-breadcrumbs
        b-breadcrumbs(use-vue-router)
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