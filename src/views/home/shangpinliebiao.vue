<template>
  <div>
    <mianbaoxie slot="header">
      <template slot="title">商品列表</template>
    </mianbaoxie>
    <el-card class="box-card" shadow="never">
      <div class="clearfix">
        <div>
          <i class="el-icon-search"></i>
          <span>筛选搜索</span>
          <el-button
            style="float: right"
            @click="handleSearchList()"
            type="primary"
            size="small"
          >
            查询结果
          </el-button>
          <el-button
            style="float: right; margin-right: 15px"
            @click="resetForm('sizeForm')"
            size="small"
          >
            重置
          </el-button>
        </div>
        <el-form
          ref="sizeForm"
          :inline="true"
          size="small"
          label-width="140px"
          :model="sizeForm"
        >
          <el-form-item label="输入搜索：" v-model="sizeForm" prop="name">
            <el-input
              style="width: 203px"
              placeholder="商品名称"
              v-model="sizeForm.name"
            ></el-input>
          </el-form-item>
          <el-form-item label="商品货号：" v-model="sizeForm" prop="huohao">
            <el-input
              style="width: 203px"
              placeholder="商品货号"
              v-model="sizeForm.huohao"
            ></el-input>
          </el-form-item>
          <el-form-item label="商品分类：" v-model="sizeForm"  prop="value">
            <el-select v-model="sizeForm.value" clearable placeholder="请选择">
              <el-option
                v-for="item in list"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品品牌：" v-model="sizeForm" prop="valuename">
            <el-select v-model="sizeForm.valuename" clearable placeholder="请选择">
              <el-option
                v-for="item in listname"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上架状态：" v-model="sizeForm" prop="publishStatusOptionsname">
            <el-select
              v-model="sizeForm.publishStatusOptionsname"
              placeholder="全部"
              clearable
            >
              <el-option
                v-for="item in publishStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审核状态：" v-model="sizeForm" prop="verifyStatusOptionsname">
            <el-select
              v-model="sizeForm.verifyStatusOptionsname"
              placeholder="全部"
              clearable
            >
              <el-option
                v-for="item in verifyStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
            <div class="table-container">
      <el-table
        ref="productTable"
        :data="list"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        v-loading="listLoading"
        border
      >
        <el-table-column
          type="selection"
          width="60"
          align="center"
        ></el-table-column>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="商品图片" width="120" align="center">
          <template slot-scope="scope"
            ><img style="height: 80px" :src="scope.row.pic"
          /></template>
        </el-table-column>
        <el-table-column label="商品名称" align="center">
          <template slot-scope="scope">
            <p>{{ scope.row.name }}</p>
            <p>品牌：{{ scope.row.brandName }}</p>
          </template>
        </el-table-column>
        <el-table-column label="价格/货号" width="120" align="center">
          <template slot-scope="scope">
            <p>价格：￥{{ scope.row.price }}</p>
            <p>货号：{{ scope.row.productSn }}</p>
          </template>
        </el-table-column>
        <el-table-column label="标签" width="140" align="center">
          <template slot-scope="scope">
            <p>
              上架：
              <el-switch
                @change="handlePublishStatusChange(scope.$index, scope.row)"
                :active-value="1"
                :inactive-value="0"
                v-model="scope.row.publishStatus"
              >
              </el-switch>
            </p>
            <p>
              新品：
              <el-switch
                @change="handleNewStatusChange(scope.$index, scope.row)"
                :active-value="1"
                :inactive-value="0"
                v-model="scope.row.newStatus"
              >
              </el-switch>
            </p>
            <p>
              推荐：
              <el-switch
                @change="handleRecommendStatusChange(scope.$index, scope.row)"
                :active-value="1"
                :inactive-value="0"
                v-model="scope.row.recommandStatus"
              >
              </el-switch>
            </p>
          </template>
        </el-table-column>
        <el-table-column label="排序" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.sort }}</template>
        </el-table-column>
        <el-table-column label="SKU库存" width="100" align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              @click="handleShowSkuEditDialog(scope.$index, scope.row)"
              circle
            ></el-button>
          </template>
        </el-table-column>
        <el-table-column label="销量" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.sale }}</template>
        </el-table-column>
        <el-table-column label="审核状态" width="100" align="center">
          <template slot-scope="scope">
            <p>{{ scope.row.verifyStatus | verifyStatusFilter }}</p>
            <p>
              <el-button
                type="text"
                @click="handleShowVerifyDetail(scope.$index, scope.row)"
                >审核详情
              </el-button>
            </p>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template slot-scope="scope">
            <p>
              <el-button
                size="mini"
                @click="handleShowProduct(scope.$index, scope.row)"
                >查看
              </el-button>
              <el-button
                size="mini"
                @click="handleUpdateProduct(scope.$index, scope.row)"
                >编辑
              </el-button>
            </p>
            <p>
              <el-button
                size="mini"
                @click="handleShowLog(scope.$index, scope.row)"
                >日志
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除
              </el-button>
            </p>
          </template>
        </el-table-column>
      </el-table>
    </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizeForm: {
        name: "",
        huohao: "",
        value: "",
        valuename: "",
        publishStatusOptionsname: "",
        verifyStatusOptionsname: "",
      },
      list: [
        { value: "1", label: "黄金糕" },
        { value: "2", label: "双皮奶" },
        { value: "3", label: "蛋炒饭" },
        { value: "4", label: "西红柿" },
        { value: "5", label: "牛奶" },
      ],
      listname: [
        { value: "1", label: "iphone" },
        { value: "2", label: "oppo" },
        { value: "3", label: "华为" },
        { value: "4", label: "vivo" },
        { value: "5", label: "小米" },
      ],
      publishStatusOptions: [
        {
          value: 1,
          label: "上架",
        },
        {
          value: 0,
          label: "下架",
        },
      ],
      verifyStatusOptions: [
        {
          value: 1,
          label: "审核通过",
        },
        {
          value: 0,
          label: "未审核",
        },
      ],
    };
  },
  methods: {
    handleSearchList(){
      this.$message.error('查询失败')
    },
    resetForm(formName) {
      if (this.$refs[formName] !== undefined) {
        this.$refs[formName].resetFields();
      }
    },
  },
};
</script>

<style>
</style>