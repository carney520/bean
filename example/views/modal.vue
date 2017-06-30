<template lang="jade">
article
  h2 Modal
  p 模态框
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-modal props
        | 属性 | 说明                                                         | 类型   |  默认值  | 
        |------|-------------------------------------------------------------|-------|----------|

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-modal
        b-modal(title="模态框示例", :show.sync="modal1")
          h1 模态框内容
          p hello modal
        b-button(@onclick="modal1 = !modal1") 显示模态框

    .preview
      .preview-title 异步关闭
      .preview-container.test-modal
        b-modal(
          title="模态框示例2",
          :show.sync="modal2",
          :before-close="beforeModal2Close",
          :loading="modal2Loading")
          h1 模态框内容
          p hello modal
        b-button(@onclick="modal2 = !modal2") 显示模态框

    .preview
      .preview-title confirm
      .preview-container.test-modal
        b-button(@onclick="showConfirm1") 显示模态框

    .preview
      .preview-title 消息提示框
      .preview-container.test-modal
        b-button(@onclick="$modal.success('success')") success
        b-button(@onclick="$modal.warning('warning')") warning
        b-button(@onclick="$modal.error('error')") error
        b-button(@onclick="$modal.info('info')") info
</template>

<script>
  export default {
    data () {
      return {
        modal1: false,
        modal2: false,
        modal2Loading: false
      }
    },
    methods: {
      beforeModal2Close (next) {
        this.modal2Loading = true
        setTimeout(() => {
          this.modal2Loading = false
          next()
        }, 3000)
      },

      showConfirm1 () {
        this.$modal.confirm({
          title: 'confirmTitle',
          content: 'confirmContent',
          onConfirm () {
            alert('confirm')
          },
          onCancel () {
            alert('cancel')
          }
        })
      }
    }
  }
</script>