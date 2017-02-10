/**
* tooltip mixins
* @precondition 必须使用 v-el 设置一个触发点， 如 <a v-el:trigger>trigger</a>
*/

import { on } from '../_helpers/util.js'

export default {
  props: {
    trigger: {
      type: String,
      default: 'hover',
      validator (value) {
        return ['hover', 'focus', 'click', 'manual', undefined].indexOf(value) !== -1
      }
    },

    position: {
      type: String,
      default: 'bottom'
    }
  },

  data () {
    return {
      show: false,
      shown: false
    }
  },

  methods: {
    active () {
      this.show = true
    },
    hide () {
      this.show = false
    },
    toggle () {
      this.show = !this.show
    }
  },

  watch: {
    'show' (val) {
      if (val) {
        this.$emit('onshow')
        if (!this.shown) {
          this.shown = true
        }
      } else {
        this.$emit('onhide')
      }
    }
  },

  ready () {
    let eleFirstChild = this.$els.trigger.firstChild
    let ele = eleFirstChild.nodeType === Node.ELEMENT_NODE
      ? eleFirstChild
      : this.$els.trigger

    switch (this.trigger) {
      case 'hover':
        this._mouseenterEvent = on(ele, 'mouseenter', this.active)
        this._mouseleaveEvent = on(ele, 'mouseleave', this.hide)
        break
      case 'focus':
        this._focusEvent = on(ele, 'focus', this.active)
        this._blurEvent = on(ele, 'blur', this.hide)
        break
      case 'manual':
        break
      default:
        this._clickEvent = on(ele, 'click', this.toggle)
        this._closeEvent = on(window, 'click', ({target}) => {
          if (!this.$el.contains(target)) {
            this.hide()
          }
        })
    }
  },

  beforeDestroy () {
    if (this._mouseleaveEvent) {
      this._mouseleaveEvent.remove()
      this._mouseenterEvent.remove()
    }
    if (this._blurEvent) {
      this._blurEvent.remove()
      this._focusEvent.remove()
    }
    if (this._clickEvent) {
      this._clickEvent.remove()
      this._closeEvent.remove()
    }
  }
}
