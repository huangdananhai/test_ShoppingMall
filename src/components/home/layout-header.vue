<template>
  <el-row class="header" type="flex" justify="space-between" align="middle">
    <el-col class="left" :span="7">
      <i class="el-icon-s-fold"></i>
      <span>北京</span>
    </el-col>
    <el-col class="right" :span="3">
      <img src="../../assets/img/avatar.jpg" alt="" />
      <!-- 下拉菜单 -->
      <el-dropdown @command="handle">
        <span style="margin-left: 12px; font-size: 16px; color: #000"
          >北风呼呼</span
        >
        <!-- 下拉菜单  具名插槽 -->
        <el-dropdown-menu slot="dropdown">
          <!-- 下拉内容 -->
          <el-dropdown-item command="info" 
            >个人信息</el-dropdown-item
          >
          <el-dropdown-item command="git">Git地址</el-dropdown-item>
          <el-dropdown-item command="lgout" 
            >退出</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    handle(command) {
      if (command === "lgout") {
        window.sessionStorage.clear();
        this.$router.push("/login");
      } else if (command === "git") {
        window.location.href = "https://github.com/huangdananhai/";
      } else if (command === "info") {
        this.$router.push("/home/gerenxinxi");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  background-color: #3c8dbc;
}
.header .left {
  float: left;
  font-size: 18px;
}
.header .left span {
  margin-left: 8px;
}
.header .right img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>