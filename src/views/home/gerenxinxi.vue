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
          :model="ruleForm"
          ref="ruleForm"
        >
          <el-form-item label="账户" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="region">
            <el-input type="password" v-model="ruleForm.region"></el-input>
          </el-form-item>
          <el-form-item label="修改密码" prop="type">
            <el-input type="password" v-model="ruleForm.type"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
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
      ruleForm: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log("用户"+this.ruleForm.name)
      console.log("密码"+this.ruleForm.region)
      console.log("修改密码"+this.ruleForm.type)
      console.log("提交成功")
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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
  margin-left: 6%;
}
.left {
  float: left;
  margin-left: 70px;
}
</style>