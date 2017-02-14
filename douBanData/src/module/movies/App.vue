<template>
  <div id="app">
    <p class="movie-list-title">正在热映 <a href="javascript:">查看更多 ></a></p>
    <ul class="movie-list">
      <li v-for="(item,index) in movieList" class="movie-list-item" :data-movie-id="item.id">
        <img :src="item.images.large" :alt="item.title" class="movie-img">
        <span>{{item.title | title}}</span>
        <span>评分：{{item.rating.average}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        movieList: []
      }
    },
    filters: {
      title:val => {
        if (val.length >= 6) {
          val = val.substring(0, 6) + '...';
        }
        return val;
      }
    },

    mounted: function () {
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters' + '?start=0&count=4')
          .then(res => this.movieList = res.body.subjects)
    },
    components: {}
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .movie-list-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font: 16px/40px "微软雅黑";
    align-self: flex-start;
    color: #166dff;
  }
  .movie-list-title a{
    text-decoration: none;
    font: 8px/24px "微软雅黑";
    color: #888;
  }

  ul, li {
    list-style: none;
  }

  .movie-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 20px;
  }

  .movie-list-item {
    display: flex;
    flex-direction: column;
    font: 8px/24px "微软雅黑";
  }

  .movie-img {
    width: 120px;
    height: 160px;
  }
</style>
