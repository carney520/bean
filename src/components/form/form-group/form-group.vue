<template lang="jade">
  .form__group(:class="formGroupClasses")
    label.form__label(v-if="label") {{ label }}
    slot(name="label")
    .form__group-wrapper
      slot
</template>

<script>
  import ViewMixin from '../../_mixins/view'
  export default {
    name: 'FormGroup',
    mixins: [
      ViewMixin
    ],
    props: {
      status: {
        type: String,
        validator (value) {
          return ['info', 'success', 'warning', 'alert'].indexOf(value) !== -1
        }
      },
      label: String
    },

    data () {
      return {
        relativeControl: null
      }
    },

    computed: {
      formGroupClasses () {
        return [
          {
            'has-success': this.status === 'success',
            'has-warning': this.status === 'warning',
            'has-alert': this.status === 'alert',
            'has-info': this.status === 'info'
          }
        ]
      },

      labelInserted () {
        return this.$getSlot('label') != null || this.label
      }
    },

    events: {
      'validatable:created' (vm) {
        this.relativeControl = vm
        return true
      }
    },

    ready () {
      if (this.relativeControl) {
        this.$watch('relativeControl.validation.status', (val) => {
          this.status = this.relativeControl.validation.status
        })
      }
    }
  }
</script>
