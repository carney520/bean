<template lang="jade">
article
  h2 Steps
  p 步骤
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-steps props
        | 属性 | 说明                                                         | 类型   |  默认值  | 
        |------|-------------------------------------------------------------|-------|----------|

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-modal
        b-steps(current="1", size="large")
          b-step(title="Step 1")
          b-step(title="Step 2")
          b-step(title="Step 3")
</template>