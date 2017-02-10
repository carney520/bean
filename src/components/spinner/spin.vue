<template lang="jade">
  span.spin(:style="spinStyle", :class="spinClass")
    .sk-cube-grid(v-if="type === 'cube-grid'")
      - var i = 1
      while i <= 9
        .sk-cube(class="sk-cube" + i)
        - i++

    .sk-wandering-cubes(v-if="type === 'wandering-cubes'")
      - i = 1
      while i <= 2
        .sk-cube(class="sk-cube" + i)
        - i++

    .sk-wave(v-if="type === 'wave'")
      - i = 1
      while i <= 5
        .sk-rect(class="sk-rect" + i)
        - i++

    .sk-double-bounce(v-if="type === 'double-bounce'")
      - i = 1
      while i <= 2
        .sk-child(class="sk-double-bounce" + i)
        - i++

    .sk-folding-cube(v-if="type === 'folding-cube'")
      - i = 1
      while i <= 4
        .sk-cube(class="sk-cube" + i)
        - i++

    .sk-rotating-plane(v-if="type === 'rotating-plane'")
    .spin__text(v-if="text") {{ text }}
</template>

<script>
  import {coerceBoolean} from '../_helpers/coerces.js'

  export default {
    name: 'Spin',
    props: {
      type: {
        type: String,
        default: 'double-bounce',
        validator (value) {
          return ~['cube-grid', 'wandering-cubes',
            'wave', 'double-bounce', 'folding-cube', 'rotating-plane'
          ].indexOf(value)
        }
      },
      color: {
        type: String
      },
      light: {
        type: Boolean,
        coerce: coerceBoolean
      },
      dark: {
        type: Boolean,
        coerce: coerceBoolean
      },
      size: String,
      text: String
    },
    computed: {
      spinClass () {
        return [
          this.size && `--${this.size}`
        ]
      },
      spinStyle () {
        return {
          color: this.light
            ? '#fff'
            : this.dark
            ? '#252525'
            : this.color
        }
      }
    }
  }
</script>