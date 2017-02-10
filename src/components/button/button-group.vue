<!--
按钮组
@author ivan
@date 2016.9.14
-->
<template lang="jade">
  .button-group(:class="buttonGroupClass")
    slot
</template>

<script>
  export default {
    name: 'ButtonGroup',
    props: {
      // 方向
      direction: {
        type: String,
        validator (value) {
          return ['vertical'].indexOf(value) !== -1
        }
      },

      size: {
        type: String,
        validator (value) {
          return ['tiny', 'small', 'default', 'large'].indexOf(value) !== -1
        }
      }
    },

    computed: {
      buttonGroupClass () {
        return [
          this.direction && `--${this.direction}`,
          this.size && `--${this.size}`
        ]
      }
    }
  }
</script>
