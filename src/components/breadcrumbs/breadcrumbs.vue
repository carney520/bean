<template lang="jade">
  .breadcrumbs
    template(v-if="useVueRouter")
      .breadcrumbs__item(v-for="item in breadcrumbs", :data-separator="separator") 
        a(v-link="{name: item.name}")
          icon(v-if="item.icon", :name="item.icon")
          | {{item.title}}
    template(v-else)
      slot
</template>

<script>
  import { coerceBoolean } from '../_helpers/coerces'
  import {Icon} from '../icon'

  export default {
    name: 'Breadcrumbs',
    components: {
      Icon
    },
    props: {
      useVueRouter: {
        type: Boolean,
        coerce: coerceBoolean
      },
      separator: {
        type: String,
        default: '/'
      }
    },
    computed: {
      breadcrumbs () {
        if (!this.useVueRouter || this.$route == null) return []
        let crumbs = []
        let matched = this.$route.matched
        for (let i = 0, l = matched.length; i < l; i++) {
          let item = matched[i].handler
          console.log(item)
          if (item.crumbs) {
            let crumb
            if (typeof item.crumbs === 'string') {
              crumb = {
                title: item.crumbs
              }
            } else {
              crumb = {
                title: typeof item.crumbs.title === 'function'
                  ? item.crumbs.title()
                  : item.crumbs.title,
                icon: item.crumbs.icon
              }
            }
            crumbs.push(crumb)
          }
        }
        return crumbs
      }
    },

    created () {
      if (this.useVueRouter && this.$route == null) {
        throw new TypeError('this.$route is undefined')
      }
    }
  }
</script>
