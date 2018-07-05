import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '@/views/home/home'
import City from '@/views/city/city'

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    name: '首页',
  },
  {
    path: '/city',
    component: City,
    name: '城市选择'
  }

]




export default new Router({
  routes
})
