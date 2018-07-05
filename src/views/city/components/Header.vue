<template>
  <div class="city-header" ref="cityHeader">
    <div class="city-header-top">
      <BaseIcon
        class="city-back"
        iconText="icon-fanhui"
        @click.native="$router.go(-1)"
      >
      </BaseIcon>
      <h2>城市选择</h2>
    </div>
    <div class="city-header-input">
      <input v-model="keywords" type="text" placeholder="输入城市名或拼音">
    </div>
    <div v-show="keywords" class="city-content" ref="wrapper">
      <ul>
        <li
          class="city-list"
          v-for="item in list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="city-list" v-show="noMatch">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapMutations} from 'vuex';
  export default {
    name: "CityHeader",
    props: {
      cities: {
        type: Object,
        require: true,
      }
    },
    data() {
      return {
        keywords: '',
        list: []
      }
    },
    mounted() {
      this.$bus.$emit("cityHeaderHeight", this.$refs.cityHeader.clientHeight);
      this.scroll = new BScroll(this.$refs.wrapper);
    },
    computed: {
      noMatch() {
        return !this.list.length;
      }
    },
    methods: {
      handleCityClick(city) {
        this.changeCity(city);
        this.$router.push('/home');
      },
      ...mapMutations(['changeCity'])
    },
    watch: {
      keywords(val) {
        this.list = [];
        clearInterval(this.timer);
        this.timer = setTimeout(() => {
          for (let k in this.cities) {
            if (this.cities.hasOwnProperty(k)) {
              this.cities[k].map(item => {
                const bool = item.spell.indexOf(val) > -1 || item.name.indexOf(val) > -1;
                if (bool) {
                  this.list.push(item);
                }
              })
            }
          }
        }, 100)
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "~styles/varibles";

  .city-header {
    height: 2.1067rem;
    width: 100%;
    background: @bgColor;
    .city-header-top {
      color: #fff;
      position: relative;
      height: @headerHeight;
      line-height: @headerHeight;
      h2 {
        text-align: center;
        font-size: 16px;
      }
    }
    .city-back {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0 0.2133rem;
    }
    .city-header-input {
      height: 0.96rem;
      padding: 0 0.1067rem;
      input {
        height: 0.8267rem;
        width: 100%;
        border: 0;
        outline: none;
        border-radius: 0.1067rem;
        text-align: center;
        font-size: 12px;
        // 为输入框留一些俩边的间隙，比较美观
        padding: 0 0.1067rem;
      }
    }
    .city-content {
      position: absolute;
      top: 2.1067rem;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: #eee;
      z-index: 999;
      overflow: hidden;
    }
    .city-list {
      padding-left: 0.2133rem;
      height: 0.9867rem;
      line-height: 0.9867rem;
      border-bottom: 1px solid #eaeaea;
      background-color: #fff;
    }
  }
</style>
