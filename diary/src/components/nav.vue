<template>
  <div>
    <ul class="nav">
      <li v-for="i in menu">
        <router-link :to="i.url" class="block">
          {{i.name}}
        </router-link>
      </li>
    </ul>
    <router-link to="/my_diary" id="username" >{{username}}</router-link>
  </div>
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
          {name: '我的日记', url: '/my_diary'}
        ]
      }
    },
    computed:{
      username(){
        return this.$store.state.username
      }
    }
  }
</script>

<style lang="less" scoped>
  #username{
    position: absolute;
    top: 10px;
    right: 24%;
    color: #999;
    background-color: #fff !important;
  }
  .nav {
    display: flex;
    padding: 1rem 0;
    width: 100%;
    align-items: center;
    justify-content: center;
    a{
      padding: 1rem 1.3rem;
      color: #fff;
      font-size: 1rem;
      background-color: #aec8e2;
      margin-right: 10px;
      margin-top: 3px;
      border-radius: 7px;
    }

  }
</style>
