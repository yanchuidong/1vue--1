<template>
  <div class="header">
    <span class="sp1">CARBEN</span>
    <span>STORE</span>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: white;
  color: black;
  z-index: 999;
  i {
    float: left;
    position: relative;
    left: 10px;
    font-size: 20px;
  }
}
.sp1 {
  font-weight: bold;
}
</style>
