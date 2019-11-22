import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'
import home from "../components/home"*/
import xiaoxi from "../components/yanchuidong1/xiaoxi"
/*import geren from "../components/geren"*/
import pinglunye from "../components/yanchuidong1/pinglunye"
Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/xiaoxi',
      component:xiaoxi,
    } ,
    {
      path: '/pinglunye/:id',
      component: pinglunye,
      name:'pinglunye'
    }
  ]
})
