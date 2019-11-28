<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperImgs" :key="index">
      <img :src="slide.src" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "carousel",
  props: ["swiperImgs"],
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 2000,
        speed: 1000,
        observeParents: true
      }
    };
  }
};
</script>
<style lang="less" scoped>
img {
  border-radius: 10px;
  width: 92%;
  margin: 0 auto;
  display: block;
}
</style>
