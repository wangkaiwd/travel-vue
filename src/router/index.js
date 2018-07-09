import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/views/home/home'
import City from '@/views/city/city'
import Detail from '@/views/detail/detail'

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
  },
  {
    path: '/detail/:id',
    component: Detail,
    name: '详情'
  }
]

export default new Router({
  routes,
  // 每次都回到页面顶部
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
