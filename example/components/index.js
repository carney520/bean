import Vue from 'vue'
import Marked from './marked'

export default function installComponents () {
  Vue.component('marked', Marked)
}