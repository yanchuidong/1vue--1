<template>
  <div class="c">
    <Header>
      <span class="sp1">CARBEN</span>
      <span>STORE</span>
    </Header>
    <div class="context">
      <Swiper :swiperImgs="swiperImg"></Swiper>
      <div class="zl">
        <i class="iconfont icon-duigou">极速发货</i>
        <i class="iconfont icon-duigou">正品保证</i>
        <i class="iconfont icon-duigou">支持售后</i>
        <i class="iconfont icon-duigou">行业尖货</i>
      </div>

      <div class="sd">
        <img src="../../../static/img/img22.png" alt="" class="img1">
        <span>有一大波Ben友晒单啦~</span>
      </div>
    </div>
    <div class="list">
      <h3>
        DPLS
        <a>
          <h6>查看更多</h6>
        </a>
      </h3>
      <BaseList :list="list"></BaseList>
    </div>
    <!-- <div class="hotlist">
      <h3>DPLS<a><h6>查看更多</h6></a></h3>

      <ul>
        <li v-for="(item,index) of bookHotList" :key="index">
          <img :src="item.bookImg" :alt="item.bookImg" />
          <p>{{item.bookName}}</p>
          <p class="price">{{item.bookPrice |mytofixed | price}}</p>
        </li>
      </ul>
    </div>-->
  </div>
</template>
<script>
import Header from "../../base/dxx/Header";
import Swiper from "../../base/dxx/Swiper";
import BaseList from "../../base/dxx/BaseList";
import { getBanner, getHotList } from "../../api";
import Cookies from "js-cookie";
export default {
  name: "Home",
  data() {
    return {
      swiperImg: [],
      list: []
    };
  },

  components: {
    Header,
    Swiper,
    BaseList
  },
  created() {
    this.getn();
    this.geth();
  },
  methods: {
    getn() {
      getBanner().then(res => {
        this.swiperImg = res.banner;
      });
    },
    geth() {
      getHotList().then(res => {
        this.list = res.hotlist;
      });
    }
    }
  }
</script>
<style lang="less" scoped>
.c {
  margin-bottom: 64px;
  header {
    position: fixed;
    top: 0;
  }
}
.sp1 {
  font-weight: bold;
}
.zl {
  margin-top: 5px;
  color: #e5e5e5;
  display: flex;
  i {
    flex: 1;
    text-align: center;
    font-size: 12px;
    text-indent: 2px;
  }
}

@border-botm: 1px solid #f5f5f5;
.list {
  width: 100%;
  margin: 0 auto;
  background: #fff;
  h3 {
    color: #999;
    padding: 10px;
    line-height: 20px;
    border-bottom: @border-botm;
  }
  a {
    float: right;
    color: red;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      box-sizing: border-box;
      border-bottom: @border-botm;
      width: 50%;

      p {
        margin-left: 10%;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        width: 80%;
        padding: 5px;
        color: #232326;
        font-size: 13px;
      }
      .price {
        color: red;
        font-size: 15px;
      }
      &:nth-child(even) {
        border-left: @border-botm;
      }
      img {
        margin: 10%;
        width: 80%;
        cursor: pointer;
      }
    }
  }
}
.context {
  background: white;
  margin-top: 44px;
  width: 100%;
  Swiper {
    border-radius: 10px;
  }
  .sd{
    padding: 20px;
    margin: 10px;
  width: 100%;
  height: 20%;
  .img1{
    width: 15%;
  }
  span{
    font-size: .8rem;
    // text-align: center;
  }
}
}
</style>
