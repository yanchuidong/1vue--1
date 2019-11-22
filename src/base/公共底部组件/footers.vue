<template>
    <div class="footers">
      <router-link to="/home"><i class="iconfont icon-xuanzhongshangcheng"></i></router-link>
      <router-link to="/xiaoxi"><i class="iconfont icon-xiaoxi1"></i></router-link>
      <router-link to="/geren"><i class="iconfont icon-gerenzhongxin-zhong"></i></router-link>
    </div>
</template>

<script>
    export default {
        name: "footers"
    }
</script>

<style scoped>
.footers{
  width:100%;
  height: 44px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;


}
</style>
