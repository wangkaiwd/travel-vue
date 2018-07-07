<template>
  <div class="detail-banner">
    <div class="banner-content" @click="isShowGallery=true">
      <router-link tag="div" to="/" class="banner-back">
        <base-icon icon-text="icon-4"></base-icon>
      </router-link>
      <img :src="gallaryImgs[0]"
           alt="">
      <div class="banner-footer">
        <span class="banner-title">{{sightName}}</span>
        <span class="picture-num">
          <base-icon class="icon-img" icon-text="icon-tupian"></base-icon>
          2
        </span>
      </div>
    </div>
    <base-gallery
      :swiper="gallaryImgs"
      v-show="isShowGallery"
      @change="onChange"
    >
    </base-gallery>
  </div>
</template>
<script>
export default {
  name: "DetailBanner",
  props: {
    gallaryImgs: {
      type: Array,
      required: true
    },
    sightName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isShowGallery: false
    };
  },
  methods: {
    onChange() {
      this.isShowGallery = false;
    }
  }
};
</script>
<style lang="less" scoped>
.detail-banner {
  position: relative;
  width: 100%;
  height: 5.5rem;
  img {
    width: 100%;
    height: 100%;
  }
  .banner-back {
    position: absolute;
    left: calc(4rem / 37.5);
    top: calc(4rem / 37.5);
    width: calc(40rem / 37.5);
    height: calc(40rem / 37.5);
    border-radius: 50%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    line-height: calc(40rem / 37.5);
    text-align: center;
    font-size: 20px;
  }
  .banner-footer {
    padding: 0 calc(12rem / 37.5) 0 calc(8rem / 37.5);
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(30rem / 37.5);
    line-height: calc(30rem / 37.5);
    color: #fff;
  }
  .picture-num {
    margin-top: calc(((30rem / 37.5) - (16rem / 37.5)) / 2);
    height: calc(16rem / 37.5);
    line-height: calc(16rem / 37.5);
    text-align: center;
    width: calc(62rem / 37.5);
    border-radius: calc(10rem / 37.5);
    background-color: rgba(0, 0, 0, 0.8);
  }
  .icon-img {
    margin-right: calc(4rem / 37.5);
  }
  .banner-title {
    font-size: 18px;
  }
}
</style>
