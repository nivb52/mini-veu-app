<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/favorites">favorites</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#nav {
  display: flex;
  justify-content: flex-end;

  a {
    font-weight: bold;
    padding-right: 1rem;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
