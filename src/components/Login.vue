<template>
  <body id="poster">
  <el-form class="login_container" label-position="left" label-width="0px">
    <h3 class="login_title">用户登录</h3>
    <el-form-item>
      <el-input v-model="LoginForm.username" placeholder="输入用户名"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="LoginForm.password" placeholder="输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login" style="width: 100%;background: #505458;border: none">登录</el-button>
    </el-form-item>
  </el-form>
  </body>


</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        LoginForm: {
          username: '',
          password: ''
        },
        responseResult: []
      }
    },
    methods: {
      login () {
        var _this = this;
        this.$axios.post('/login', {
          username: this.LoginForm.username,
          password: this.LoginForm.password
        }).then(response => {
          if (response.data.code == 200) {

            _this.$store.commit('login', _this.LoginForm)

            var path = this.$route.query.redirect

            this.$router.replace({path: path === '/' || path === undefined ? '/index' :  path})
          }
        }).catch(fail => {

        })
      }
    }
  }
</script>

<style scoped>
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .login_container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

  }

  body {
    margin: 0px;
  }

  #poster {
    background: url('../assets/a.jpg');
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: fixed;
  }
</style>
