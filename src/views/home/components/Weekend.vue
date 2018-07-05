<template>
  <div class="home-weekend">
    <div class="title">
      周末去哪儿
    </div>
    <div 
      class="weekend-item"
      v-for="item in weekendList"
      :key="item.id"
    >
      <div class="item-img">
        <img :src="item.imgUrl" alt="">
      </div>
      <p class="item-title">{{item.title}}</p>
      <p class="item-content">{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: {
      type: Array,
      required: true
    }
  }
};
</script>
 
<style lang="less" scoped>
@import "~styles/minix.less";
.home-weekend {
  .item-title {
    .ellipsis();
    padding: 0.1067rem;
    font-size: 16px;
  }
  .item-content {
    .ellipsis();
    padding: 0.1067rem;
    color: #ccc;
  }
}
</style>
