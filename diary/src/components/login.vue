<template>
  <div>
    <div class="login">
      <sweet-modal icon="success" ref="success">
        登录成功!
      </sweet-modal>
      <sweet-modal icon="warning" ref="warning">
        用户名或密码错误!
      </sweet-modal>
      <img src="../common/images/login_bg.jpg" alt="login_bg" :style="background_image" class="background_image">
      <div class="login_box" v-if="!username">
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
      <div v-if="username" class="login_box has_username">
        <p>已登录账号: <span>{{username}}</span></p>
        <p>
          <button @click="clean">退出?</button>
        </p>

      </div>
      <sweet-modal icon="success" ref="clean">
        退出成功!
      </sweet-modal>
    </div>

  </div>
</template>

<script>
  import {SweetModal, SweetModalTab} from 'sweet-modal-vue'
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
    computed: {
      username(){
        return this.$store.state.username
      }
    },
    methods: {
      login_check(){
        this.$http.post('http://localhost:3001/login_check', this.info).then(res => {
          if (res.data > 0) {
            this.$store.commit('get_username', this.info.username)
            window.localStorage.setItem('username', this.info.username)
            this.$refs.success.open()
            setTimeout(() => {
              this.$router.push('/diary')
            }, 1000)
          } else {
            this.$refs.warning.open()
            this.info = {}
          }
        })
      },
      clean(){
        this.$refs.clean.open()
        window.localStorage.removeItem('username')
        this.$store.commit('get_username', '')
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    },
    components: {
      SweetModal, SweetModalTab
    }
  }
</script>

<style lang="less" scoped>
  @import "../common/style/login_register";

  .has_username {
    padding: 2rem 0;
    text-align: center;
    span {
      color: #999;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

</style>
