<template>
  <div class="login">
   <p class="header">
     <img src="../assets/images/dolphin.svg" alt="dolphin" class="logo">
     <!--<span>我的日记</span>-->
   </p>
    <div class="info">
      <el-input placeholder="请输入账号" v-model="username">
        <template slot="prepend">账号</template>
      </el-input>
    </div>
    <div class="info">
      <el-input placeholder="请输入密码" v-model="password" type="password">
        <template slot="prepend">密码</template>
      </el-input>
    </div>
    <p>
      <el-button type="primary" @click="login">登录</el-button>
      <el-button @click="register">注册</el-button>
    </p>

  </div>

</template>

<script>
  export default {
    name: 'login',
    data(){
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      login(){
        let url = 'http://localhost:3001/login_check'
        let info = {
          username: this.username,
          password: this.password

        }
        this.$http.post(url, info).then(res => {
          if (res.data == 1) {
            this.$message({
              message: '登录成功',
              type: 'success',
              duration: 1300,
              onClose: () => {
                this.$router.push('/personal')
              }
            })

          } else {
            this.$message({
              message: '账号或密码输入错误',
              type: 'error',
              duration: 1300,
              onClose: () => {
                this.username = this.password = ''
              }
            })
          }
        }).catch(res => {
          console.log(res)
        })
      },
      register(){
        this.$router.push('/register')
      },

    },
    components: {}
  }
</script>

<style lang="less" scoped>
  .login {
    position: relative;
    .info {
      padding: 2rem 0;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .login_in {
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;
    }
    .header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      span{
        padding-right: 4rem;
        font-size: 1.3rem;
        font-style: italic;
        color: #666;
      }
    }
  }
</style>
