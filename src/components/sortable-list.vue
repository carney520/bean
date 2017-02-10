<!-- 可排序列表容器 -->
<template lang="jade">
  div
    div(v-sortable="sortableOptions", v-el:sortable)
      slot
</template>

<script>
  import { coerceNumber, coerceBoolean } from 'helpers/coerces'

  export default {
    props: {
      // 拖拽触发点
      handler: {
        type: String,
        default: undefined,
      },

      animation: {
        type: Number,
        coerce: coerceNumber,
        default: 300,
      },

      // 传递给sortable的原始选项
      rawOptions: {
        type: Object,
        default: () => ({}),
      },

      // 指定哪些子项可以被拖拽
      itemName: {
        type: String,
        default: '.item',
      },

      // 数据项的 排序值 所在的属性名, 如 <li data-sort="0">
      sortKeyAttribute: {
        type: String,
        default: 'data-sort',
      },

      // 源数据中被修改的排序键
      sortKey: {
        type: String,
        default: 'sort',
      },

      // 用于排序的源数据， sortable会修改它们 的排序键
      orgin: {
        type: Object,
        required: true,
        twoWay: true,
      },

      // 是否惰性计算排序键
      lazy: {
        type: Boolean,
        default: false,
      },
    },

    data () {
    },

    computed: {
      sortableOptions () {
        return {
          handler: this.handler,
          draggable: this.itemName,
          ...this.rawOptions,
        }
      },
    },

  }
</script>
