// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//px转化为rem，适配移动端
import 'lib-flexible'
//重置样式
import '../static/css/reset.css'
// import '../static/js/rem.js'
//挂载swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import axios from 'axios' //引入axios
Vue.prototype.$ajax=axios//修改Vue的原型属性
import  { ToastPlugin, LoadingPlugin } from 'vux'
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
import store from './store'//引入store
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
