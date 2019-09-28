<template>
  <div class="nav">
    <div class=" logo">Weather App</div>
    <ul class="flex navigation">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/favorites">favorites</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";

.nav {
  padding: 1rem 1.5rem 1rem 0;
  background-color: $white-color;
  .logo {
    float: left;
  }
  .navigation {
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  a {
    font-weight: bold;
    text-transform: capitalize;
    padding-right: 1.5rem;
    &.router-link-exact-active {
      color: $black-color; //$color_link_active;
    }
  }
}
</style>
