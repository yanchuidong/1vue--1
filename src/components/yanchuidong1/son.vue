<template>
  <div>
    <div><textarea name="" id="" cols="60" rows="10" value="" v-model="mm1">{{mm1}}</textarea><button @click="tjpinglun">提交</button></div>
    <!---在子组件模板中，触发一个方法，让这个方法去触发父组件中的方法-->
    <div><textarea name=""  cols="30" rows="10" v-model="yy1" >{{yy1}}</textarea> <button @click="tjpinglun1">提交</button></div>
  </div>


</template>

<script>
    import Cookies from "js-cookie"

    export default {
        name: "son",
       data(){
          return {
            mm1:"/",
            yy1:""
          }
       },
       methods:{
         tjpinglun(){
           var as={
             "aaa":this.mm1
           }
           Cookies.set("nn1",JSON.stringify(as))


         } ,tjpinglun1(){
           var as={
             "aaa":this.yy1
           }
           Cookies.set("yy1",JSON.stringify(as))


         },



       }



    }
</script>

<style scoped>

</style>
