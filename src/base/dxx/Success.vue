<template>
  <div>
    <Header></Header>
    <div class="success">
      <span>支付成功</span>
      <button @click="golist" class="btn">( 返回 )</button>
    </div>
  </div>
</template>
<script>
import Header from "./Header";
import Cookies from "js-cookie";
export default {
  name: "Success",
  created() {
    Cookies.remove("shoplist");
  },

  components: {
    Header
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
  opacity: 0.5;
  width: 300px;
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -15%;
  margin-left: -150px;
  padding: 43px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  span {
    color: red;
    font-size: 20px;
  }
  .btn {
    background: none;
    border: none;
    color: #999;
    font-size: 14px;
  }
}
</style>
