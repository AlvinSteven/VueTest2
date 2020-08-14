<template>
  <body id="poster">
  <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-container" label-position="left"
           label-width="0px" >
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="loginForm.username"
                auto-complete="off" placeholder="账号" maxlength="20" clearable></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password"
                auto-complete="off" placeholder="密码" maxlength="20" show-password clearable></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <!--<el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>-->
      <el-button type="primary" round v-on:click="login">&nbsp;登&nbsp;&nbsp;录&nbsp;</el-button>
    </el-form-item>
  </el-form>
  </body>

</template>

<script>export default {
  name: 'Login',
  data () {
    return {
      // 表单字段
      loginForm: {
        username: '',
        password: 'Alvin'
      },
      // 输入规则
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'blur' }
        ]
      },
      // 输入限制
      limit: {
        username: {minlength: 2, maxlength: 10},
        password: {minlength: 4, maxlength: 16}
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      // myUndefinedFunction3()//test error report
      var _this = this
      console.log(JSON.stringify(this.$store.state))

      var validateResult = this.validateFields('loginForm')
      console.log('校验结果:' + validateResult)
      if (!validateResult) {
        return false
      }

      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            // this.$router.replace({path: '/welcome'})

            console.log('test -- code=200, 登录验证成功')
            _this.$store.commit('login', _this.loginForm)
            var path = this.$route.query.redirect
            this.$router.replace({path: path === '/' || path === undefined ? '/welcome' : path})
          } else {
            console.log('successResponse.data:' + JSON.stringify(successResponse.data))
            this.$message.error('用户名/密码 错误，登陆失败')
          }
        })
        .catch(failResponse => {
          console.log('failResponse:' + JSON.stringify(failResponse))
          this.$message.error('意外 错误，登陆失败')
        })
    },
    validateFields (formName) {
      var res = false // 校验成功标识
      this.$refs[formName].validate((valid) => {
        if (valid) {
          res = true
        } else {
          console.log('error submit!!')
          return false
        }
      })
      return res
    }
  }
}
</script>

<style>
  #poster {
    background: url("../../assets/treehouse.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }

  .login-container {
    border-radius: 15px;
    /*background-clip: padding-box;*/
    background-clip: content-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    /*background: #67C23A;*/
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  body {
    margin: 0px;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

</style>
