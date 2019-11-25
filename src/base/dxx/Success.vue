<template>
  <div class="success">
    <p>支付成功</p>
    <button @click="golist" class="btn">点击继续购物</button>
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  name: "Success",
  created() {
    Cookies.remove("shoplist");
  },
  methods: {
    golist() {
      this.$router.push("/list");
    }
  }
};
</script>
<style lang="less" scoped>
.success {
  width: 90%;
  background: #fff;
  margin: 20px auto;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  p{
      color: aqua;
      font-size: 30px;
  }
  .btn{
     color: #999;
     font-size: 18px;
  }
}
</style>