import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'

Vue.use(Router)
Vue.use(Home)


export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'Home',
      component: Home,
      props: (route) => ({
        category: route.query.category,
        size: route.query.size,
        price_from: route.query.price_from,
        price_to: route.query.price_to,
        sort: route.query.sort,
        page: route.query.page
    })
    }
  ]
})