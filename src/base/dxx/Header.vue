<template>
    <div class="header">
        <i v-if="flag" class="iconfont icon-fanhui i1" @click="back"></i>
        <slot>默认</slot>
    </div>
</template>
<script>
export default {
    name:"Header",
    props:{
        flag:{
          type:Boolean,
          default:false
        }
    },
    methods:{
        back(){
            this.$router.back();
        }
    }
}
</script>
<style lang="less" scoped>
.header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background:white;
    color: black;
     z-index: 2;
    i{
        float: left;
        position: relative;
        left: 10px;
        font-size: 20px;

    }
}
</style>
