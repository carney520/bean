<template lang="jade">
article
  h2 Tab
  p 标签页
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
      .preview-container.test-tab
        b-tab
          b-tab-item(title="one")
            h1 one
            b-button one
          b-tab-item(title="two")
            h1 two
            b-button two
          b-tab-item(title="three")
            h1 three
            b-button three

  .preview
      .preview-title lazy 模式
      .preview-desc 标签内的内容会惰性初始化
      .preview-container.test-tab
        b-tab
          b-tab-item(title="one", lazy)
            h1 one
            b-button one
          b-tab-item(title="two", lazy)
            h1 two
            b-button two
          b-tab-item(title="three", lazy)
            h1 three
            b-button three
</template>

<script>
</script>