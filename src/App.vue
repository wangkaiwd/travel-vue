<template>
  <div id="app">
    <router-view></router-view>
    <base-loading></base-loading>
  </div>
</template>
<script>
import BaseLoading from "@/components/loading";
export default {
  name: "App",
  components: {
    BaseLoading
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
</style>
