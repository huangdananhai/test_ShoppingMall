<template>
  <div>
    <mianbaoxie slot="header">
      <template slot="title">商品添加</template>
    </mianbaoxie>

    <el-card>
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
        <el-step title="步骤 4"></el-step>
      </el-steps>
      <el-row class="button">
        <el-button type="primary" @click="next">下一步</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
  },
};
</script>

<style lang="less">
.button{
  text-align: center;
}
</style>>
