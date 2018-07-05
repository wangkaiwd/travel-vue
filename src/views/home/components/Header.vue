<template>
  <div class="header">
    <div class="header-left">
    </div>
    <div class="header-input">
      <input placeholder="输入城市/景点/游玩主题" type="text">
      <BaseIcon
        class="header-icon-search"
        iconText="icon-sousuo">
      </BaseIcon>
    </div>
    <div class="header-right" @click="$router.push('/city')">
      {{city}}
      <BaseIcon iconText="icon-jiantou"></BaseIcon>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex';

  export default {
    name: "TopHeader",
    mounted() {
    },
    computed: {
      ...mapState(['city']),
      // 将值赋值给city
      // ...mapState({currentCity:city}
      ...mapGetters(['doubleCity']),
    }
  };
</script>

<style lang="less">
  @import "~styles/varibles.less";

  .header {
    position: sticky;
    top: 0;
    z-index: 999;
    height: @headerHeight;
    background-color: @bgColor;
    display: flex;
    line-height: @headerHeight;
    color: white;
    .header-left {
      width: 0.8533rem;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      margin-right: 0.16rem;
    }
    .header-input {
      position: relative;
      color: #ccc;
      flex: 1;
      input[type="text"] {
        &::placeholder {
          color: #ccc;
        }
        height: 68%;
        width: 100%;
        border: 0;
        outline: none;
        border-radius: 0.16rem;
        padding-left: 0.8rem;
      }
      .header-icon-search {
        position: absolute;
        left: 0.24rem;
        top: 0;
      }
    }
    .header-right {
      margin: 0 0.16rem;
    }
  }
</style>
