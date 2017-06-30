<template lang="jade">
article
  h2 Popover
  p 气泡卡片
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-popover props

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-tooltip
        b-alert Alert text
        b-alert(description="Alert description") Alert text

    .preview
      .preview-title 样式
      .preview-container.test-tooltip
        b-alert(type="success") success text
        b-alert(type="alert") alert text
        b-alert(type="warning") warning text
        b-alert(type="primary") primary text

    .preview
      .preview-title 尺寸
      .preview-container.test-tooltip
        b-alert(type="success", size="small") small text
        b-alert(type="success", size="default") default text
        b-alert(type="success", size="large") large text

    .preview
      .preview-title 可关闭
      .preview-container.test-tooltip
        b-alert(type="success", dismissable) success text

    .preview
      .preview-title 定时关闭
      .preview-container.test-tooltip
        b-alert(type="success", v-ref:alert) success text
        b-button(@onclick="setupTimer", :loading="loading") 启动

    .preview
      .preview-title 显示图标
      .preview-container.test-tooltip
        b-alert(type="success", show-icon) success text
        b-alert(type="alert", show-icon) alert text
        b-alert(type="warning", show-icon) warning text
        b-alert(type="primary", show-icon) primary text

        b-alert(type="success", show-icon, description="description") success text
</template>

<script>
  export default {
    data () {
      return {
        loading: false
      }
    },
    methods: {
      setupTimer () {
        if (this.$refs.alert) {
          this.$refs.alert.duration = 3000
          this.loading = true
          setTimeout(() => { this.loading = false }, 3000)
        }
      }
    }
  }
</script>
