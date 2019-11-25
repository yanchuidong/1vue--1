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
              <p>{{item.bookName}}</p>
              <p class="info">{{item.bookInfo}}</p>
              <p>
                <span class="price">{{item.bookPrice | price}}</span>
                <span class="const">X {{item.const}}</span>
                <span class="price fr">小计：{{item.bookPrice * item.const |mytofixed | price }}</span>
              </p>
            </dd>
          </dl>
        </li>
      </ul>
      <div class="shopbtn">
        <p>
          <input type="checkbox" v-model="checkall" />全选
        </p>
        <p class="sum">
          <span class="price">{{sum | mytofixed |price}}</span>
          <router-link to="/success" tag="button" class="btn">结算</router-link>
        </p>
      </div>
    </div>
    <p class="notshoplist" v-else>还没有购买商品</p>
  </div>
</template>
<script>
import Header from "../../base/dxx/Header";
import { getHotList } from "../../api";
import Cookies from "js-cookie";
export default {
  name: "ShopCat",
  data() {
    return {
      shoplist: [],
      isnotshop: false
    };
  },
  components: {
    Header
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
  },
  methods: {
    getl() {
      getHotList().then(res => {
        var shopc = Cookies.get("shoplist");
        console.log(shopc);

        if (shopc) {
          this.isnotshop = true;
          var ary = JSON.parse(shopc);
          this.shoplist = res.hotlist.filter(item => {
            item.const = ary[item.bookId];
            item.ised = true;
            return ary[item.bookId]; //ary[4]
          });
            return
        }
        this.isnotshop = false;
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
        width: 70%;
        border-radius: 5px;
        vertical-align: middle;
        border: 1px solid #ccc;
      }
    }
    dd {
      float: left;
      width: 65%;
      .info {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        color: #999;
        font-size: 14px;
      }
      .price {
        color: red;
      }
      .const {
        padding-left: 10px;
        color: #999;
      }
      .fr {
        float: right;
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
    border-top: 1px solid #ccc;
    padding: 0 10px;
    p {
      flex: 1;
    }
    .sum {
      .btn {
        position: relative;
        top: 5px;
        right: 20px;
        float: right;
        padding: 10px 30px;
        border-radius: 30px;
        border: none;
        outline: none;
        background:#4891E0;
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
</style>
