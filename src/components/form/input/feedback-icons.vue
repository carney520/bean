<template lang="jade">
  icon(v-if="status === 'info'", name="info", type="primary", awesome)
  icon(v-if="status === 'success'", name="check", type="success", awesome)
  icon(v-if="status === 'warning'", name="exclamation", type="warning", awesome)
  icon(v-if="status === 'alert'", name="times", type="alert", awesome)
</template>

<script>
  import {Icon} from '../../icon'

  export default {
    name: 'FeebackIcons',
    components: {
      Icon
    },
    props: {
      status: String
    }
  }
</script>