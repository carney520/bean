<!--
级联下拉列表
@author ivan
@date 2016.9.19
-->
<template lang="jade">
  dropdown(v-ref:dropdown, :disabled="disabled", :dropdown-style="_dropdownStyle")
    //- 展开 slot
    slot
      .form__control-wrapper
        .form__control.as-select(
          v-el:input,
          :class="cascaderClasses",
          :tabindex="tabindex",
          @focus="_onFocus",
          @blur="_onBlur",
          )
          .text-field__wrapper
            .text-field__inner
              //- 占位符
              span.form__placeholder(v-show="showPlaceholder") {{ placeholder }}
              span {{ label }}
              //- 清除按钮
              icon.form__clear(
                v-show="showClear",
                name="times-circle",
                type="button",
                awesome,
                transition="fade",
                @click.stop.prevent="clear")
            .text-field__addon
              icon.icon-inset-control(name="sort", awesome)
    .cascader-menus(slot="menu")
      menu.cascader-menus__menu(v-for="(level, item) of list")
        menu-item.cascader-menus__menu-item(
          v-for="child of item",
          :disabled="child.disabled",
          :actived="_isActived(level, $index)"
          @click.stop.prevent="select(level, $index, child)",
          )
          span {{ child[labelKey] }}
          icon(v-if="child[childrenKey]", name="angle-right", awesome)
</template>

<script>
  import TextField from '../text-field'
  import { coerceBoolean } from '../../_helpers/coerces'
  import {Dropdown} from '../../dropdown'
  import {Icon} from '../../icon'
  import {Menu, MenuItem} from '../../menu'

  export default {
    name: 'Cascader',
    mixins: [
      TextField
    ],
    components: {
      Dropdown,
      Icon,
      Menu,
      MenuItem
    },
    props: {
      // in Control
      // - name
      // - value        *
      // - disabled     *
      // - size         *

      // in TextField
      // - placeholder  *
      // - allowClear   *

      // extends

      options: {
        type: Array,
        required: true
      },

      // - 定义下拉pane的样式
      dropdownStyle: Object,

      // - 定制渲染数据的键
      // 标签键
      labelKey: {
        type: String,
        default: 'label'
      },

      // 值键
      valueKey: {
        type: String,
        default: 'value'
      },

      // 子集合键
      childrenKey: {
        type: String,
        default: 'children'
      },

      // 渲染label, 第一个参数是选中的label， 第二个参数是选中的原始数据项
      displayFormatter: {
        type: Function,
        default: (labels, selecteds) => labels.join('/')
      },

      // 在选中子项时就立即改变value
      changeOnSelect: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    data () {
      return {
        // 已选择项
        selected: [],
        // 已选中路径
        path: [],
        // 用于渲染列表
        list: []
      }
    },

    computed: {
      label () {
        const labelKey = this.labelKey
        const labels = this.selected.map(item => item[labelKey])
        return this.displayFormatter(labels, this.selected)
      },

      showPlaceholder () {
        return this.selected.length === 0
      },

      cascaderClasses () {
        return [
          `--${this.size}`,
          {
            '--disabled': this.disabled
          }
        ]
      }
    },

    methods: {
      // in Control
      // - reset
      // - $changeInner
      // - $isChangingInner
      // - _onFocus
      // - _onBlur

      // extends
      select (level, index, item) {
        if (item.disabled) return

        const children = item[this.childrenKey]
        const currentLevel = this.list.length

        this.list = this.list.slice(0, level + 1)
        this.path = this.path.slice(0, level)
        this.path.push(index)

        if (this.changeOnSelect) {
          this.selected = this.selected.slice(0, level)
          this.selected.push(item)
          this._onChange()
        }

        if (Array.isArray(children) && children.length) {
          this.list.push(children)
          // keep focus
          this.$els.input.focus()
        } else {
          // 选择完成
          this.$refs.dropdown.hide()
          if (!this.changeOnSelect) {
            this.selected = this._getSelectedByPath()
            this._onChange()
          }
        }
      },

      clear () {
        this.$changeInner(() => {
          this.selected =
          this.path =
          this.value = []
          this.list = [this.options]
          this.$refs.dropdown.hide()
        })
      },

      _onChange () {
        this.$changeInner(() => {
          this.value = this.selected.map(item => item[this.valueKey])
          this.$notify('onchange', null, {value: this.value})
        })
      },

      _getSelectedByPath () {
        let selected = []
        let current = this.options
        this.path.forEach(index => {
          selected.push(current[index])
          current = current[index][this.childrenKey]
        })
        return selected
      },

      _isActived (level, index) {
        return this.path[level] === index
      },

      // value刷新，或初始化
      _refresh () {
        const value = this.value
        if (value == null || !value.length) return this.clear()

        let path = []
        let selected = []
        let list = [this.options]
        let current = this.options

        for (let val of value) {
          let got = false
          for (let i = 0, l = current.length; i < l; i++) {
            let item = current[i]
            if (item[this.valueKey] === val) {
              path.push(i)
              selected.push(item)
              current = item[this.childrenKey]
              got = true
              break
            }
          }

          if (current && got) {
            list.push(current)
          } else {
            break
          }
        }

        this.selected = selected
        this.path = path
        this.list = list
      }
    },

    watch: {
      value () {
        if (!this.$isChangingInner()) {
          this._refresh()
        }
      }
    },

    ready () {
      this._refresh()
    }
  }
</script>
