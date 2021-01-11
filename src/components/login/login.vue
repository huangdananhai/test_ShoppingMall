<template>
  <div class="header">
    <el-card class="header-card">
      <div class="title">
        <img src alt />
        <span class="header-login">后台登录</span>
        <hr />
      </div>
      <!-- 登录表单 -->
      <el-form ref="myForm" :rules="loginRules" :model="form">
        <!-- 用户账号 -->
        <el-form-item prop="name">
          <b style="padding-left:3px;font-size:18px">Username</b>
          <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <!-- 用户密码 -->
        <el-form-item prop="password">
          <b style="padding-left:3px;font-size:18px">Password</b>
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <!-- 提交表单 -->
        <el-form-item>
          <el-button @click.prevent="submitLogin" type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
      },
      loginRules: {
        // 验证规则
        name: [
          { required: true, message: "请输入您的用户名" },
          { pattern: /^[a-z0-9_-]{3,16}$/, message: "密码格式不正确" },
        ],
        password: [
          { required: true, message: "请输入您的密码" },
          { pattern: /^[a-z0-9_-]{6,18}$/, message: "密码格式不正确" },
        ],
      },
    };
  },
  methods: {
      // 提交登录表单
      submitLogin() {
        this.$refs.myForm.validate((isOK) => {
          if (isOK) {
            //  认为前端校验登录表单成功
            // 地址参数  查询参数 params 对象
            // body参数 data对象
            this.$axios({
              url: "/user", // 请求地址
              // method: "post",
              method:"get", //测试用的请求数据方式
              data: this.form,
            }).then((result) => {
              window.localStorage.setItem("user-token",result.data.token); // 前端缓存令牌
              this.$router.push("/home"); // 跳转到主页
              //  成功以后才会进入到then
            });
          }else{
            alert("请输入内容")
          }
        });
      },
    },
};
</script>

<style  scoped>
.header {
  background-image: url(../../assets/img/bj.jpg);
  background-size: cover; /*自适应背景图片 */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header .header-card {
  width: 440px;
  height: 400px;
}
.header .header-card .title {
  text-align: center;
}
.header .header-card .title img {
  height: 44px;
}
.header .header-card .header-login {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}
</style>