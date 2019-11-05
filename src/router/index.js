import Vue from 'vue'
import Router from 'vue-router'
import Home from "components/home/index"
import Sort from "components/sort/index"
import Find from "components/find/index"
import Shop from "components/shop/index"
import My from "components/my/index"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sort',
      name: 'sort',
      component: Sort
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }
  ]
})
