<template>
  <div id="app">
    <AppNav />
    <transition name="router-anim" enter-active-class="animated">
        <router-view />
    </transition>
  </div>
</template>
<script>
import AppNav from "@/cmps/AppNav.vue";

export default {
  name: "App",
  components: {
    AppNav,
  }
};
</script>
<style lang="scss">
@import "@/assets/css/main.scss";

.animated {
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
</style>
