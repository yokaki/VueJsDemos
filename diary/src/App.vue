<template>
  <div id="app">
    <transition  name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  import store from './vuex/store'
  export default{
    store
  }
</script>
<style lang="less">
  @import "./common/style/normalize.css";
  @import "./common/style/github-markdown.css";

  #app {
    overflow: hidden;
    font-size: 12px;
    img, a.block {
      display: block;
    }
    a {
      text-decoration: none;

    }
    .background_image {
      position: relative;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    a.router-link-active {
      background-color: #d68087;
    }
    .editor-toolbar {
      height: 30px;
      display: flex;
    }
    .markdown-editor {
      width: 80%;
      margin-top: 20px;
      overflow-y: auto;
    }
    button {
      border: 0;
      color: #fff;
      padding: .7rem 1.3rem;
      outline: auto;
      &:hover {
        cursor: pointer;
        transform: translate(0, -1px)
      }

      border-radius: .2rem;
    }
    .line {
      width: 100%;
      border-top: 1px solid #000000;
    }
    .list {
      border-radius: 87% 91% 90% 100%;
    }
    .list:hover {
      border-radius: 95% 70% 100% 80%;
      transform: rotate(-2deg);
    }

    .list:nth-child(2n+1) {
      border-radius: 59% 52% 56% 59%;
      transform: rotate(-6deg);
    }
    .list:nth-child(2n+1):hover {
      border-radius: 51% 67% 56% 64%;
      transform: rotate(-4deg);
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
  }
</style>
