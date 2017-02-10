<!-- 富文本编辑器 -->
<!-- 依赖于 quill@1.0 -->
<template lang="jade">
  div
    // 工具栏
    div(v-el:toolbar)
      span.ql-formats
        select.ql-size
          option(v-for="item in fontSize",
            :value="item.value",
            :selected="item.default"
            ) {{ item.label }}
        select.ql-font
          option(v-for="item in fontFamily",
            :value="item.value",
            :selected="item.default",
            ) {{ item.label }}

      span.ql-formats
        button.ql-bold
        button.ql-italic
        button.ql-underline
        button.ql-strike

      span.ql-formats
        button.ql-script(value="sub")
        button.ql-script(value="super")

      // 颜色
      span.ql-formats
        select.ql-color
        select.ql-background

      span.ql-formats
        select.ql-header
          option(selected) 正文
          option(v-for="item in headers",
            :value="item.value",
          ) {{ item.label }}

      span.ql-formats
        button.ql-list(value="ordered")
        button.ql-list(value="bullet")

      // 缩进
      span.ql-formats
        button.ql-indent(value="-1")
        button.ql-indent(value="+1")

      span.ql-formats
        button.ql-direction(value="rtl")
        select.ql-align
          option(selected)
          option(value="center")
          option(value="right")
          option(value="justify")

      span.ql-formats
        button.ql-link
        button.ql-image
        button.ql-video

    div(v-el:container)
</template>

<script>
  import Quill from 'quill'
  import {coerceNumber, coerceBoolean} from 'helpers/coerces'
  import { noop } from 'helpers/util'

  export default {
    props: {
      // 占位文本
      placeholder: {
        type: String,
        default: '',
      },

      // 是否只读
      readonly: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false,
      },

      // 主题
      theme: {
        type: String,
        default: 'snow'
      },

      // html or deltas
      contentFormat: {
        type: String,
        default: 'html',
      },

      // 双向绑定模型
      model: {
        type: String,
        required: true,
        twoWay: true,
      },

      // onchange
      onchange: {
        type: Function,
        default: noop,
      },

      // 自定义文字大小
      // @return Array - [{value: '10px', label: 'small'}]
      fontSize: {
        type: Array,
        default: () => {
          return [
            {label: "小", value: '10px'},
            {label: "普通", value: '13px', default: true},
            {label: "大", value: '18px'},
            {label: "超大", value: '32px'},
          ]
        },
      },

      // 自定义字体
      fontFamily: {
        type: Array,
        default: () => {
          return [
            // css基础字体
            {label: 'sans serif', value: 'sans serif', default: true},
            {label: 'serif', value: 'serif'},
            {label: 'monospace', value: 'monospace'},
            // 中文字体, window, macos, window
            {label: '宋体', value: 'SimSun, STSong'},
            {label: '黑体', value: 'SimHei, STHeiti'},
            {label: '仿宋', value: 'FangSong, STFangsong'},
            {label: '楷体', value: 'KaiTi, STKaiti'},
          ]
        }
      },

      // 标题
      headers: {
        type: Array,
        default: () => {
          return [
            {label: '标题1', value: '1'},
            {label: '标题2', value: '2'},
            {label: '标题3', value: '3'},
            {label: '标题4', value: '4'},
            {label: '标题5', value: '5'},
            {label: '标题6', value: '6'},
          ]
        }
      },

      // 节流优化
      throttle: {
        type: Number,
        default: 400,
      },
    },

    methods: {
      initializeFontSize (quill) {
        let  Parchment = Quill.import('parchment')
        let  FontStyle = new Parchment.Attributor.Style('size', 'font-size', {
          scope: Parchment.Scope.INLINE
        })
        Quill.register(FontStyle, true)
      },

      initializeFontFamily (quill) {
        let  Parchment = Quill.import('parchment')
        let  FontFamily = new Parchment.Attributor.Style('font', 'font-family', {
          scope: Parchment.Scope.INLINE
        })
        Quill.register(FontFamily, true)
      },

      initialize (quill) {
        this.initializeFontSize(quill)
        this.initializeFontFamily(quill)
      },

      quillWatch () {
        if (this._timer) {
          clearTimeout(this._timer)
        }

        this._timer = setTimeout(() => {
          let value
          if (this.contentFormat === 'html') {
            value = this.$els.container.querySelector('.ql-editor').innerHTML
          } else {
            value = this,$quill.getContents()
          }
          this.model = value
          this.onchange(value)
        }, this.throttle)
      },

    },

    ready () {
      // 初始值
      let quill = new Quill(this.$els.container, {
          theme: this.theme,
          readonly: this.readonly,
          placeholder: this.placeholder,
          modules: {
            toolbar:{
              container: this.$els.toolbar,
            },
          },
        }
      )

      this.initialize(quill)
      this.$quill = quill
      this.$quill.on('text-change', this.quillWatch)

      // 初始值
      this.$nextTick(() => {
        if (this.model) {
          this.$els.container.querySelector('.ql-editor').innerHTML = this.model
        }
      })

    },

    beforeDestroy () {
      this.$quill.off('text-change', this.quillWatch)
    },
  }
</script>

<style lang="scss">
  @import "./quill";

  .ql-editor {
    min-height: 10em;
  }
</style>
