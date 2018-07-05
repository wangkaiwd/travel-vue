<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper
      :swiper="swiper"
    >
    </HomeSwiper>
    <HomeCategory
      :iconList="iconList"
    >
    </HomeCategory>
    <HomeSales
      :homeHotSaleList="homeHotSaleList"
    >
    </HomeSales>
    <HomeWeek
      :weekendList="weekendList"
    >  
    </HomeWeek>
  </div>
</template>

<script>
// 组件
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeCategory from "./components/Category";
import HomeSales from "./components/HotSales.vue";
import HomeWeek from "./components/Weekend.vue";

// 请求接口
import { fetchHome } from "@/api/home";
export default {
  name: "Home",
  data() {
    return {
      swiper: [],
      iconList: [],
      homeHotSaleList: [],
      weekendList: []
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeCategory,
    HomeSales,
    HomeWeek
  },
  mounted() {
    this.getList();
  },
  methods: {
    // 获取首页列表数据
    getList() {
      fetchHome({}, res => {
        const { data } = res;
        this.swiper = data.swiperList;
        this.iconList = data.iconList;
        this.homeHotSaleList = data.recommendList;
        this.weekendList = data.weekendList;
      });
    }
  }
};
</script>

<style lang="less">
</style>
