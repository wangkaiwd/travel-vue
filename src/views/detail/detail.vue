<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-list :detail-list="detailList"></detail-list>
  </div>
</template>
<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'

  export default {
    name: 'Detail',
    components: {
      DetailBanner,
      DetailHeader,
      DetailList,
    },
    data () {
      return {
        detailList: [
          {
            title: '成人票',
            children: [
              {
                title: '成人三馆连票',
                children: [
                  {
                    title: '成人三馆连票-某一连锁店销售'
                  }
                ]
              },
              {
                title: '成人四馆连票'
              }
            ]
          },
          {
            title: '学生票'
          },
          {
            title: '儿童票'
          },
          {
            title: '特惠票'
          }
        ]
      }
    }
  }
</script>
<style lang="less" scoped>

</style>
