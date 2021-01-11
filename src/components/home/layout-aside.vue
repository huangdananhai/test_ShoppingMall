<template>
<div style="height:0 auto">
  <div class="span">后台管理</div>
      <el-row>
        <el-menu router index="1" style=" transition:all 0.3s; min-height:91vh;"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="/home">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-menu-item index="/home/administrator">
            <i class="el-icon-setting"></i>
            <span slot="title">我的管理</span>
          </el-menu-item>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-platform"></i>
              <span>日常办公</span>
            </template>
            <el-menu-item  index="/home/worklog">工作日志</el-menu-item>
            <el-menu-item index="/home/myworklog">我的工作日志</el-menu-item>
            <el-menu-item index="/home/task">定制任务</el-menu-item>
            <el-menu-item index="/home/mytask">我的任务</el-menu-item>
            <el-menu-item index="/home/schedule">日程管理</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>培训管理</span>
            </template>
            <el-menu-item index="4-1">我的培训</el-menu-item>
            <el-menu-item index="4-2">培训管理</el-menu-item>
          </el-submenu>

          <el-menu-item index="5">
            <i class="el-icon-more"></i>
            <span slot="title">消息推送</span>
          </el-menu-item>

          <el-menu-item index="6">
            <i class="el-icon-phone"></i>
            <span slot="title">通讯管理</span>
          </el-menu-item>

          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-folder-opened"></i>
              <span>档案管理</span>
            </template>
            <el-menu-item index="7-1">个人档案</el-menu-item>
            <el-menu-item index="7-2">公共档案</el-menu-item>
          </el-submenu>

          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item index="8-1">用户管理</el-menu-item>
            <el-menu-item index="8-2">部门管理</el-menu-item>
            <el-menu-item index="8-3">角色管理</el-menu-item>
          </el-submenu>

          <el-menu-item index="/home/gerenxinxi">
            <i class="el-icon-user-solid"></i>
            <span slot="title" index="/home/gerenxinxi">个人信息</span>
          </el-menu-item>
        </el-menu>
      </el-row>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.span{
    font-size: 30px;
    text-align: center;
    letter-spacing: 8px;
    height: 63px;
    line-height: 63px;
    background-color: #545C64;
    width: 299px;
}
</style>