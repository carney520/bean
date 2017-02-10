<template lang="jade">
  ul(:class="[ level === 1 ? 'drilldown' : 'drilldown__menu']")
    li.drilldown__item(
      v-for="item in items",
      @mouseover="show($event, $index)",
      @mouseout="hide($event, $index)",
      :class="{'--selected': isSelected(item)}"
    )
      .drilldown__title(@click.stop="select(item)") {{ item[nameKey] }}
      template(v-if="item[childrenKey] && item[childrenKey].length")
        drilldown(
          :items="item[childrenKey]",
          :level="level + 1",
          v-show="canShow($index)",
          :name-key="nameKey",
          :value-key="valueKey",
          :children-key="childrenKey",
          :selected="selected",
          )
</template>

<script>
  import {coerceNumber} from 'helpers/coerces'

  export default {
    name: 'drilldown',
    props: {
      items: {
        type: Array,
        required: true
      },

      // fieldname of `name`
      nameKey: {
        type: String,
        default: 'name',
      },

      valueKey: {
        type: String,
        default: 'value',
      },

      // fieldname of `children`
      childrenKey: {
        type: String,
        default: 'children',
      },

      level: {
        type: Number,
        default: 1,
        coerce: coerceNumber,
      },

      selected: {
        default: null,
      },
    },
    data () {
      return {
        itemShowns: [],
      }
    },
    methods: {
      show (event, id) {
        let currentTarget = event.currentTarget
        let target = event.target
        if (currentTarget.contains(target)) {
          if (this.itemShowns.indexOf(id) === -1) {
            this.itemShowns.push(id)
          }
        }
      },

      hide (event, id) {
        // 后代，无须隐藏
        let relatedTarget = event.relatedTarget
        let currentTarget = event.currentTarget
        if (relatedTarget && currentTarget.contains(relatedTarget)) {
          return;
        } else {
          this.itemShowns.$remove(id)
        }
      },

      canShow (id) {
        return this.itemShowns.indexOf(id) !== -1
      },

      isSelected (item) {
        if (this.selected == item[this.valueKey]) {
          return true
        }
        return false
      },

      select (item, init = false) {
        this.$dispatch('drilldown:selected', item, init)
      },

      checkSelected () {
        for (let i = 0, l = this.items.length; i < l; i++) {
          const item = this.items[i]
          if (this.selected == item[this.valueKey]) {
            this.select(item, true)
            return true
          }
        }
        return false
      },
    },

    ready () {
      // 计算激活的数据项
      this.$nextTick(() => {
        this.checkSelected()
      })
    },

    events: {
      'custom-select:digest' () {
        // propagates
        return !this.checkSelected()
      },
    },
  }
</script>

<style lang="scss">
  @import "share";

  $drilldown-item-y-padding: .3em !default;
  $drilldown-item-x-padding: 2em !default;
  $drilldown-item-background: $white !default;
  $drilldown-item-border: 1px solid $light-gray !default;
  $drilldown-item-background-hover: $lightest-gray !default;

  $drilldown-max-width: 300px !default;

  %drilldown-menu {
    list-style: none;
    margin: 0;
  }

  @mixin drilldown {
    max-width: $drilldown-max-width;
    padding: 0 !important;
    @extend %drilldown-menu;
  }

  @mixin drilldown-item {
    position: relative;
    padding: $drilldown-item-y-padding $drilldown-item-x-padding;
    white-space: nowrap;
    cursor: pointer;
    // &:not(:last-child) {
    //   border-bottom: $drilldown-item-border;
    // }
  }

  @mixin drilldown-title {
    position: relative;
    padding-right: $drilldown-item-x-padding;
    margin-right: -$drilldown-item-x-padding / 2;
    &:not(:only-child) {
      &::after {
        @include triangle(.35rem, $medium-gray, right);
        @include absolute-vertical-center;
        left: 100%;
      }
    }
  }

  @mixin drilldown-menu {
    position: absolute;
    left: 100%;
    top: -1px;
    border: $drilldown-item-border;
    background-color: $drilldown-item-background;
    @extend %drilldown-menu;
  }

  @mixin generate-drilldown {
    @include block(drilldown) {
      @include drilldown;

      @include element(title) {
        @include drilldown-title;
      }
      @include element(item) {
        @include drilldown-item;

        @include modifier(':hover', 'selected', 'actived') {
          background-color: $drilldown-item-background-hover;
        }
      }

      @include element(menu) {
        @include drilldown-menu;
      }
    }
  }

  @include generate-drilldown;
</style>
