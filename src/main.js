import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import { router } from './router' 

import Home from './components/Home'

Vue.use(Home)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    // this.$store.dispatch('products')
  },
  created() {
    this.$store.dispatch('filter')
  }
})
