<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',

  }
</script>

<style lang="less">
  @import "./assets/style/normalize.css";

  #app {
    font-size: 12px;
    max-width: 1000px;
    overflow-x: hidden;
    margin: 0 auto;
  }
  .logo{
    width: 3rem;
    padding-left: 2rem;
  }
</style>
