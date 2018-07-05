<template>
  <div class="city">
    <CityHeader :cities="cities"></CityHeader>
    <CityList
      :hotCities="hotCities"
      :cities="cities"
      :position="position"
      @letterScroll="activeIndex=$event"
    >
    </CityList>
    <CityLetter
      :letterList="letterList"
      @letterPosition="letterPosition"
      :activeIndex="activeIndex"
    >
    </CityLetter>
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue";
import CityList from "./components/List.vue";
import CityLetter from "./components/Letter.vue";

// 接口
import { fetchCity } from "@/api/home";
export default {
  name: "City",
  components: {
    CityHeader,
    CityList,
    CityLetter
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letterList: [],
      position: "",
      activeIndex: -1
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    // 获取城市页列表数据
    getList() {
      fetchCity({}, res => {
        this.cities = res.data.cities;
        this.hotCities = res.data.hotCities;
        this.letterList = Object.keys(this.cities);
      });
    },
    // 同步城市列表标题位置
    letterPosition(val) {
      this.position = val;
    }
  }
};
</script>

<style lang="less" scoped>
</style>
