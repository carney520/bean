<template lang="jade">
  svg.icon(:class="iconClasses", :view-box.camel="isAwesome ? viewBox : undefined")
    template(v-if="isAwesome")
      path(:d="awesomeIcon.d")
    template(v-else)
      use(:xlink:href="coerceId(name)")
</template>

<script>
  /**
  * @anthor ivan
  * @example
  *   <!-- svg sprite -->
  *   <icon name="l-user" type="small:success"><icon>
  *   <!-- font-awesome -->
  *   <icon awesome name="carmera", type="small:success">
  */
  // import svg sprite
  import AWESOME from './font-awesome'
  import { coerceBoolean } from '../_helpers/coerces.js'

  function coerceType (value) {
    if (typeof value !== 'string') return value
    let types = value.trim().split(':')
    let classes = {}
    types.forEach((item) => {
      classes['--' + item] = true
    })
    return classes
  }

  export default {
    props: {
      name: {
        type: String,
        required: true
      },

      type: {
        type: Object,
        coerce: coerceType
      },

      // primary, secondary, success, warning alert, light, invert
      color: String,

      loading: {
        type: Boolean,
        coerce: coerceBoolean
      },

      awesome: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      }
    },

    computed: {
      iconClasses () {
        return [
          this.type,
          this.color && `--${this.color}`,
          this.loading && `is-loading`
        ]
      },
      isAwesome () {
        return this.name in AWESOME
      },

      awesomeIcon () {
        return AWESOME[this.name]
      },

      viewBox () {
        if (this.awesomeIcon) {
          return `0 0 ${this.awesomeIcon.width} ${this.awesomeIcon.height}`
        } else {
          return ''
        }
      }
    },

    methods: {
      coerceId (value) {
        return value.charAt(0) === '#' ? value : `#${value}`
      }
    }
  }
</script>