<template lang="jade">
article
  h2 Spinner
  h4 API
  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container
        b-spinner

    .preview
      .preview-title 多种类型
      .preview-container
        b-spinner(type="cube-grid")
        b-spinner(type="wandering-cubes")
        b-spinner(type="wave")
        b-spinner(type="double-bounce")
        b-spinner(type="folding-cube")
        b-spinner(type="rotating-plane")
    .preview
      .preview-title 尺寸
      .preview-container
        b-spinner(size="small")
        b-spinner
        b-spinner(size="large")

    .preview
      .preview-title 包装内容
      .preview-container
        b-spinner(loading, text="加载中...")
          b-alert(description="内容描述", show-icon) 包装内容

    .preview
      .preview-title 延迟
      .preview-container
        b-spinner(:loading="loading", delay="5000")
          b-alert(description="内容描述", show-icon) 5秒后关闭
        b-button(@onclick="loading = !loading") toggle
</template>

<script>
  export default {
    data () {
      return {
        loading: false
      }
    }
  }
</script>