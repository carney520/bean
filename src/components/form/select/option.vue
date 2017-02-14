<template lang="jade">
  menu-item(:disabled="disabled", :actived="actived", @click="select()")
    span(v-el:label)
      slot {{ label }}
</template>

<script>
  import { coerceBoolean } from '../../_helpers/coerces'
  import {MenuItem} from '../../menu'

  export default {
    name: 'VOption',
    components: {
      MenuItem
    },
    props: {
      label: String,
      value: {
        required: true
      },

      disabled: {
        type: Boolean,
        coerce: coerceBoolean
      },

      selected: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },

    data () {
      return {
        // 为了保证entry的唯一(地址不变)
        entry: {
          label: '',
          value: ''
        }
      }
    },

    computed: {
      actived () {
        return this.$select.isActived(this.entry)
      },

      _label () {
        return this.$els.label.textContent
      }
    },

    methods: {
      select (init) {
        if (!this.disabled || init) {
          this.$select.select(this.entry, init)
        }
      },

      didUpdate (digest) {
        const value = this.$select.value
        const multiple = this.$select.multiple

        if (multiple) {
          if (value && ~value.indexOf(this.value)) {
            this.select(true)
          }
        } else if (value === this.value) {
          this.select(true)
        }
      }
    },

    created () {
      this.$dispatch('option:created', this)
    },

    ready () {
      this.entry.label = this._label
      // 监听value和label的变化，更新entry
      this.$watch('value', (val) => {
        this.entry.value = val
        this.didUpdate(false)
      }, {immediate: true})

      this.$watch('label', (val) => {
        if (val != null) this.entry.label = val
      })

      if (this.selected) {
        this.select(true)
      }
    },

    events: {
      'select:digest' () {
        return this.didUpdate(true)
      }
    }
  }
</script>
