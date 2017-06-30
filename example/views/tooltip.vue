<template lang="jade">
article
  h2 Tooltip
  p 文字提示
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-button props

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-tooltip
        p 这是一段#[b-tooltip(text="文字描述") 文字]

    .preview
      .preview-title 位置
      .preview-container.test-tooltip
        p.
          #[b-tooltip(text="文字描述", position="top") 上上]
          #[b-tooltip(text="文字描述") 下下]
          #[b-tooltip(text="文字描述", position="left") 左左]
          #[b-tooltip(text="文字描述", position="right") 右右]
</template>