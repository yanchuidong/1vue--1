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
        <img src="../../../static/dxx/img/img22.png" alt class="img1" />
        <span>有一大波Ben友晒单啦~</span>

          <img :src="src.touImg" v-for="(src,index) in src" :key="index" class="t"/>

      </div>
    </div>
    <div class="swi4">
      <Swiper4 :swiperImgs="swiperImg4" class="swi4_a"></Swiper4>
    </div>
    <div class="list">
      <h3>
        DPLS
        <router-link to="/More">
          <h6>查看更多</h6>
        </router-link>
      </h3>
      <BaseList :list="list"></BaseList>
    </div>
  </div>
</template>
<script>
import Header from "../../base/dxx/Header";
import Swiper from "../../base/dxx/Swiper";
import Swiper4 from "../../base/dxx/Swiperd";
import BaseList from "../../base/dxx/BaseList";
import { getBanner, getBanner4, getHotList } from "../../api/dxx";
import Cookies from "js-cookie";
export default {
  name: "Home",
  data() {
    return {
      swiperImg: [],
      swiperImg4: [],
      list: [],
      src: []
    };
  },

  components: {
    Header,
    Swiper,
    Swiper4,
    BaseList
  },
  created() {
    this.getn();
    this.geth();
    this.gety();
    this.gets();
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
    },
    gets() {
      getHotList().then(res => {
        this.src = res.tou;
      });
    },
    gety() {
      getBanner4().then(res => {
        this.swiperImg4 = res.bannerc;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.c {
  width: 100%;
  margin-bottom: 64px;
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
  .sd {
    line-height: 1.5rem;
    padding: 20px;
    margin: 10px;
    .img1 {
      width: 15%;
    }
    span {
      font-size: 0.8rem;
      position: absolute;
      left: 30%;
    }
    .t{
float: right;
    width: 7%;
    margin-right: -5px;
    border-radius: 200px;


    }
  }
}
.swi4 {
  .swi4_a {
    height: 80%;
  }
}
</style>
