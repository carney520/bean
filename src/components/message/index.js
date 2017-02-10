import MessageComp from './message'

function insertMessageContainer () {
  let container = document.createElement('div')
  container.className = 'messages'
  return document.body.appendChild(container)
}

export function installMessage (Vue) {
  const MessageConstructor = Vue.extend(MessageComp)
  let message = {}
  let container
  let temp = document.createElement('div')

  ;['success', 'warning', 'info', 'error', 'loading'].forEach(type => {
    message[type] = function (options = {}) {
      if (container == null) {
        container = insertMessageContainer()
      }

      if (typeof options === 'string') {
        options = {
          content: options
        }
      }

      options = {
        type,
        content: 'message content',
        ...options
      }

      let instance = new MessageConstructor({
        el: temp,
        propsData: options
      })

      instance.$appendTo(container)
    }
  })

  Vue.prototype.$message = message
}
