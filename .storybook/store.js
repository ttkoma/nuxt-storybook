import Vue from 'vue'
import { createStore } from './.nuxt-sb/store'
import createAxios from './.nuxt-sb/axios'

const store = createStore()

const inject = (name, value) => {
  Vue.prototype.$axios = value
}

createAxios(store, inject)

export default store
