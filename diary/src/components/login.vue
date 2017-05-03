<template>
  <div class="login">
    <img src="../common/images/login_bg.jpg" alt="login_bg" :style="background_image" class="background_image">
    <div class="login_box">
      <p class="title">
        <img src="../common/images/login.svg" alt="login">
        <span>欢迎登录我的日记~</span>
      </p>
      <p class="login_input">
        <input type="text" id="username" placeholder="用户名" v-model="info.username">
      </p>
      <p class="login_input">
        <input type="password" id="password" placeholder="密码" v-model="info.password">
      </p>
      <p class="login_input">
        <button @click="login_check">登录</button>
        <router-link to="/register">
          注册?
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data(){
      return {
        info: {
          username: '',
          password: ''
        },
        background_image: {
          height: `${window.innerHeight}px`,
          width: `${window.outerWidth}px`
        }
      }
    },
    methods: {
      login_check(){
        console.log(this.info)
        this.$router.push('/diary')
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../common/style/login_register";


</style>
