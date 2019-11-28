<template>
  <div>
    <Header :flag="true">
      <i @click="prev()" class="iconfont icon-fanhui i1"></i>
    </Header>
    <div class="top">
      <img src="../../../static/dxx/img/t3.jpg" alt />
    </div>
    <div class="list">
      <BaseListb :list="list"></BaseListb>
    </div>
  </div>
</template>
<script>
import BaseListb from "../../base/dxx/BaseListb";
import { getHotListb } from "../../api/dxx";
import Cookies from "js-cookie";
export default {
  name: "More",
  data() {
    return {
      list: []
    };
  },
  components: {
    BaseListb
  },
  created() {
    this.getm();
  },
  methods: {
    prev() {
      this.$router.go(-1);
    },
    getm() {
      getHotListb().then(res => {
        this.list = res.hotlist2;
      });
    }
  }
};
</script>
<style lang="less" scoped>
header {
  background: rgba(0, 0, 0, 0);
  height: 23px;
  padding: 10px;
  position: fixed;
  top: 0;

  .i1 {
    float: left;
    font-size: 18px;
    padding: 5px;
    text-align: center;
    border-radius: 20px;
    color: white;
    background: rgba(0, 0, 0, 3%);
  }
}
.top {
  width: 100%;
  img {
    width: 100%;
    height: 15rem;
  }
}
.list {
  background: white;
  position: absolute;
  top: 14rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
