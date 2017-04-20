<template>
  <div id="app">
    <app_header></app_header>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header.vue'
  import content from './components/content.vue'
  export default {
    name: 'app',
    mounted(){
    },
    components: {
      'app_header': header,
      'app_content': content
    }
  }
</script>

<style lang="less">
  @font_color: #333;
  * {
    margin: 0;
    padding: 0;
  }

  html {
    border-top: 4px solid #666;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    width: 90%;
    margin: 0 auto;
    font-size: 18px;
    padding: 1rem 0;
    color: @font_color;
  }

  a {
    color: @font_color;
    text-decoration: none;
  }

  .story_item {
    h2 {
      font-size: 1rem;
      padding: 1rem 0;
    }
    .meta {
      display: flex;
      align-items: center;
      padding-bottom: 1rem;
      .author {
        padding-left: .5rem;
        font-size: .5rem;
      }
    }
    p {
      font-size: .9rem;
      text-indent: 1.8rem;
      padding-bottom: 1rem;
    }
    .view-more, .bio {
      display: none;
    }
    .content-image {
      width: 18rem;
    }

  }

</style>
