import ConfirmComp from './confirm.vue'

export default function installDialogs (Vue) {
  const ConfirmConstructor = Vue.extend(ConfirmComp)
  let modal = {}

  modal.confirm = function (options = {}) {
    if (typeof options === 'string') {
      options = {
        content: options
      }
    }

    options = {
      title: 'bean confirm',
      content: 'bean confirm content',
      ...options
    }

    let temp = document.createElement('div')
    let instance = new ConfirmConstructor({
      el: temp,
      propsData: options
    })

    instance.$on('onconfirm', () => {
      if (options.onConfirm) options.onConfirm()
    })

    instance.$on('oncancel', () => {
      if (options.onCancel) options.onCancel()
    })

    instance.$appendTo(document.body)
    instance.show = true
  }

  ;['info', 'success', 'error', 'warning'].forEach(type => {
    modal[type] = function (options = {}) {
      if (typeof options === 'string') {
        options = {
          content: options
        }
      }

      options = {
        type,
        alert: true,
        title: 'bean alert',
        content: 'bean content',
        ...options
      }
      let temp = document.createElement('div')
      let instance = new ConfirmConstructor({
        el: temp,
        propsData: options
      })

      instance.$on('onconfirm', () => {
        if (options.onConfirm) options.onConfirm()
      })

      instance.$appendTo(document.body)
      instance.show = true
    }
  })

  Vue.prototype.$modal = modal
}