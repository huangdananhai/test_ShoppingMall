<template>
  <div>
    <mianbaoxie slot="header">
      <template slot="title">个人信息</template>
    </mianbaoxie>
    <el-card class="header_card" shadow="always">
      <img src="../../assets/img/header.jpg" alt />
      <div class="left">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item label="账户">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="修改密码">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
      </el-form>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
};
</script>

<style lang="less" scoped>
.header_card {
  height: 350px;
  width: 100%;
  float: left;
  margin-top: 20px;
}
.header_card_a {
  height: 350px;
  width: 35%;
  float: left;
  margin-top: -21px;
  margin-left: -20px;
}
.header_card img {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  float: left;
  margin-left: 8%;
}
.left{
  float: left;
  margin-left: 50px;
}
</style>