<template lang="jade">
article
  h2 Form
  p 表单
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-form props
        | 属性 | 说明                                                         | 类型   |  默认值  | 
        |------|-------------------------------------------------------------|-------|----------|

  h4 示例
  .previews
    .preview
      .preview-title 基本使用
      .preview-container.test-form
        b-form
          b-form-group
            b-label Name:
            b-input
          b-form-group
            b-label Password:
            b-input(type="password")

    .preview
      .preview-title Grid
      .preview-container.test-form
        b-form(layout="grid")
          b-form-group
            b-cell(size="3")
              b-label Name:
            b-cell(size="9")
              b-input
            b-cell(size="3")
              b-label Password:
            b-cell(size="9")
              b-input(type="password")
          b-form-group
            b-cell(size="3")
              b-label 性别:
            b-cell(size="9")
              b-radio(:value.sync="sex", checked-Value="男") 男
              b-radio(:value.sync="sex", checked-Value="女") 女
          b-form-group
            b-cell(size="3")
              b-label 自我介绍:
            b-cell(size="9")
              b-input(type="textarea")
          b-form-group
            b-cell(size="3")
              b-label 套餐:
            b-cell(size="9")
              b-select(:options="['入门', '中级', '高级']")
            b-cell(size="3")
              b-label 加速:
            b-cell(size="9")
              b-switch
          b-form-group
            b-cell(size="3")
              b-label 生日:
            b-cell(size="9")
              b-datepicker

    .preview
      .preview-title Inline
      .preview-container.test-form
        b-form(layout="inline")
          b-form-group
            b-label Name:
            b-input
          b-form-group
            b-label select:
            b-select
              b-option(value="1") one
              b-option(value="2") two

    .preview
      .preview-title help text
      .preview-container.test-form
        p inline
        b-form(layout="inline")
          b-form-group
            b-label Name:
            b-input
            b-help-text 请输入用户名
          b-form-group
            b-label Password:
            b-input(type="password")
            b-help-text 请输入密码
        p horizontal
        b-form
          b-form-group
            b-label Name:
            b-input
            b-help-text 请输入用户名
          b-form-group
            b-label Password:
            b-input(type="password")
            b-help-text 请输入密码

    .preview
      .preview-title 表单验证
      .preview-container.test-form
        b-form(:validators="validators", v-ref:form, :get-status.sync="status")
          b-form-group
            b-label Name:
            b-input(name="name")
            b-help-text(for="name")
          b-form-group
            b-label Password:
            b-input(type="password", name="password")
            b-help-text(for="password")
          b-form-group
            b-label Confirm Password:
            b-input(type="password", name="passwordAgain")
            b-help-text(for="passwordAgain")
          b-button(native-type="submit") 提交
          code.
            status: {{ status | json }}
</template>

<script>
  export default {
    data () {
      return {
        sex: '男',
        status: {},
        validators: {
          name: {
            trigger: 'onblur',
            rules: {type: 'string', required: true}
          },
          password: {
            trigger: 'onblur',
            rules: {type: 'string', required: true}
          },
          passwordAgain: {
            trigger: 'onblur',
            rules: [
              {type: 'string', required: true},
              {sameAs: 'password', message: '密码不匹配'}
            ]
          }
        }
      }
    }
  }
</script>