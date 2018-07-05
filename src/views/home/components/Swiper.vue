<template>
  <div class="home-swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide 
        v-for="k in swiper"
        :key="k.id"
      >
        <img :src="k.imgUrl" alt="">
      </swiper-slide>
      <!-- control -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
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
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    };
  }
};
</script>

<style lang="less" scoped>
.home-swiper {
  height: 3.1467rem;
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  /** 
  * 如果组件中的style添加了scoped属性时，父组件的样式不会渗透到子组件中
  * 通过>>>操作符可以让scoped样式中的一个选择器作用的更深，影响到子组件
  *
  *   这里通过slot插槽实现的分页器样式要在Vue-Awesome-Swiper组件中进行修改
  *   所以要通过>>>操作符进行穿透，而由于less预处理器无法正确解析>>>，可以使用>>>的别名/deep/来代替
  */
  & /deep/ .swiper-pagination-bullet-active {
    background-color: #fff;
  }
}
</style>
