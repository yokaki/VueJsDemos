<template>
  <div id="app">
    <!--选项卡-->
    <template>
      <el-tabs v-model="activeName2" type="card">
        <el-tab-pane label="电影" name="first">
          <v-movie></v-movie>
        </el-tab-pane>
        <el-tab-pane label="图书" name="second">
          <v-book></v-book>
        </el-tab-pane>

        <el-tab-pane label="音乐" name="third">
          <v-music></v-music>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
  import movie from './components/movie/movie.vue';
  import book from './components/book/book.vue';
  import music from './components/music/music.vue';


  export default {
    components:{
      'v-movie':movie,
      'v-book':book,
      'v-music':music
    }
  }

</script>

<style>
a{text-decoration: none;color: #1c8de0;}
</style>
