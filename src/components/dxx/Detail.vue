<template>
  <div class="c">
    <Header :flag="true">
      <i @click="prev()" class="iconfont icon-fanhui i1"></i>
      <i class="iconfont icon-fenxiang i2"></i>
    </Header>

    <div class="context">
          <img :src="onelist.bookImg" class="swi1"/>

      <div class="divdatail">
        <div class="mp">
          <p class="pname">{{onelist.bookName}}</p>
          <h3 class="price">{{onelist.bookPrice | price }}</h3>
        </div>
        <div class="swi">
          <h3>车友晒态度</h3>
          <Swiper2 :swiperImgs="swiperImg2" class="swi2"></Swiper2>
        </div>
        <div class="page">
            <img src="../../../static/dxx/img/s5.jpg" alt="" style="width:100%">
        </div>
      </div>
    </div>
    <div class="shopcat">
       <button class="btn" @click="addShop(onelist.bookId)">加入购物车</button>
      <router-link
        :to="{name:'shopcat'}"
        tag="button"
        class="iconfont icon-lvsefenkaicankaoxianban-2 join"
      >立即购买</router-link>

      <router-link to="/kefu">
        <i class="iconfont icon-kefu c1">
          <h6>客服</h6>
        </i>
      </router-link>
      <router-link :to="{name:'shopcat'}">
        <i class="iconfont icon-icon-test c2">
          <p class="toying" v-show="flag">1</p>
          <h6>购物车</h6>
        </i>
      </router-link>

    </div>
  </div>
</template>
<script>
import Swiper from "../../base/dxx/Swiper";
import Swiper2 from "../../base/dxx/Swiperb";
import { getBanner, getHotList, getHotListb, getBanner2} from "../../api/dxx";
import Cookies from "js-cookie";
export default {
  name: "Detail",
  data() {
    return {
      swiperImg: [],
      swiperImg2: [],
      bookHotList: [],
      onelist: [],
      flag: false
    };
  },

  components: {
    Swiper,
    Swiper2,
  },
  created() {
    this.getn();
    this.getl();
    this.gets();
    this.getm();
  },
  methods: {
    prev(){
      this.$router.go(-1)
    },
    getn() {
      getBanner().then(res => {
        this.swiperImg = res.banner;
      });
    },
    gets() {
      getBanner2().then(res => {
        this.swiperImg2 = res.banner2;
      });
    },
    getl() {
      getHotList().then(res => {
        this.bookHotList = res.hotlist;
        this.onelist = this.bookHotList[this.$route.params.pid - 1];
      });
    },
    getm() {
      getHotListb().then(res => {
        this.bookHotList = res.hotlist2;
        this.onelist = this.bookHotList[this.$route.params.pid - 1];
      });
    },
    addShop(pid) {
      this.flag = true;

      var shoplists = Cookies.get("shoplist");
      var ary = {};
      if (shoplists) {
        ary = JSON.parse(shoplists);
        if (ary[pid]) {
          ary[pid] += 1;
        } else {
          ary[pid] = 1;
        }
      } else {

        ary = { [pid]: 1 };
      }
      Cookies.set("shoplist", JSON.stringify(ary));

    }
  }
};
</script>
<style lang="less" scoped>
.context {
  position: absolute;
  top: 0;
  z-index: -1;
}
.swi1{
  height: 20rem;
  width: 100%;
}
.swi {
  width: 100%;
  background: white;
  .swi2 {
    height: 80%;
  }
  h3 {
    padding: 20px;
  }
}
header {
  background: rgba(0, 0, 0, 0);
  height: 23px;
  padding: 10px;

  .i1 {
    float: left;
    font-size: 18px;
    padding: 5px;
    text-align: center;
    border-radius: 20px;
    color: white;
    background: rgba(0, 0, 0, 3%);
  }
  .i2 {
    font-size: 20px;
    padding: 5px;
    text-align: center;
    border-radius: 20px;
    color: white;
    background: rgba(0, 0, 0, 3%);
    float: right;
  }
}
.divdatail {
  .mp {
    margin: 10px 0;
    padding: 10px;
    background: #fff;
    .pname {
      // color: #333;
      font-size: 15px;
      padding-bottom: 10px;
    }
    .price {
      color: red;
    }
  }
}
.shopcat {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: #fff;
  height: 50px;
  display: flex;
  .btn {
    position: absolute;
    right: 35%;
    width: 35%;
    height: 100%;
    line-height: 35px;

     background: #dbe9f6;
    border: 0;
    outline: none;
    color: #4891e0;
    font-size: 15px;
  }
  .join {
    position: absolute;
    right: 0;
    width: 35%;
    height: 100%;
    line-height: 35px;
     background: #4891e0;
    border: 0;
    outline: none;
    color: #fff;
    font-size: 15px;
  }
}
.toying {
  position: absolute;
  top: 0%;
  right:  0%;
  width: 10px;
  height: 10px;
  line-height: 10px;
  border-radius: 50px;
  text-align: center;
  background: red;
  font-size:6px;
  color:white;
}
a {
  margin: 5px 0px 5px 20px;
}
.iconfont {
  font-size: 25px;
  color: #999;
}
.c1 {
  position: absolute;
  left: 5%;
}
.c2 {
  position: absolute;
  left: 17%;
  text-align: center;
}
h6 {
  font-size: 12px;
  color: #999;
}
</style>
