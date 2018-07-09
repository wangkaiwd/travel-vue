<template>
  <div class="Gallary" @click="hiddenGallary($event)">
    <div class="container">
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="k in swiper"
          :key="k.id"
        >
          <img :src="k.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseGallary",
  props: {
    swiper: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        // 注意：由于父元素要由隐藏变为显示，所以宽度会发生变化，在这里要进行事实检测，否则会出现一些问题
        // 当swiper的父元素发生变化时进行实时更新，类似于echarts
        observer: true,
        observeParents: true
      }
    };
  },
  methods: {
    hiddenGallary(e) {
      this.$emit("change");
    }
  }
};
</script>
<style lang="less" scoped>
.Gallary {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  display: flex;
  align-items: center;
  .container {
    width: 100%;
    .swiper-container {
      height: 100%;
      width: 100%;
      overflow: initial;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
  .swiper-pagination {
    background-color: #000;
    color: #fff;
  }
  .swiper-pagination-fraction {
    bottom: calc(-34rem / 37.5);
  }
}
</style>
