<template>
  <div>
    <p class="item-template-tiele">{{message}}</p>
    <ul class="item-template-list">
      <li v-for="item in movieList">
        <p>
          <span class="item-title"><a :href="item.alt" >{{item.title}}</a></span>
          <span>{{item.rating.average}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: '电影专区',
        movieList: []
      }
    },
    mounted: function () {
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?start=0&count=10')
          .then(res => {
            this.movieList = res.body.subjects;
          });
    }
  }
</script>

<style>
  .item-template-tiele {
    color: #8391a5;
    font: 16px/24px "微软雅黑";
    margin: 5px 0;
  }

  .item-template-list {
    color: #20a0ff;
    font: 12px/24px "微软雅黑";
  }
  .item-title{min-width: 200px;display: inline-block;}
</style>
