<template lang="jade">
article
  h2 Notifcation
  p 全局通知
  h4 API

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-tooltip
        b-button(@onclick="$notification({title: 'hello', content: content})") 打开通知

    .preview
      .preview-title 多种类型
      .preview-container.test-tooltip
        b-button(@onclick="$notification.success({title: 'success', content: content})") success
        b-button(@onclick="$notification.warning({title: 'warning', content: content})") warning
        b-button(@onclick="$notification.error({title: 'error', content: content})") error
        b-button(@onclick="$notification.info({title: 'info', content: content})") info
        b-button(@onclick="$notification.confirm({title: 'confrim', content: content, onConfirm: onConfirm})") confirm
</template>

<script>
  export default {
    data () {
      return {
        content: 'this is the content of the notification. This is the content of the notification. This is the content of the notification.'
      }
    },
    methods: {
      onConfirm () {
        alert('confirm')
      }
    }
  }
</script>
