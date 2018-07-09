<template>
  <div class="fade-animation">
    <!-- 不加name的话，对应的类名以v-开头，如v-active -->
    <transition name="fade">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FadeAnimation"
};
</script>

<style lang="less" scoped>
.fade-animation {
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s;
  }
}
</style>
