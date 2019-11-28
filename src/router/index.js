
import Vue from 'vue';
import Router from 'vue-router';
import Home from "../components/dxx/Home";
import Detail from "../components/dxx/Detail";
import ShopCat from "../components/dxx/ShopCat";
import Success from "../base/dxx/Success";
import More from "../components/dxx/More";

Vue.use(Router);

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/detail/:pid',component:Detail,name:'detail'},
    {path:'/shopcat',component:ShopCat,name:'shopcat'},
    {path: '/More', component: More},
    {path:'/success',component:Success},
    {path:'/*',component:Home},
  ]
});
