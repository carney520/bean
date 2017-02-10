<!--
树组件，用于递归渲染树数据
@author ivan
@date 2o16.9.7
-->
<template lang="jade">
  ul.tree
    li.tree__item(v-for="item of items")
      .tree__head
        .tree__collapsed(v-if="hasChildren(item)")
          icon(
            v-if="hasChildren(item)",
            awesome,
            name="caret-down",
            :type="'button' + (!isCollapsed(item) ? ':rotate-180' : '')",
            @click="toggle(item)")
        .tree__title(
          @click="select(item)",
          :class="{'--actived': this.$select.isActived(item), '--disabled': item.disabled}",
          )
          | {{ item[$select.labelKey] }}
      template(v-if="hasChildren(item)")
        tree.tree__submenu(
          v-show="!isCollapsed(item)",
          :items="item[$select.childrenKey]",
          :level="level + 1")
</template>

<script>
  import { coerceBoolean } from '../../_helpers/coerces'
  import {Icon} from '../../icon'

  export default {
    name: 'tree',
    components: {
      Icon
    },
    props: {
      items: {
        type: Array,
        required: true
      },

      level: {
        type: Number,
        default: 1
      },

      collapsed: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      }
    },

    data () {
      return {
        unCollapseds: []
      }
    },

    methods: {
      hasChildren (item) {
        return item[this.$select.childrenKey] && item[this.$select.childrenKey].length
      },

      isCollapsed (item) {
        return this.unCollapseds.indexOf(item) === -1
      },

      toggle (item) {
        if (this.isCollapsed(item)) {
          this.unCollapseds.push(item)
        } else {
          this.unCollapseds.$remove(item)
        }
      },

      select (item, init) {
        if (!item.disabled || init) {
          this.$select.select(item, init)
        }
      },

      didItemsUpdate () {
        const expand = () => {
          this.unCollapseds = []
          this.items.forEach(item => {
            this.unCollapseds.push(item)
          })
        }

        // 展开
        if (this.$select.expandLevel === 0) {
          expand()
        } else if (this.$select.expandLevel > this.level) {
          expand()
        }
      },

      didUpdate (digest) {
        const selectedValue = this.$select.value
        const valueKey = this.$select.valueKey
        const multiple = this.$select.multiple

        if (digest && this.$select.isFit) {
          return false
        }

        for (let i = 0, l = this.items.length; i < l; i++) {
          const item = this.items[i]
          const itemValue = item[valueKey]
          if (multiple) {
            selectedValue.forEach((value) => {
              if (value === itemValue) {
                this.select(item, true)
              }
            })
          } else {
            if (selectedValue === itemValue) {
              this.select(item, true)
              return false
            }
          }
        }

        // propagation
        return true
      }
    },

    created () {
      // 向tree-select 注册
      this.$dispatch('tree:created', this)
    },

    ready () {
      this.didUpdate(false)
      this.didItemsUpdate()
    },

    events: {
      'select:digest' () {
        return this.didUpdate(true)
      }
    },

    watch: {
      'items' () {
        this.didItemsUpdate()
      }
    }
  }
</script>
