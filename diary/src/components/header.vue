<template>
  <ul class="header">
    <li v-for="i in menu">
      <router-link :to="i.url" class="block">
        {{i.name}}
      </router-link>

    </li>
  </ul>
</template>

<script>
  export default {
    name: 'header',
    data(){
      return {
        menu: [
          {name: '照片墙',url:'/photo'}, {name: '社区',url:'/diary'}, {name: '登录',url:'/login'}, {name: '注册',url:'/register'},{name:'我的日记',url:'my_diary'}
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .header {
    position: absolute;
    z-index: 9;
    right: 2rem;
    top: 2rem;
    a{
      font-size:1.2rem;
      width: 8rem;
      padding: 1rem 0;
      color: #dedede;
    }
  }
</style>
