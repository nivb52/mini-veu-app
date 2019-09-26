<template>
  <div class="flex nav">
    <router-link to="/">Home</router-link>
    <router-link to="/favorites">favorites</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";

.nav {
  padding: 1rem 2rem 1rem 0;
  background-color: $white-color;
  justify-content: flex-end;
  a {
    font-weight: bold;
    text-transform: capitalize;
    padding-right: 1.5rem;
    &.router-link-exact-active {
      color: $black-color;//$color_link_active;
    }
  }
}
</style>
