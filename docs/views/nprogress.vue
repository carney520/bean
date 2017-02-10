<template lang="jade">
article
  h2 NProgress
  p 全局进度条
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-nprogress props
        | 属性 | 说明 | 类型 | 默认值 |
        |------|-----|-----|--------|
  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-icon
        b-nprogress(v-ref:one)
        b-button(@onclick="$refs.one.start") start
        b-button(@onclick="$refs.one.done") done
</template>