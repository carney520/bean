/**
* 所有组件的基类
*/

export default {
  methods: {
    $_bind (callback, ...args) {
      if (typeof callback !== 'function') {
        throw new TypeError(`$_bind Error: callback must be a function.`)
      }

      return (...other) => {
        return callback.apply(this, args.concat(other))
      }
    },

    $getSlot (name) {
      return this._slotContents && this._slotContents[name]
    },

    $notify (eventName, orgEvent, options = {}) {
      let eventData = {
        object: this,
        eventName,
        original: orgEvent,
        ...options
      }
      this.$emit(eventName, eventData)
    }
  }
}
