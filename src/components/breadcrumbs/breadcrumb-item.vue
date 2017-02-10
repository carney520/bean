<template lang="jade">
  .breadcrumbs__item(:class="{'is-disabled': disabled}", :data-separator="separator")
    slot
</template>

<script>
  import { coerceBoolean } from '../_helpers/coerces'

  export default {
    name: 'BreadcrumbItem',
    props: {
      disabled: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },
    computed: {
      separator () {
        return this.$parent.separator
      }
    }
  }
</script>