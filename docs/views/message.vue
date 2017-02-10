<template lang="jade">
article
  h2 Form
  p 表单
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-form props
        | 属性 | 说明                                                         | 类型   |  默认值  | 
        |------|-------------------------------------------------------------|-------|----------|

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-form
        b-button(@onclick="$message.info('hello message')") message

    .preview
      .preview-title 类型
      .preview-container.test-form
        b-button(@onclick="$message.success('hello success message')") success
        b-button(@onclick="$message.warning('hello warning message')") warning
        b-button(@onclick="$message.error('hello error message')") error
        b-button(@onclick="$message.info('hello info message')") info
        b-button(@onclick="$message.loading('hello loading message')") loading
</template>