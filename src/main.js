// @ts-nocheck
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 全局注册三级联动组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)

// 引入swiper样式
import 'swiper/css/swiper.css'
// 轮播图组件
import Carousel from '@/components/carousel'
Vue.component(Carousel.name, Carousel)
// mock的数据必须执行一次
import '@/mock/mockServe'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
