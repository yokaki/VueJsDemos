<template>
  <div>
    <p class="item-template-tiele">{{message}}</p>
    <ul class="item-template-list">
      <li v-for="item in bookList">
        <p><a :href="item.alt">{{item.title}}</a></p>
      </li>
    </ul>
  </div>

</template>

<script>
  export default{
    data(){
      return {
        message: "图书专区",
        bookList: []
      }
    },
    mounted: function () {
      this.$http.jsonp('https://api.douban.com/v2/book/search?q=javascript').
      then(res => this.bookList = res.body.books.splice(0, 10));
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
</style>