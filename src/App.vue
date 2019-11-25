<template>
  <div id="app">
  <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Tab from "./base/dxx/Tab";
export default {
  name: "App",
  components:{
    Tab
  }
};
</script>

<style lang="less" >
*{
  margin: 0;
 padding: 0;
 list-style: none;
 text-decoration-line: none;
}
body{
  background: #f5f5f5;
  ul{
    list-style:none;
  }
}
a{
  text-decoration: none;
}
.context{
  width: 100%;


}

</style>
