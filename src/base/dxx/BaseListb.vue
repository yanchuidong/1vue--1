<template>
  <div class="baselist">
     <ul>
            <router-link tag="li" v-for="(items,index) in list" :key="index"
            :to='{name:"detail",params:{pid:items.bookId}}' class="bac">
                  <img :src="items.bookImg" :alt="items.bookImg">
                  <div>
                     <p>{{items.bookName}}</p>
                     <span class="nowrop">{{items.bookInfo}}</span>
                     <p class="price">{{items.bookPrice |mytofixed | price }}</p>
                  </div>
              </router-link>
        </ul>
  </div>
</template>
<script>
export default {
  name: "BaseListb",
  props: ["list"]
};
</script>
<style lang="less" scoped>
@border-botm2: 1px solid #f5f5f5;
.list {
  width: 100%;
  margin: 0 auto;
  background: #fff;
  h3 {
    color: #999;
    padding: 10px;
    line-height: 20px;
    border-bottom: @border-botm2;
  }
  a {
    float: right;
    color: red;
  }
  .bac {
    background: #fff;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin: 0.1rem 0.2rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border-bottom: 1px solid #f5f5f5;
      width: 48%;
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
        border-left: @border-botm2;
      }
      img {
        margin: 10%;
        margin-bottom: 0;
        width: 80%;
      }
    }
  }
}
</style>
