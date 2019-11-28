import Vue from 'vue'
import Router from 'vue-router'
import xiaoxi from "../components/yanchuidong1/xiaoxi"
import pinglunye from "../components/yanchuidong1/pinglunye"
import son from "../components/yanchuidong1/son"
/*import Cookies from  "node_modulse/cookie"*/
Vue.use(Router);
/*Vue.use(Cookies);*/

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
    },
    {
      path:'/son/:id',
      component:son,
      name:'son'

    }
  ]
})
