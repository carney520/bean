<template lang="jade">
article
  h2 Cascader
  p 级联下拉选择器
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-cascader props
        | 属性 | 说明                                                         | 类型   |  默认值  | 
        |------|-------------------------------------------------------------|-------|----------|

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-select
        p {{ one | json }}
        b-cascader(:options="options1", :value.sync="one")
</template>

<script>
  export default {
    data () {
      return {
        one: null,
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