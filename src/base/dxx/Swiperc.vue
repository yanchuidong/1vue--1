<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperImgs" :key="index">
      <img :src="slide.bookImg"/>
     </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>

</template>

<script>
  export default {
    name: 'Swiper3',
    props:['swiperImgs'],
    data() {
      return {
        swiperOption:{
                loop:true,
                speed:1000,
                observer:true,
                observeParents: true,
            }
      }
    }
  }
</script>
<style lang="less" scoped>
.swiper-container {
  width: 100%;
  img {
    height:100%;
    width: 100%;
  }
}
</style>
