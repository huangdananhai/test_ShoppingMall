<template>
  <div>
    <mianbaoxie slot="header" class="aa">
      <template slot="title">我的管理</template>
    </mianbaoxie>
    <el-card class="box-card" shadow="never">
      <div class="clearfix">
        <i class="el-icon-search"></i>
        <span icon="el-icon-search">筛选搜索</span>
        <el-form
          ref="form"
          :model="form"
          :inline="true"
          size="small"
          label-width="140px"
        >
          <el-form-item label="输入搜索：">
            <el-input
              style="width: 203px"
              placeholder="商品名称"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" class="chaxun">查询结果</el-button>
      </div>
    </el-card>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="编号" width="120">1</el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="品牌名称" width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="品牌首字母"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop=""
          label="排序"
          show-overflow-tooltip
        >
        <span>12</span>
        </el-table-column>
        <el-table-column prop="" label="制造商是否显示" show-overflow-tooltip>
          <el-switch v-model="value" ></el-switch>
        </el-table-column>
        <el-table-column prop="" label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
      },
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      formname:{},
      multipleSelection: [],
      value: true,
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //删除
    handleDelete(index,row){
      this.$confirm("永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
            // 移除对应索引位置的数据，可以对row进行设置向后台请求删除数据
            this.tableData.splice(index, 1);
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
    },
    //编辑
    handleEdit(index,row){
        this.formname=this.tableData[index]
    }
  },
};
</script>

<style lang="less" scoped>
.chaxun {
  float: right;
  position: relative;
}
</style>