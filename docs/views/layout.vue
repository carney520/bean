<template lang="jade">
article
  h2 布局
  p 24网格系统
  h4 API
  h4 示例 

  .previews
    .preview
      .preview-title 基本布局
      .preview-container.test-layout
        b-grid
          b-cell(size="12") 12
          b-cell(size="12") 12
        b-grid
          b-cell(size="8") 8
          b-cell(size="8") 8
          b-cell(size="8") 8
        b-grid
          b-cell(size="6") 6
          b-cell(size="6") 6
          b-cell(size="6") 6
          b-cell(size="6") 6
      .preview-code
        marked
          textarea.mark.
            ```html
            <b-grid>
              <b-cell size="12">12</b-cell>
              <b-cell size="12">12</b-cell>
            </b-grid>

            <b-grid>
              <b-cell size="8">8</b-cell>
              <b-cell size="8">8</b-cell>
              <b-cell size="8">8</b-cell>
            </b-grid>

            <b-grid>
              <b-cell size="6">6</b-cell>
              <b-cell size="6">6</b-cell>
              <b-cell size="6">6</b-cell>
              <b-cell size="6">6</b-cell>
            </b-grid>
            ```

  .previews
    .preview
      .preview-title 偏移
      .preview-container.test-layout
        b-grid
          b-cell(size="8") 8
          b-cell(size="8", offset="8") 8
        b-grid
          b-cell(size="6", offset="6") 6
          b-cell(size="6", offset="6") 6
      .preview-code
        marked
          textarea.mark.
            ```html
            <b-grid>
              <b-cell size="8">8</b-cell>
              <b-cell size="8", offset="8">8</b-cell>
            </b-grid>
            <b-grid>
              <b-cell size="6", offset="6">6</b-cell>
              <b-cell size="6", offset="6">6</b-cell>
            </b-grid>
            ```

  .previews
    .preview
      .preview-title 居中
      .preview-container.test-layout
        b-grid
          b-cell(size="8", center) 8 center
      .preview-code
        marked
          textarea.mark.
            ```html
            <b-grid>
              <b-cell size="8" center="true">8</b-cell>
            </b-grid>
            ```

  .previews
    .preview
      .preview-title 布局排序
      .preview-container.test-layout
        b-grid
          b-cell(size="18", push="6") 18 push-6
          b-cell(size="6", pull="18") 6 pull-18
      .preview-code
        marked
          textarea.mark.
            ```html
            <b-grid>
              <b-cell size="18" push="6">18 push-6</b-cell>
              <b-cell size="6" pull="18">6 pull-18</b-cell>
            </b-grid>
            ```

  .previews
    .preview
      .preview-title 响应式
      p 属性size, offset, push, pull 都接受形如 “small:medium:large” 类型的字符串，指定不同端点的值
      .preview-container.test-layout
        b-grid
          b-cell(size="8:6:4") 8:6:4
          b-cell(size="8:6:4") 8:6:4
          b-cell(size="8:6:4") 8:6:4
          b-cell(size="8:6:4") 8:6:4
          b-cell(size="8:6:4") 8:6:4
          b-cell(size="8:6:4") 8:6:4
      .preview-code
        marked
          textarea.mark.
            ```html
            <b-grid>
              <b-cell size="8:6:4">8:6:4</b-cell>
              <b-cell size="8:6:4">8:6:4</b-cell>
              <b-cell size="8:6:4">8:6:4</b-cell>
              <b-cell size="8:6:4">8:6:4</b-cell>
              <b-cell size="8:6:4">8:6:4</b-cell>
              <b-cell size="8:6:4">8:6:4</b-cell>
            </b-grid>
            ```

  .previews
    .preview
      .preview-title collapse
      .preview-container.test-layout
        b-grid(collapse)
          b-cell(size="12") 12
          b-cell(size="12") 12
      .preview-code
        marked
          textarea.mark.
            ```html
            <b-grid collapse="true">
              <b-cell size="12">12</b-cell>
              <b-cell size="12">12</b-cell>
            </b-grid>
            ```
</template>

<style lang="scss">
.test-layout {
  .col {
    border: 1px solid gray;
    line-height: 2;
    background-color: lighten(gray, 20%);
    background-clip: content-box; 
  }

  .row {
    margin-top: 1em;
  }
}
</style>