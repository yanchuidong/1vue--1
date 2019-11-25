<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperImgs" :key="index">
      <img :src="slide.src" />
    </swiper-slide>
    <div class="swiper-scrollbar"></div>
  </swiper>
</template>

<script>
export default {
  name: "Swiper2",
  props: ["swiperImgs"],
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 500,
        slidesPerView: 1.8
        // observeParents: true,
      }
    };
  }
};
</script>
<style lang="less" scoped>
.swiper-container {
  padding-bottom: 15px;
  width: 90%;
  img {
    width: 80%;
  }
}
</style>
