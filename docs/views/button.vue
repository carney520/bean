<template lang="jade">
article
  h2 Button
  p 基础组建，触发业务逻辑时使用
  h4 API
  .api-preview
    marked
      textarea.mark.
        ##### b-button props
        | 属性 | 说明                                                         | 类型   |  默认值  | 
        |------|-------------------------------------------------------------|-------|----------|
        | type | 按钮类型，可选值为solid, flat, outline, dashed                | String | solid |
        | theme | 颜色类型，可选值为primary, secondary, success, warning, alert| String | primary |
        | size  | 大小, tiny, small, default, large                            | String | default |
        | circle|  圆形样式                                                   | Boolean | false |
        | block | 块模式                                                      | Boolean | false |
        | disabled| 禁用模式                                                  | Boolean | false |
        | checked| 选中                                                     | Boolean | false |
        | loading | 加载中                                                   | Boolean | false |

        ##### b-button slots
        | name | 说明                                                         |
        |------|--------------------------------------------------------------|
        |default| 按钮文本                                                     |

        ##### b-button events
        | name | 说明                                                         |
        |------|--------------------------------------------------------------|
        |onClick| 点击事件，在disabled、loading状态下不会触发                      |

        ##### b-button-group props
        | 属性 | 说明                                                         | 类型   |  默认值  | 
        |------|-------------------------------------------------------------|-------|----------|
        | direction | 方向, 可选值为 horizontal, vertical                      | String | horizontal |
        | size | 大小，同b-button                                             | String | default |

  h4 示例
  .previews
    .preview
      .preview-title 基本类型
      .preview-container.test-button
        b-button example
        b-button(type="solid") solid
        b-button(type="flat") flat
        b-button(type="outline") outline
        b-button(type="dashed") dashed
      .preview-code
        marked
          textarea.mark.
            ```html
            <b-button>example</b-button>
            <b-button type="solid">solid</b-button>
            <b-button type="flat">flat</b-button>
            <b-button type="outline">outline</b-button>
            <b-button type="dashed">dashed</b-button>
            ```
    .preview
      .preview-title 颜色
      .preview-container.test-button
        b-button(theme="primary") primary
        b-button(theme="secondary") secondary
        b-button(theme="success") success
        b-button(theme="warning") warning
        b-button(theme="alert") alert
        div
        b-button(theme="primary", type="flat") primary
        b-button(theme="secondary", type="flat") secondary
        b-button(theme="success", type="flat") success
        b-button(theme="warning", type="flat") warning
        b-button(theme="alert", type="flat") alert
        div
        b-button(theme="primary", type="outline") primary
        b-button(theme="secondary", type="outline") secondary
        b-button(theme="success", type="outline") success
        b-button(theme="warning", type="outline") warning
        b-button(theme="alert", type="outline") alert
      .preview-code
        marked
          textarea.mark.
            ```html
            <b-button theme="primary">primary</b-button>
            <b-button theme="secondary">secondary</b-button>
            <b-button theme="success">success</b-button>
            <b-button theme="warning">warning</b-button>
            <b-button theme="alert">alert</b-button>

            <b-button theme="primary", type="flat">primary</b-button>
            <b-button theme="secondary", type="flat">secondary</b-button>
            <b-button theme="success", type="flat">success</b-button>
            <b-button theme="warning" type="flat">warning</b-button>
            <b-button theme="alert", type="flat">alert</b-button>

            <b-button theme="primary", type="outline">primary</b-button>
            <b-button theme="secondary", type="outline">secondary</b-button>
            <b-button theme="success", type="outline">success</b-button>
            <b-button theme="warning" type="outline">warning</b-button>
            <b-button theme="alert", type="outline">alert</b-button>
            ```

    .preview
      .preview-title 尺寸
      .preview-container.test-button
        b-button(size="tiny") tiny
        b-button(size="small") small
        b-button() default
        b-button(size="large") large
      .preview-code
        marked
          textarea.mark.
            ```html
            <b-button size="tiny">tiny</b-button>
            <b-button size="small">small</b-button>
            <b-button>default</b-button>
            <b-button size="large">large</b-button>
            ```

    .preview
      .preview-title 块模式
      .preview-container.test-button
        b-button(size="large", block) block button
      .preview-code
        marked
          textarea.mark.
            ```html
            <b-button size="large" block="true">block button</b-button>
            ```

    .preview
      .preview-title 状态
      .preview-container.test-button
        b-button(disabled) disabled
        b-button(checked) checked
        b-button(loading) loading
      .preview-code
        marked
          textarea.mark.
            ```html
            <b-button disabled="true">disabled</b-button>
            <b-button checked="true">checked</b-button>
            <b-button loading="true">loading</b-button>
            ```

    .preview
      .preview-title circle
      .preview-container.test-button
        b-button(circle) +
        b-button(theme="alert", circle) -
      .preview-code
        marked
          textarea.mark.
            ```html
            <b-button circle="true">+</b-button>
            <b-button circle="true" theme="alert">-</b-button>
            ```

    .preview
      .preview-title circle
      .preview-container.test-button
        b-button-group
          b-button A
          b-button B
        b-button-group(direction="vertical")
          b-button button A
          b-button button B
          b-button button C
      .preview-code
        marked
          textarea.mark.
            ```html
            <b-button-group>
              <b-button>A</b-button>
              <b-button>B</b-button>
            </b-button-group>
            <b-button-group direction="vertical">
              <b-button>button A</b-button>
              <b-button>button B</b-button>
              <b-button>button c</b-button>
            </b-button-group>
            ```
</template>

<script>
  export default {
  }
</script>

<style>
.test-button > .button,
.test-button > .button-group {
  margin-right: .5em;
  margin-bottom: 1em;
}
</style>