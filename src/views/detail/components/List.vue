<template>
  <div class="detail-list">
    <div
      class="list-item"
      v-for="(item,index) in detailList"
      :key="index"
    >
      <div class="list-content">
        <base-icon class="list-icon" icon-text="icon-paper"></base-icon>
        <div class="list-text">{{item.title}}</div>
      </div>
      <!--组件的递归调用-->
      <detail-list v-if="item.children" :detailList="item.children"></detail-list>
    </div>
  </div>
</template>
<script>
  export default {
    // 在组件内部可以通过名字来自己调用自己
    name: 'DetailList',
    props: {
      detailList: {
        type: Array,
        required: true,
      }
    },
    data () {
      return {}
    }
  }
</script>
<style lang="less" scoped>
  @import "~styles/varibles.less";

  .detail-list {
    padding: 0 calc(10rem / 37.5);
    .list-content {
      display: flex;
      align-items: center;
      height: calc(40rem / 37.5);
      border-bottom: 1px solid #eaeaea;
    }
    .list-icon { color: @bgColor;margin-right: calc(8rem / 37.5);}
  }
</style>
