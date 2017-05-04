<template>
  <div class="register">
    <sweet-modal icon="success" ref="success">
      注册成功!
    </sweet-modal>
    <sweet-modal icon="warning" ref="warning">
      注册失败!
    </sweet-modal>
    <img src="../common/images/register.jpg" alt="login_bg" :style="background_image" class="background_image">
    <div class="login_box">
      <p class="title">
        <img src="../common/images/register.svg" alt="login">
        <span>欢迎注册我的日记~</span>
      </p>
      <p class="login_input">
        <input type="text" id="username" placeholder="用户名" v-model="info.username" @blur="username_check">
      </p>
      <p class="err" v-if="err.user">用户名已经存在!</p>
      <p class="login_input">
        <input type="password" id="password" placeholder="密码" v-model="info.password">
      </p>
      <p class="login_input">
        <input type="password" id="re_password" placeholder="确认密码" v-model="info.re_password"
               @keyup="check_re_password">
      </p>
      <p class="err" v-if="err.psd">密码不一致!</p>
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
  import {SweetModal, SweetModalTab} from 'sweet-modal-vue'

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
        },
        err: {
          user: false,
          psd: false
        }
      }
    },
    methods: {
      username_check(){
        let username = this.info.username
        this.$http.get('http://localhost:3001/login_check/username_check?username=' + username).then(res => {
          if (res.data > 0) {
            this.err.user = false
            return true
          } else {
            this.err.user = true
            return false
          }
        })
      },
      register_check(){
        if (this.err.user == false && this.err.psd == false && this.info.password == this.info.re_password) {
          this.err.psd = this.err.user = false
          let info = {
            username: this.info.username,
            password: this.info.password
          }
          this.$http.post('http://localhost:3001/login_check/register', info).then(res => {
            if (res.data > 0) {
              this.$refs.success.open()
              setTimeout(() => {
                this.$router.push('/login')
              }, 1000)
            }
          })
        } else {
          this.$refs.warning.open()

        }

      },
      check_re_password(){
        console.log(1)
        if (this.info.password != this.info.re_password) {
          this.err.psd = true
        } else {
          this.err.psd = false

        }
      }
    },
    components: {
      SweetModal,
      SweetModalTab
    }
  }
</script>

<style lang="less" scoped>
  @import "../common/style/login_register";

  .err {
    text-align: center;
    color: #ff3b85;
  }
</style>
