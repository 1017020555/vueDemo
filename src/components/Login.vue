<template>
  <div>
    用户名：<input type="text" v-model="LoginForm.username" placeholder="输入用户名"><br>
    密码：<input type="text" v-model="LoginForm.password" placeholder="输入密码"><br>
    <input type="button" value="登录" v-on:click="login">
  </div>
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
        this.$axios.post('/login', {
          username: this.LoginForm.username,
          password: this.LoginForm.password
        }).then(response => {
          if (response.data.code == 200) {
            this.$router.replace('/index')
          }
        }).catch(fail => {

        })
      }
    }
  }
</script>

<style scoped>

</style>
