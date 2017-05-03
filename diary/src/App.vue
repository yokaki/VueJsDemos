<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
  @import "./common/style/normalize.css";
  #app {
    overflow: hidden;
    font-size: 12px;
    img, a {
      display: block;
    }
    a {
      text-decoration: none;

    }
    .background_image {
      position: relative;
    }
    ul{
      margin: 0;padding: 0;
      list-style: none;
    }
    a.router-link-active{
      color: #e75962;
    }
  }
</style>
