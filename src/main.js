import Vue from 'vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App';
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

/* eslint-disable no-new */

Vue.filter('price',function (val) {
  return '￥'+val;
})
Vue.filter('mytofixed',function (val) {
  return val.toFixed(2);
})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
/*
 使用 import引入组件，再在vue实例中注册这个组件
*/
