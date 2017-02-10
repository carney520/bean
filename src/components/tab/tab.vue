<template lang="jade">
  div
    ul.tab__header
      li.tab__title(
        v-for="item in items",
        :class="{'--active': $index === active, '--disable': item.disabled}",
        @click.prevent="switchTo($index, item)",
        :disabled="item.disabled")
        a(href="#") {{ item.title }}

    .tab__content(v-el:tab-content)
      slot
</template>

<script>
  import { coerceNumber } from '../_helpers/coerces.js'

  export default {
    name: 'Tab',
    props: {
      active: {
        type: Number,
        coerce: coerceNumber,
        default: 0
      },

      effect: {
        type: String,
        default: 'fade'
      },

      beforeSwitch: Function
    },

    data () {
      return {
        items: [],
        mode: 'hash'
      }
    },

    methods: {
      switchTo (index, item) {
        if (!item) item = this.items[index]
        let active = () => {
          this.active = index
        }

        if (item && !item.disabled) {
          if (this.beforeSwitch) {
            this.beforeSwitch(() => {
              active()
            })
          } else {
            active()
          }
        }
      }
    }
  }
</script>
