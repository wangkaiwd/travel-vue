<template>
  <div class="detail-header" v-show="opacity" :style="{opacity:opacity}">
    <base-icon 
      class="detail-header-icon" 
      icon-text="icon-4"
      @click.native="$router.go(-1)"
    >
    </base-icon>
    景点详情
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      opacity: 0,
      detailBannerHeight: 0
    };
  },
  methods: {
    onScroll() {
      let top = document.documentElement.scrollTop;
      let backIconOpactiy = 1;
      const height = this.detailBannerHeight;
      if (top < height) {
        this.opacity = top / height;
        backIconOpactiy = (height - top) / height;
        this.$bus.$emit("bannerIconOpactiy", backIconOpactiy);
      }
    },
    getBannerHeight() {
      this.$bus.$on("getBannerHeight", data => {
        this.detailBannerHeight = data;
      });
    }
  },
  mounted() {
    /**
     * EventTarget.addEventListener(type,listener,useCapture):
     * 用于当前节点或对象上，定义一个特定事件的监听函数。一旦这个事件执行，就会执行监听函数
     *  @param: type 事件名称，大小写敏感
     *  @param: listener: 监听函数。事件发生时会调用该监听函数
     *  @param: useCapture: 布尔市，表示监听函数是否在捕获阶段触发，默认为false(监听函数只在冒泡阶段触发)
     */
    this.getBannerHeight();
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    /**
     * EventTarget.removeEventListener('click',listener,false)
     * 用来移除addEventListener方法添加的事件监听函数
     * 注意：移除的时候三个参数必须和添加的时候一模一样
     */
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>
<style lang="less" scoped>
@import "~styles/varibles.less";

.detail-header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
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
