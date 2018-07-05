<template>
  <div class="hot-sales">
    <div class="title">
      热销推荐
    </div>
    <ul class="hot-sales-content">
      <li 
        class="hot-sales-item"
        v-for="item in homeHotSaleList"
        :key="item.id"
      >
        <div class="left-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="right-text">
          <h3 class="text-title">{{item.title}}</h3>
          <p class="text-content">{{item.desc}}</p>
          <p class="text-detail">查看详情</p>
        </div>
      </li>
    </ul>
  </div>  
</template>

<script>
export default {
  name: "HomeHotSales",
  props: {
    homeHotSaleList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
@import "~styles/minix.less";
.hot-sales {
  .hot-sales-item {
    display: flex;
    height: 2.5333rem;
    padding: 0.1333rem;
    box-sizing: content-box;
    border-bottom: 1px solid #eaeaea;
  }
  .left-img {
    width: 2.5333rem;
    height: 2.5333rem;
  }
  .right-text {
    flex: 1;
    margin-left: 0.16rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-width: 0;
  }
  .text-title {
    .ellipsis();
    height: 0.6933rem;
    line-height: 0.6933rem;
    font-size: 16px;
  }
  .text-content {
    .ellipsis();
    color: #ccc;
  }
  .text-detail {
    .ellipsis();
    width: 2.0267rem;
    height: 0.5867rem;
    color: #fff;
    background-color: #ff9300;
    text-align: center;
    line-height: 0.5867rem;
    border-radius: 0.1067rem;
  }
}
</style>
