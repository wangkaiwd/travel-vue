<template>
  <div class="detail-banner">
    <div class="banner-content" @click="isShowGallery=true">
      <div class="banner-back">
        <base-icon icon-text="icon-4"></base-icon>
      </div>
      <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
           alt="">
      <div class="banner-footer">
        <span class="banner-title">大连圣亚海洋世界（AAA景区）</span>
        <span class="picture-num">
          <base-icon class="icon-img" icon-text="icon-tupian"></base-icon>
          2
        </span>
      </div>
    </div>
    <base-gallery
      :swiper="swiperList"
      v-show="isShowGallery"
      @change="onChange"
    >
    </base-gallery>
  </div>
</template>
<script>
  export default {
    name: 'DetailBanner',
    data () {
      return {
        isShowGallery: false,
        swiperList: [
          {
            id: 1,
            imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg'
          },
          {
            id: 2,
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'
          },
        ]
      }
    },
    methods: {
      onChange () {
        this.isShowGallery = false
      },
    }
  }
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
    .icon-img {margin-right: calc(4rem / 37.5);}
    .banner-title {font-size: 18px;}
  }
</style>
