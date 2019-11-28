<template>
    <div id="pinglun">

      <ul >

        <router-link :to="{name:'son'}" tag="li" v-for="(item ,index) in pignluns"  :key="item.id"  >
          <img src="../../../static/imgse/头像.png" alt="">{{item.name}}
          {{item.shijian}} ：{{item.neirong}}
          <button @click.stop="remove(index)">删除</button>
          <button >回复</button>
          <br><span>我已回复：{{ss1.aaa}} {{yy1.aaa}}</span>
        </router-link>

      </ul>

    </div>
</template>

<script>
  import {getpinglun} from "../../api"

  import Cookies from "js-cookie"
  /*import  son from "./son"*/
  export default {
     name: "pinglunye",
      data:function(){
          return{
            pignluns:[],
            ss1:[],
            yy1:[]
             }
          },
     created() {
       getpinglun().then((config)=>{
         this.pignluns=config.pingluns;
         console.log(this.pignluns);
       }).catch((ref)=>{
         console.log(ref);
       });
       console.log(JSON.parse(Cookies.get("nn1")));
       this.ss1=JSON.parse(Cookies.get("nn1"));
       this.yy1=JSON.parse(Cookies.get("yy1"));
       console.log(JSON.parse(Cookies.get("yy1")));

     },
    methods:{
       remove(index){
         this.pignluns.splice(index,1)
       },
      /* clearcookie(){
         this.setCookie("","",0)

       }*/
   /*   addshuru(){*/
   /*      this.$router.push(
         {  name:"son",
            params:{
           id:99
            }
         }
         )*/
      /*}*/


    }

  }
</script>

<style scoped>
  li{
    list-style: none;
    width: 100%;
    height: 30%;
  }
  .p1{
    text-indent: 150px;
  }
#pinglun{
  display: flex;
  justify-content: flex-start;

}
 ul{
   margin: 0 0;
 }
  img{
    display: inline-block;
  }
  button{

  }
  li{
    margin-bottom: 50px;
  }
  sapn{

  }
</style>
