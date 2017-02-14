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
                .form__tag-title {{ item[labelKey] || item.label }}
                icon.form__tag-close(name="times", awesome, @click.prevent.stop="remove(item)")
            //- 清除按钮
            icon.form__clear(
              v-show="showClear",
              name="times-circle",
              type="button",
              awesome,
              transition="fade",
              @click.stop.prevent="clear",)
          .text-field__addon
            icon.icon-inset-control(name="sort", awesome)

    //- 下拉列表
    .select-content(slot="menu")
      menu
        slot
          template(v-if="options")
            v-option(v-for="item of _options", :value="item[valueKey]", :label="item[labelKey]")
</template>

<script>
  import Select from '../select'
  import VOption from './option'
  import {Dropdown} from '../../dropdown'
  import {Icon} from '../../icon'
  import {Menu} from '../../menu'

  export default {
    name: 'VSelect',
    mixins: [
      Select
    ],

    components: {
      VOption,
      Dropdown,
      Icon,
      Menu
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

      // 渲染数据
      options: Array
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
            minWidth: '100%'
          },
          ...this.dropdownStyle
        }
      },

      _options () {
        if (this.options && typeof this.options[0] !== 'object') {
          return this.options.map(value => {
            return {
              [this.labelKey]: value,
              [this.valueKey]: value
            }
          })
        } else {
          return this.options
        }
      },

      collapsed () {
        return !this.$refs.dropdown.toggled
      }
    },

    methods: {
      // in Control
      // - reset
      // - $changeInner
      // - $isChangingInner

      // in TextField
      // -_onFocus
      // -_onBlur

      // in Select
      // select
      // isActived
      // clear
      // remove
      // digest
    },

    events: {
      'option:created' (vm) {
        vm.$select = this
      }
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
    }
  }
</script>
