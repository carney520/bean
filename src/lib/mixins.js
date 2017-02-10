export default function installMixins (Vue) {
  let p = Vue.prototype

  p.$getSlot = function (name) {
    return this._slotContents && this._slotContents[name]
  }
}