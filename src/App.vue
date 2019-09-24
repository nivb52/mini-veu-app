<template>
  <div id="app">
    <AppNav />
    <router-view />
  </div>
</template>
<script>
import AppNav from "@/cmps/AppNav.vue";

export default {
  name: "App",
  components: { AppNav }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
