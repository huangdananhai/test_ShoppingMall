<template>
  <!-- 面包屑的内容 -->
  <el-breadcrumb separator=">" class="aa">
      <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
         <!-- 具名插槽 -->
         <slot name='title'></slot>
      </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .aa{
    margin: -16px 0 9px 0;
  }
</style>
