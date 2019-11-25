<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperImgs" :key="index">

      <img :src="slide.src"/>
     </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carousel',
    props:['swiperImgs'],
    data() {
      return {
        swiperOption:{
                // 参数选项,显示小点
                pagination:'.swiper-pagination',
                //循环
                loop:true,
                //每张播放时长3秒，自动播放
                autoplay:2000,
                //滑动速度
                speed:1000,
                // delay:1000

                observeParents: true,

            }
      }
    }
  }
</script>
<style lang="less" scoped>
 img{
   border-radius:10px;
   width: 92%;
   margin: 0 auto;
   display: block;
 }
</style>
