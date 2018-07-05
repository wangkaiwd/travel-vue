<template>
  <div class="home-category">
    <swiper>
      <!-- slides -->
      <swiper-slide 
        v-for="(k,i) in pages"
        :key="i"
      >
      <div class="category-container">
        <div 
          class="item" 
          v-for="item in k" 
          :key="item.id"
        >
          <img 
            class="item-img" 
            :src="item.imgUrl" 
            alt=""
          />
          <p>{{item.desc}}</p>
        </div>
      </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
/**
 * TODO:
 *  通过每页显示的条数来创建二维数组
 *  之前遇到的问题：轮播表格时，每页5条自己是怎么处理的？
 */
export default {
  name: "HomeCategory",
  props: {
    iconList: {
      type: Array,
      required: true
    }
  },
  computed: {
    pages() {
      // 自己实现方法，这样的话会多一个空数组，得额外处理，比较冗余
      // const pages = [];
      // let perPage = [];
      // this.iconList.forEach((item, i) => {
      //   perPage.push(item);
      //   if ((i + 1) % 8 === 0) {
      //     pages.push(perPage);
      //     perPage = [];
      //   }
      // });
      // if (perPage.length === 0) return pages;
      // pages.push(perPage);
      // return pages;

      const pages = [];
      this.iconList.forEach((item, i) => {
        // page为pages的下标，总页数，从0开始计算
        const page = Math.floor(i / 8); // 8时9条数据，page = 1, pages[1]为undefined
        if (!pages[page]) pages[page] = [];
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~styles/varibles";
.home-category {
  width: 100%;
  height: 5.0133rem;
  background-color: #fff;
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  // scoped穿透效果
  & /deep/ .swiper-wrapper {
    box-sizing: inherit;
  }
  .category-container {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    // 当折行进行多行显示时要使用align-content而不是align-items
    align-content: space-around;
    padding: 0.1333rem 0;
  }
  .item {
    width: 25%;
    text-align: center;
  }
  .item-img {
    width: 1.6533rem;
    height: 1.6533rem;
  }
}
</style>
