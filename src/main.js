import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import fastClick from 'fastclick'
// 移动端300毫秒的延迟
fastClick.attach(document.body)

import flexible from 'amfe-flexible'

// swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
// 初始化样式
import './assets/styles/reset.css'
import './assets/styles/base.less'

// 全局组件
import BaseIcon from './components/icon/BaseIcon.vue'
import BaseGallary from './components/gallary/Gallary'
Vue.prototype.$bus = new Vue()

//全局组件注册
Vue.component('base-icon', BaseIcon)
Vue.component('base-gallary', BaseGallary);

//是否进行生产环境提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
