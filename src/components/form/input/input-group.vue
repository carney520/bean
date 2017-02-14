<template lang="jade">
  .form__input-group(:class="inputGroupClass")
    .form__control-addon(v-if="_leftInserted")
      slot(name="left")
    slot
    .form__control-addon(v-if="_rightInserted")
      slot(name="right")
</template>

<script>
  export default {
    name: 'InputGroup',
    props: {
      color: String,
      size: String
    },
    computed: {
      inputGroupClass () {
        return [
          this.color && `--${this.color}`,
          this.size && `--${this.size}`
        ]
      },
      _leftInserted () {
        return !!this.$getSlot('left')
      },
      _rightInserted () {
        return !!this.$getSlot('right')
      }
    }
  }
</script>