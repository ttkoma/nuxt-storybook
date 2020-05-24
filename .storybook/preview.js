import Vue from 'vue'
import Vuex from 'vuex'

import { configure } from '@storybook/vue'

import '@/assets/css/tailwind.css'
import List from '@/components/list/List'
import ListItem from '@/components/list/ListItem'

Vue.use(Vuex)

Vue.config.productionTip = false

Vue.component('List', List)
Vue.component('ListItem', ListItem)

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>'
})

function loadStories() {
  const req = require.context('@/components', true, /\.stories\.js$/)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
