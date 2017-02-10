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
        b-popover(title="标题")
          b-button 显示卡片
          template(slot="content")
            h1 气泡卡片

  .previews
    .preview
      .preview-title 位置
      .preview-container.test-tooltip
        b-popover(title="标题", position="top")
          b-button 上上
          template(slot="content")
            h1 气泡卡片

        b-popover(title="标题")
          b-button 下下
          template(slot="content")
            h1 气泡卡片

        b-popover(title="标题", position="left")
          b-button 左左
          template(slot="content")
            h1 气泡卡片

        b-popover(title="标题", position="right")
          b-button 右右
          template(slot="content")
            h1 气泡卡片

  .previews
    .preview
      .preview-title 触发方式
      .preview-container.test-tooltip
        b-popover(title="标题", trigger="hover")
          b-button hover
          template(slot="content")
            h1 气泡卡片

        b-popover(title="标题", trigger="click")
          b-button 点击
          template(slot="content")
            h1 气泡卡片

        b-popover(title="标题", trigger="focus")
          b-button 焦点
          template(slot="content")
            h1 气泡卡片

  .previews
    .preview
      .preview-title 气泡确认框
      .preview-container.test-tooltip
        b-popover-confirm(title="确认删除?", position="right")
          b-button(theme="alert") 删除 

</template>