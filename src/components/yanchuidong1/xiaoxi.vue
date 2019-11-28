<template>
    <div class="footers">
      <footers></footers>
      <slot><h3>消息</h3></slot>
      <div class="list">
        <ul>
        <li ><i class="iconfont icon-fensi"></i>  粉丝</li>
        <li><i class="iconfont icon-dianzan"></i> 点赞</li>
        <li > <i class="iconfont icon-pinglun"></i>
          <router-link :to="{name:'pinglunye',params:{id:100}}"></router-link>
          <span @click="topinglun">评论</span>
        </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import footers from "../../base/公共底部组件/footers"
  import pinglunye from "./pinglunye"

    export default {
        name: "xiaoxi",
     /* data(){

      },*/
      components:{
          footers,pinglunye
      },
      methods:{
         topinglun(){
           this.$router.push({
             name: 'pinglunye',
             params: {
               id: 100
             }
           })
         }

    }
  }
</script>

<style scoped>
h3{
  position: fixed;
 top: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 0;
}
  li{
   list-style: none;
   padding-bottom: 3%;

  }
  .list {
    width: 100%;
 position: absolute;
    left: -36%;
    top: 10%;


  }
</style>
