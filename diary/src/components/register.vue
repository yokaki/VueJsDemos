<template>
  <div class="register">
    <img src="../common/images/register.jpg" alt="login_bg" :style="background_image" class="background_image">
    <div class="login_box">
      <p class="title">
        <img src="../common/images/register.svg" alt="login">
        <span>欢迎注册我的日记~</span>
      </p>
      <p class="login_input">
        <input type="text" id="username" placeholder="用户名" v-model="info.username">
      </p>
      <p class="login_input">
        <input type="password" id="password" placeholder="密码" v-model="info.password">
      </p>
      <p class="login_input">
        <input type="password" id="re_password" placeholder="确认密码" v-model="info.re_password">
      </p>
      <p class="login_input">
        <button @click="register_check">注册</button>
        <router-link to="/login">
          已有账号?
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data(){
      return {
        info: {
          username: '',
          password: '',
          re_password: ''
        },
        background_image: {
          height: `${window.innerHeight}px`,
          width: `${window.outerWidth}px`
        }
      }
    },
    methods: {
      register_check(){
        if (this.info.password != this.info.re_password) {
          console.log('密码不一致!')
        } else {
          console.log('注册成功!')
          this.$router.push('/login')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../common/style/login_register";

</style>
