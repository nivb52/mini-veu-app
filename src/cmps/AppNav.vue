<template>
  <div class="nav">
    <div class="logo">
      <img class="logo-img" src="img/logo.png" alt="logo" srcset="">
    
    
    </div>
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

</style>
