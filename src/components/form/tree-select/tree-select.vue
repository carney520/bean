<template lang="jade">
  dropdown.form__select.text-field(v-ref:dropdown, :disabled="disabled", :dropdown-style="_dropdownStyle")
    .form__control-wrapper
      .form__control.as-select(
        v-el:input,
        :class="selectClasses",
        :tabindex="tabindex",
        @focus="_onFocus",
        @blur="_onBlur",
        )
        .text-field__wrapper
          .text-field__inner
            //- 占位符
            span.form__placeholder(v-show="showPlaceholder") {{ placeholder }}
            //- label
            span(v-if="!multiple") {{ label }}
            //- 多选标签
            .form__tags(v-else)
              .form__tag(v-for="item of selected")
                .form__tag-title {{ item[labelKey] }}
                icon.form__tag-close(name="times", @click.prevent.stop="remove(item)", awesome)
            //- 树搜索
            //-TODO
            //- input.form__show-search(type="text")

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

    //- 树形菜单
    .tree-content(slot="menu")
      slot
        tree(v-if="options", :items="options")
</template>

<script>
  import { coerceNumber } from '../../_helpers/coerces'
  import Select from '../select'
  import Tree from './tree'
  import {Dropdown} from '../../dropdown'
  import {Icon} from '../../icon'

  export default {
    name: 'TreeSelect',
    mixins: [
      // 继承 Select
      Select
    ],
    components: {
      Tree,
      Dropdown,
      Icon
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

      // in Select
      // - multiple
      // - dropdownStyle
      // - labelKey
      // - valueKey

      // extends
      // 展开的级数, 0表示展开所有
      expandLevel: {
        type: Number,
        default: 2,
        coerce: coerceNumber
      },

      // 渲染树的数据
      options: Array,

      // 异步加载数据
      loadData: Function,

      // children 键
      childrenKey: {
        type: String,
        default: 'children'
      }
    },

    data () {
      return {
        // in TextField
        // - hover

        // in Select
        // - selected
      }
    },

    computed: {
      // in TextField
      // - showClear

      // in Select
      // - selectClasses
      // - label
      // - showPlaceholder

      _dropdownStyle () {
        return {
          ...{
            minWidth: '234px'
          },
          ...this.dropdownStyle
        }
      },

      // digest时，判断是否需要往下遍历查找激活节点. (selected已清空)
      isFit () {
        if (!this.multiple) {
          return this.selected !== null
        } else {
          return this.selected.length === this.value.length
        }
      }
    },

    methods: {
      // in Control
      // - reset
      // - $changeInner
      // - $isChangingInner
      // - _onFocus
      // - _onBlur

      // in TextField

      // in Select
      // select
      // isActived
      // clear
      // remove
      // digest
    },

    watch: {
      /**
      * 渲染数据变化
      */
      options (val, oldVal) {
        if (val !== oldVal) {
          this.digest()
        }
      }
    },

    events: {
      'tree:created' (vm) {
        vm.$select = this
      }
    }
  }
</script>
