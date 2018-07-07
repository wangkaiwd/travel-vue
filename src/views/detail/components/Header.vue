<template>
  <div class="detail-header">
    <base-icon class="detail-header-icon" icon-text="icon-4"></base-icon>
    景点详情
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less" scoped>
  @import "~styles/varibles.less";

  .detail-header {
    position: relative;
    height: calc(43rem / 37.5);
    background-color: @bgColor;
    line-height: calc(43rem / 37.5);
    text-align: center;
    color: #fff;
    .detail-header-icon {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: calc(32rem / 37.5);
      font-size: 16px;
    }
  }
</style>
