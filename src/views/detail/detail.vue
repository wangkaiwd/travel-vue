<template>
  <div class="detail">
    <detail-banner></detail-banner>
  </div>
</template>
<script>
  import DetailBanner from './components/Banner'

  export default {
    name: 'Detail',
    components: {
      'detail-banner': DetailBanner,
    }
  }
</script>
<style lang="less" scoped>

</style>
