<template>
    <div class="footer">
         <router-link to="/home">
            <i class="iconfont  icon-shangcheng"></i>
         </router-link>
        <router-link to="/list">
            <i class="iconfont icon-xiaoxi2"></i>
        </router-link>
        <router-link to="/mine">
            <i class="iconfont  icon-tubiao-"></i>
        </router-link>
        <!-- <router-link to="/shopcat">

        </router-link> -->
    </div>
</template>
<script>
export default {
    name:'Tab'
}
</script>
<style lang="less" scoped>
 .footer{
     position: fixed;
     left: 0;
     bottom: 0;
     width: 100%;
     height: 50px;
     display: flex;
     background: #fff;
    //  flex-direction: column;
    //  justify-content:center;//垂直居中
    //  align-items: center;//横向居中
     a{
       display: flex;
       flex: 1;
       flex-direction: column;
       align-items: center;
       justify-content:center;

       i{
        font-size: 25px;
        color: #999;
       }
     }
     .router-link-active{
       color: red;
     }
 }
</style>
