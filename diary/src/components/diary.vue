<template>
  <div class="diary">
    <app_nav></app_nav>
    <!--<div class="line"></div>-->
    <router-link to="/edit_diary" id="edit_diary">
      <img src="../common/images/diary1.svg" alt="diary">
      <p>写日记</p>
    </router-link>
    <ul class="diaries">
      <li v-for="j in diaries" class="diary_item">
        <h2>
          <router-link to="#">{{j.title}}</router-link>
        </h2>
        <div v-html="j.content" class="markdown-body"></div>
      </li>
    </ul>
  </div>
</template>
<script>
  import nav from './nav.vue'
  export default {
    name: 'diary',
    data(){
      return {
        diaries: [
          {
            title: '今天天气不错', content: `<blockquote>
<p>A Vue.js project</p>
</blockquote>
<h2 id="build-setup">Build Setup</h2>
<pre><code class="lang-bash"># install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
</code></pre>
<p>For detailed explanation on how things work, checkout the <a href="http://vuejs-templates.github.io/webpack/">guide</a> and <a href="http://vuejs.github.io/vue-loader">docs for vue-loader</a>.</p>`
          },
          {
            title: '今天天气不错', content: `<blockquote>
<p>A Vue.js project</p>
</blockquote>
<h2 id="build-setup">Build Setup</h2>
<pre><code class="lang-bash"># install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
</code></pre>
<p>For detailed explanation on how things work, checkout the <a href="http://vuejs-templates.github.io/webpack/">guide</a> and <a href="http://vuejs.github.io/vue-loader">docs for vue-loader</a>.</p>`
          },

        ]
      }
    },
    components: {
      'app_nav': nav
    }
  }
</script>

<style lang="less" scoped>
  .diary {

    #edit_diary {
      position: absolute;
      top: 100px;
      right: 20%;
      color: #666;
      p {
        text-align: center;
      }
    }
    .diary_item {
      width: 80%;
      margin: 0 auto;
      padding-bottom: 20px;
      border-bottom: 1px solid #000;
      h2 {
        a {
          color: #6bc4d6;
        }
      }
    }

  }

</style>
