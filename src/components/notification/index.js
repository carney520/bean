import NotificationComp from './notification'

function insertNotificationContainer () {
  let container = document.createElement('div')
  container.className = 'notifications'
  return document.body.appendChild(container)
}

export function installNotification (Vue) {
  const NotifcationCons = Vue.extend(NotificationComp)
  let container
  let temp = document.createElement('div')

  let notification = function (options = {}, type) {
    if (container == null) {
      container = insertNotificationContainer()
    }

    if (typeof options === 'string') {
      options = {
        content: options
      }
    }

    options = {
      title: 'Notification title',
      content: 'Notification content',
      ...options
    }

    if (type === 'confirm') {
      options.showConfirm = true
    } else if (type) {
      options.type = type
      options.showIcon = true
    }

    let instance = new NotifcationCons({
      el: temp,
      propsData: options
    })

    if (type === 'confirm') {
      instance.$on('onconfirm', () => {
        if (options.onConfirm) options.onConfirm()
      })
    }

    instance.$appendTo(container)
    return instance
  }

  ;['success', 'warning', 'info', 'error', 'confirm'].forEach(type => {
    notification[type] = function (options) {
      return notification(options, type)
    }
  })

  Vue.prototype.$notification = notification
}
