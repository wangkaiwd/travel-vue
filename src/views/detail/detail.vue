<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner
      :gallaryImgs="gallaryImgs"
      :sightName="sightName"
      :bannerImg="bannerImg"
    >
    </detail-banner>
    <detail-list 
      :detail-list="detailList"
    >
    </detail-list>
  </div>
</template>
<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";

import { fetchDetail } from "@/api/home";

export default {
  name: "Detail",
  components: {
    DetailHeader,
    DetailBanner,
    DetailList
  },
  data() {
    return {
      detailList: [],
      gallaryImgs: [],
      sightName: "",
      bannerImg: ""
    };
  },
  mounted() {
    fetchDetail({}, res => {
      this.detailList = res.data.categoryList;
      this.gallaryImgs = res.data.gallaryImgs;
      this.sightName = res.data.sightName;
      this.bannerImg = res.data.bannerImg;
    });
  }
};
</script>
<style lang="less" scoped>
.detail {
  height: 1000px;
}
</style>
