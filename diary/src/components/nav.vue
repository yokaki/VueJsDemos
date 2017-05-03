<template>
  <ul class="nav">
    <li v-for="i in menu">
      <router-link :to="i.url">
        {{i.name}}
      </router-link>

    </li>
  </ul>
</template>

<script>
  export default {
    name: 'nav',
    data(){
      return {
        menu: [
          {name: '照片墙', url: '/photo'},
          {name: '社区', url: '/diary'},
          {name: '登录', url: '/login'},
          {name: '注册', url: '/register'},
          {name: '我的日记', url: 'my_diary'}
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .nav {
    display: flex;
    padding: 1rem 0;
    a{
      padding: 1rem 1.3rem;
      color: #666;
      font-size: 1rem;
    }
  }
</style>
