import Vue from 'vue'

if (process.env.NODE_ENV !== 'production') {
  Vue.config.debug = true
  Vue.config.devtools = true
} else {
  Vue.config.debug = false
  Vue.config.devtools = false
}

import router from './router'
import App from './app'
import Bean from '../src/main'
import installComponents from './components'

Vue.use(Bean)
installComponents()

router.start(App, '#app')
window.Vue = Vue