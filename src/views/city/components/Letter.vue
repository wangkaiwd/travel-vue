<template>
  <div class="city-letter">
    <ul>
      <li 
        v-for="(item,i) in letterList"
        :key="i"
        :ref="item"
        @click="handleClick(item)"
        :class="{active: i===activeIndex}"
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CityLetter",
  props: {
    letterList: {
      type: Array,
      required: true
    },
    activeIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      cityHeaderHeight: 0,
      startHeight: 0,
      liHeight: 0
    };
  },
  created() {
    this.$bus.$on("cityHeaderHeight", data => {
      this.cityHeaderHeight = data;
    });
  },
  updated() {
    const li = this.$refs["A"][0];
    this.liHeight = li.clientHeight;
    this.startHeight = li.offsetTop + this.cityHeaderHeight;
  },
  methods: {
    handleClick(item) {
      this.$emit("letterPosition", item);
    },
    touchstart() {
      this.touchStatus = true;
    },
    touchmove(e) {
      // 优化点：代码不会立即执行，一直执行会一直清除定时器，直到停止touchmove事件时才会16毫秒后执行
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.clearTimeout);
        }
        this.timer = setTimeout(() => {
          const touch = e.changedTouches[0];
          const index = Math.floor(
            (touch.clientY - this.startHeight) / this.liHeight
          );
          // 由于触摸停止的位置可以能不固定，所以touch.clientY可能会< "A"所在的位置，>"Z"所在的位置，导致index<0或者>=this.letterList.length
          // 如果index < 0 或者 index >= this.letterList.length的话，this.letterList
          if (index >= 0 && index < this.letterList.length)
            this.$emit("letterPosition", this.letterList[index]);
        }, 16);
      }
    },
    touchend() {
      this.touchStatus = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~styles/varibles.less";
.city-letter {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0.2133rem;
  top: 2.1067rem;
  bottom: 0;
  color: @bgColor;
  font-size: 14px;
  text-align: center;
  li {
    padding: 0.0533rem;
    font-size: 14px;
  }
  .active {
    background-color: @bgColor;
    color: #fff;
    border-radius: 0.2133rem;
  }
}
</style>
