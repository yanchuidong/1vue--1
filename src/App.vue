<template>
  <div id="app">
     <top></top>
    <footers></footers>
    <router-view/>
  </div>
</template>

<script>
  import  footers from "./base/公共底部组件/footers"
 /* import  top from "./base/top"*/
export default {
  name: 'App',
  components:{
    footers,top
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
