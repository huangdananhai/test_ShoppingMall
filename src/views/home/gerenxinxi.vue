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
        <el-form-item label="名称">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
      </el-form>
      </div>
    </el-card>
          <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
</el-upload>
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
}
</style>