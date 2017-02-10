<template lang="jade">
article
  h2 Icon
  p 支持font awesome 和 svg srpite
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-icon props
        | 属性 | 说明 | 类型 | 默认值 |
        |------|-----|-----|--------|
        | name | font awesome 图标名或者svg-sprite 的id | String | 无 |
        | type | 图标样式, 多个样式以‘:’分隔 | String | 无 |
        | awesome | 指定是否是font awesome 图标 | Boolean | true |
  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-icon
        b-icon(name="adjust")
        b-icon(name="arrows")
      .preview-code
        marked
          textarea.mark.
            ```html
            <b-icon name="adjust"></b-icon>
            <b-icon name="arrows"></b-icon>
            ```

    .preview
      .preview-title 颜色
      .preview-container.test-icon
        b-icon(name="adjust", type="primary")
        b-icon(name="adjust", type="secondary")
        b-icon(name="adjust", type="success")
        b-icon(name="adjust", type="warning")
        b-icon(name="adjust", type="alert")
      .preview-code
        marked
          textarea.mark.
            ```html
            <b-icon name="adjust" type="primary"></b-icon>
            <b-icon name="adjust" type="secondary"></b-icon>
            <b-icon name="adjust" type="success"></b-icon>
            <b-icon name="adjust" type="warning"></b-icon>
            <b-icon name="adjust" type="alert"></b-icon>
            ```
</template>