<template lang="jade">
div
  header.site-header
    .site-logo(v-link="{name: 'index'}") BEAN
  .site-wrapper
    aside.site-nav
      ul.b-nav
        li.b-nav-item(v-for="item of menu")
          template(v-if="item.group")
            span.b-nav-group-title {{ item.title }}
            ul.b-nav
              li(v-for="subItem of item.children")
                a.b-nav-link(v-link="{name: subItem.link}") {{ subItem.title }}
          a.b-nav-link(v-else, v-link="{name: item.link}") {{ item.title }}
    main.site-body
      //- article
      router-view(keep-alive)
  footer.site-footer
</template>

<script>
  export default {
    name: 'Doc',
    data () {
      return {
        menu: [
          {
            title: '介绍',
            link: 'introduce'
          },
          {
            group: true,
            title: '基本',
            children: [
              {
                title: 'Button 按钮',
                link: 'button'
              },
              {
                title: 'Layout 布局',
                link: 'layout'
              },
              {
                title: 'Icon 图标',
                link: 'icon'
              }
            ]
          },
          {
            group: true,
            title: '表单',
            children: [
              {
                title: 'CheckBox 复选框',
                link: 'checkbox'
              },
              {
                title: 'Radio 单选框',
                link: 'radio'
              },
              {
                title: 'switch 开关',
                link: 'switch'
              },
              {
                title: 'slider 滑动条',
                link: 'slider'
              },
              {
                title: 'datepicker 日期选择器',
                link: 'datepicker'
              },
              {
                title: 'select 下拉选择',
                link: 'select'
              },
              {
                title: 'cascader 级联下拉列表',
                link: 'cascader'
              },
              {
                title: 'input 输入框',
                link: 'input'
              },
              {
                title: 'Form 表单控制',
                link: 'form'
              }
            ]
          },
          {
            group: true,
            title: 'Feedback',
            children: [
              {
                title: 'Spinner 加载指示器',
                link: 'spinner'
              },
              {
                title: 'Alert 警告提示',
                link: 'alert'
              },
              {
                title: 'Message 全局消息提示',
                link: 'message'
              },
              {
                title: 'Notification 全局通知',
                link: 'notification'
              },
              {
                title: 'Modal 模态框',
                link: 'modal'
              },
              {
                title: 'Popover 气泡卡片',
                link: 'popover'
              },
              {
                title: 'Nprogress 全局进度条',
                link: 'nprogress'
              }
            ]
          },
          {
            group: true,
            title: 'Navigation',
            children: [
              {
                title: 'Pagination 分页',
                link: 'pagination'
              },
              {
                title: 'Tab 标签页',
                link: 'tab'
              },
              {
                title: 'Breadcrumbs 面包屑',
                link: 'breadcrumbs'
              }
            ]
          },
          {
            group: true,
            title: 'Other',
            children: [
              {
                title: 'Tooltip 文字提示',
                link: 'tooltip'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
.b-nav {
  list-style: none;
}

.b-nav-item {
}

.b-nav-group-title {
  font-size: .9em;
  color: lighten(gray, 10%);
}

.b-nav-link {
  font-size: 1.1em;
  line-height: 2em;
  color: darken(gray, 10%);

  &:hover {
    color: #009bb7;
    text-decoration: none;
  }
}
</style>