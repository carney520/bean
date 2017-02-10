<template lang="jade">
article
  h2 Select
  p 下拉选择器
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-select props
        | 属性 | 说明                                                         | 类型   |  默认值  | 
        |------|-------------------------------------------------------------|-------|----------|

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-select
        b-select(placeholder="placeholder", :value.sync="one")
          b-option(value="one") one
          b-option(value="two") two
          b-option(value="three") three
    .preview
      .preview-title 使用options props 设置选项
      .preview-container.test-select
        b-select(placeholder="placeholder", :value.sync="two", :options="['one', 'two', 'three']")

    .preview
      .preview-title 多选模式
      .preview-container.test-select
        b-select(placeholder="placeholder", :value.sync="three", :options="['one', 'two', 'three']", multiple)

    .preview
      .preview-title 树形选择器
      .preview-container.test-select
        b-tree-select(placeholder="placeholder", :value.sync="four", :options="options1")

    .preview
      .preview-title 树形选择器, 多选模式
      .preview-container.test-select
        b-tree-select(placeholder="placeholder", :value.sync="five", :options="options1", multiple)
</template>

<script>
  export default {
    data () {
      return {
        one: 'one',
        two: 'two',
        three: [],
        four: null,
        five: [],
        options1: [
          {
            label: 'one',
            value: 'one',
            children: [
              {
                label: 'one1',
                value: 'one1'
              },
              {
                label: 'one2',
                value: 'one2'
              }
            ]
          },
          {
            label: 'two',
            value: 'two',
            children: [
              {
                label: 'two1',
                value: 'two1'
              }
            ]
          },
          {
            label: 'three',
            value: 'three'
          }
        ]
      }
    }
  }
</script>