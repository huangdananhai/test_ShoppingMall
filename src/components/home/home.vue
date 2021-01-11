<template>
  <!-- 容器 -->
  <el-container>
    <!-- 侧栏 -->
    <el-aside>
        <layout-aside></layout-aside>
    </el-aside>
    <!-- 顶部 -->
    <el-container>
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <!-- 主要内容 -->
      <el-main>
        <!-- 二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style>
</style>