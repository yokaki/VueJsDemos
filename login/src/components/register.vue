<template>
  <el-form :model="register_form" :rules="rules" ref="register_form">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="register_form.username" @blur="username_check"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="register_form.password" type="password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="re_password">
      <el-input v-model="register_form.re_password" type="password"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="register_form.email"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('register_form')">立即注册</el-button>
      <el-button @click="resetForm('register_form')">重置所有</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'register',
    data(){
      const re_password_check = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.register_form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        register_form: {
          username: '',
          password: '',
          re_password: '',
          email: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur'}
          ],
          re_password: [
            {validator: re_password_check, trigger: 'blur', required: true}
          ]
        }

      }
    },
    methods: {
      submit(){
        let url = 'http://localhost:3001/login_check/register'
        let info = {
          username: this.register_form.username,
          password: this.register_form.password,
          email: this.register_form.email
        }
        this.$http.post(url, info).then(res => {
          if (res.data == 1) {
            console.log('注册成功')
          } else {
            console.log('注册失败')
          }
        }).catch(res => {
          console.log(res)
        })
      },
      username_check(){
        let url = 'http://localhost:3000/login_check/username_check'
        this.$http.get(`${url}?username=${this.register_form.username}`).then(res => {
          if (res.data == 1) {
            console.log('可以注册')
          } else {
            console.log('该用户名已经被注册')
          }
        })
      },
      submitForm(formName) {
        const that = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            that.submit()
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }

  }

</script>

<style lang="less" scoped>

</style>
