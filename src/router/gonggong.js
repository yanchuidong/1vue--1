import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home"
import xiaoxi from "../components/yanchuidong1/xiaoxi"
import geren from "../components/geren"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/xiaoxi',
      component:xiaoxi,
    } , {
      path: '/home',
      component:home,
    } , {
      path: '/geren',
      component:geren,
    } ,

  ]
})
