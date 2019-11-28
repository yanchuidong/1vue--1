<template>
  <div class="shopcat">
    <Header :flag="true">
      <h3>购买</h3>
    </Header>
    <div class="navlsit" v-if="isnotshop">
      <ul>
        <li v-for="(item,index) in shoplist" :key="index">
          <dl>
            <dt>
              <input type="checkbox" v-model="item.ised" />
              <img :src="item.bookImg" />
            </dt>
            <dd>
              <p class="head">{{item.bookName}}</p>
              <p class="info">{{item.bookInfo}}</p>
              <div>
                <span class="size">均码</span>
                <p class="price fl">{{item.bookPrice |mytofixed | price }}</p>
                <span class="const fr">X {{item.const}}</span>
              </div>
            </dd>
          </dl>
        </li>
      </ul>
      <div class="list">
        <p>————————更多精选商品————————</p>
        <BaseListb :list="list"></BaseListb>
      </div>
      <div class="shopbtn">
        <p class="all">
          <input type="checkbox" v-model="checkall" /> 全选
        </p>
        <p class="sum">
          <router-link to="/success" tag="button" class="btn">结算</router-link>
          <span class="hj">
            合计:
            <span class="price">{{sum | mytofixed |price}}</span>
            <p>不含运费</p>
          </span>
        </p>
      </div>
    </div>
    <p class="notshoplist" v-else>还没有购买商品</p>
  </div>
</template>
<script>
import BaseListb from "../../base/dxx/BaseListb";
import Header from "../../base/dxx/Header";
import { getHotList, getHotListb } from "../../api/dxx";
import Cookies from "js-cookie";
export default {
  name: "ShopCat",
  data() {
    return {
      list: [],
      shoplist: [{ getHotList }, { getHotListb }],
      isnotshop: false
    };
  },
  components: {
    Header,
    BaseListb
  },
  computed: {
    checkall: {
      get() {
        return this.shoplist.every((item, index) => {
          return item.ised;
        });
      },
      set(val) {
        this.shoplist.forEach(element => {
          element.ised = val;
        });
      }
    },

    sum: {
      get() {
        return this.shoplist.reduce((p, n) => {
          if (!n.ised) {
            return p;
          }
          return p + n.bookPrice * n.const;
        }, 0);
      }
    }
  },
  created() {
    this.getl();
    this.getm();
  },
  methods: {
    getl() {
      getHotList(),
        getHotListb().then(res => {
          var shopc = Cookies.get("shoplist");

          if (shopc) {
            this.isnotshop = true;
            var ary = JSON.parse(shopc);
            this.shoplist = res.hotlist2.filter(item => {
              item.const = ary[item.bookId];
              item.ised = true;
              return ary[item.bookId];
            });
            return;
          }
          this.isnotshop = false;
        });
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
.shopcat {
  margin-top: 44px;
  .navlsit {
    li {
      box-shadow: box;
      background: #fff;
      margin-top: 10px;
      overflow: hidden;
      padding: 10px;
    }
    dt {
      width: 35%;
      float: left;
      img {
        margin-left: 5%;
        width: 60%;
        border-radius: 5px;
        vertical-align: middle;
        border: 1px solid #ccc;
      }

      input {
        width: 18px;
        height: 18px;
        background: white;
        -webkit-appearance: none;
        border: 1px solid #c9c9c9;
        border-radius: 50px;
        outline: none;
        color: white;
      }
      input:checked {
        background: url("../../../static/dxx/img/duigoutianchong.png") 0 0
          no-repeat;
        border: none;
        background-size: 100%;
      }
    }
    dd {
      float: left;
      width: 65%;
      .head {
        font-size: 1rem;
      }
      .info {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        color: #999;
        font-size: 14px;
      }
      p {
        padding: 1% 0;
      }
      .size {
        color: #999;
      }
      .price {
        color: #4891e0;
      }
      .const {
        padding-left: 10px;
        color: #999;
      }
      .fr {
        float: right;
      }
      .fl {
        float: left;
      }
    }
    .list {
      margin-top: 6rem;
      p {
        margin: 1.2rem 0;
        color: #9999;
        font-size: 0.8rem;
        text-align: center;
      }
    }
  }
  .shopbtn {
    position: fixed;
    display: flex;
    width: 100%;
    height: 50px;
    line-height: 50px;
    bottom: 0;
    background: #fff;
    padding: 0 10px;
    p {
      flex: 1;
    }
    .sum {
      font-size: 0.8rem;
      flex: 2;
      span {
        float: right;
      }
      .hj {
        color: black;

        line-height: 15px;
        margin-top: 11px;
        margin-right: 10px;

        p {
          color: #999;
          font-size: 10px;
        }
      }
      .price {
        color: #4891e0;
        font-size: 0.8rem;
        font-weight: 600;
      }
      .btn {
        width: 45%;
        height: 100%;
        position: relative;
        top: 0;
        right: 0;
        float: right;
        padding: 10px 30px;
        border: none;
        outline: none;
        background: #4891e0;
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .notshoplist {
    text-align: center;
    padding: 30px;
  }
}
.all {
  margin-left: 10px;
  input {
    margin-top: 2px;
    width: 18px;
    height: 18px;
    background: white;
    -webkit-appearance: none;
    border: 1px solid #c9c9c9;
    border-radius: 50px;
    outline: none;
    color: white;
  }
  input:checked {
    background: url("../../../static/dxx/img/duigoutianchong.png") 0 0 no-repeat;
    border: none;
    background-size: 100%;
  }
}
</style>
