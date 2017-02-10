/**
* 类select组件的mixin
* select, tree-select 的基类
*/

import TextField from './text-field'
import { coerceBoolean } from '../_helpers/coerces.js'

export default {
  mixins: [
    // 继承TextField
    TextField
  ],
  props: {
    // in Control
    // - name
    // - value        *
    // - disabled     *
    // - size         *

    // in TextField
    // - placeholder  *
    // - allowClear   *
    // - onSelect     *

    // extends
    // - 多选模式
    multiple: {
      type: Boolean,
      coerce: coerceBoolean
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
    }
  },

  data () {
    return {
      // 当前选中的子项
      selected: null
    }
  },

  computed: {
    // in TextField
    // - showClear

    // extends

    /**
    * 下拉列表的类
    */
    selectClasses () {
      return [
        `--${this.size}`,
        {
          '--disabled': this.disabled
        }
      ]
    },

    /**
    * 下拉列表的label
    */
    label () {
      if (this.selected && !this.multiple) {
        return this.selected[this.labelKey] || this.selected.label
      } else {
        return null
      }
    },

    /**
    * @override TextField.showPlaceholder
    * 是否显示placehold
    */
    showPlaceholder () {
      return this.multiple
        ? !this.selected || this.selected.length === 0
        : !this.label
    }
  },

  methods: {
    // in Control
    // - reset
    // - $changeInner
    // - $isChangingInner

    // in TextField
    // - _onFocus
    // - _onBlur

    // extends

    /**
    * 选中子项，
    * @param {Object} item - 子项实体，包含label/[labelKey]和value/[valueKey]两个属性
    * @param {Boolean} init - 初始化select， init为true时，不会改变value的值
    */
    select (item, init) {
      this.$changeInner(() => {
        // clear
        if (item === null) {
          if (this.multiple) {
            this.value = []
            this.selected = []
          } else {
            this.value = null
            this.selected = null
          }
          return
        } else {
          const value = item[this.valueKey] || item.value

          if (this.multiple) {
            this.selected || (this.selected = [])
            this.value || (this.value = [])

            // selected
            if (this.selected.indexOf(item) !== -1) {
              this.selected.$remove(item)
              this.value.$remove(value)
            } else {
              this.selected.push(item)
              if (!init) this.value.push(value)
            }
          } else {
            this.selected = item
            if (!init) {
              this.value = value
            }
          }
        }

        // hide
        if (!this.multiple) {
          this.$refs.dropdown.hide()
        } else {
          // keep focus
          this.$els.input.focus()
        }

        // emit onselect
        this.$notify('onselect', null)
      })
    },

    /**
    * 判断子项是否激活
    * @param {Object} item - 子项实体
    */
    isActived (item) {
      if (this.multiple) {
        return this.selected && (this.selected.indexOf(item) !== -1)
      } else {
        return this.selected === item
      }
    },

    /**
    * 清除选中
    */
    clear () {
      this.select(null)
      this.$refs.dropdown.hide()
    },

    /**
    * 多选模式下，剔除某个子项
    * @param {Object} item - 子项实体
    */
    remove (item) {
      this.$changeInner(() => {
        const value = item[this.valueKey] || item.value
        this.selected.$remove(item)
        this.value.$remove(value)
      })
    },

    /**
    * 从外部改变value或者treeData变化都将导致 digest. 这将导致tree-select需要向下遍历激活节点
    */
    digest () {
      const value = this.value

      // clear
      this.selected = this.multiple ? [] : null

      // 是否需要digest
      if (value == null ||
          Array.isArray(value) && value.length === 0 ||
          typeof value === 'string' && value.trim() === ''
      ) {
        return
      }

      // emit
      this.$broadcast('select:digest')
    }
  },

  watch: {
    /**
    * 侦测value的变化，如果是从外部变化，需要响应外部数据的变化
    */
    value (value, oldValue) {
      if (this.multiple) {
        this.$notify('onchange', null, {value, oldValue})
      } else if (value !== oldValue) {
        this.$notify('onchange', null, {value, oldValue})
      }

      // 外部变化
      if (!this.$isChangingInner()) {
        this.digest()
      }
    }
  }
}
