<template lang="jade">
  .marked
    div {{{ mark }}}
    slot
</template>

<script>
  import highlight from 'highlight.js'
  import marked from 'marked'

  marked.setOptions({
    highlight (code, lang) {
      return highlight.highlight(lang, code).value
    }
  })

  window.highlight = highlight

  export default {
    name: 'Marked',
    data () {
      return {
        mark: ''
      }
    },
    methods: {
      getMark () {
        const div = document.createElement('div')
        const str = this.$el.getElementsByClassName('mark')[0].innerHTML
        div.innerHTML = str
        return div.innerText || div.textContent
      }
    },
    ready () {
      this.mark = marked(this.getMark())
    }
  }
</script>

<style lang="scss">
  @import "~assets/style/atom-one-light.css";

  .marked .mark {
    display: none;
  }
</style>