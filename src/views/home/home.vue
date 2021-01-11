<template>
  <div style="padding-buttom: 0px">
    <!-- <img src="../../assets/img/home.jpg" alt=""> -->
    <el-card class="header_card" shadow="hover">
      <img src="../../assets/img/header.jpg" alt />
      <div class="user_name">
        <span style="font-size: 30px">admin</span>
        <br />
        <span style="font-size: 10px">管 理 员</span>
        <el-divider></el-divider>
      </div>
      <br />
      <br />
      <p>
        上次登录时间：
        <span>2020-09-18</span>
      </p>
      <p>
        上次登录地点:
        <span>北京</span>
      </p>
      <p>
        现在时间：
        <span>
          {{
            `${nowTimes.year}-
          ${nowTimes.yy}-
          ${nowTimes.dd}&nbsp;&nbsp;
          ${nowTimes.hou}:
          ${nowTimes.min}:
          ${nowTimes.sec}`
          }}
        </span>
      </p>
    </el-card>
    <!-- 页头三个显示 -->
    <template>
      <el-row>
        <el-card class="card_name" shadow="hover">
          <i class="iconfont el-icon-nameiconfont- iconfont-ico"></i>
          <div class="iconfont-ico_right">
            <div class="iconfont-ico_right_span1">8659</div>
            <div class="iconfont-ico_right_span2">用户访问量</div>
          </div>
        </el-card>

        <el-card class="card_name" shadow="hover">
          <i
            style="background: #64d572"
            class="iconfont el-icon-nameuniEA1 iconfont-ico"
          ></i>
          <div class="iconfont-ico_right">
            <div class="iconfont-ico_right_span1">321</div>
            <div class="iconfont-ico_right_span2">系统消息</div>
          </div>
        </el-card>
        <el-card class="card_name" shadow="hover">
          <i
            style="background: #f25e43"
            class="iconfont el-icon-nameunie6cd iconfont-ico"
          ></i>
          <div class="iconfont-ico_right">
            <div style="color: #f25e43" class="iconfont-ico_right_span1">
              8000
            </div>
            <div class="iconfont-ico_right_span2">数量</div>
            <!-- 添加按钮定位位置 -->
            <el-button
              class="position"
              @click="dialogTableVisible = true"
              type="text"
              >添加</el-button
            >
          </div>
        </el-card>
      </el-row>
    </template>
    <!-- 进度条 -->
    <el-card
      class="box-card"
      style="width: 400px; margin-top: 20px"
      shadow="hover"
    >
      <div slot="header">
        <span>语音详情</span>
      </div>
      <div>
        <span>Vue</span>
        <el-progress :percentage="78.9"></el-progress>
        <span>JavaScipt</span>
        <el-progress :percentage="80.5" color="red"></el-progress>
        <span>Css</span>
        <el-progress :percentage="55.6" color="cyan"></el-progress>
        <span>HTML</span>
        <el-progress :percentage="63" color="#FFFF00"></el-progress>
        <span>jQuery</span>
        <el-progress :percentage="50.9" color="#C0C0C0"></el-progress>
      </div>
    </el-card>
    <!-- 代办事项代码 -->
    <el-card class="el-card-inner" shadow="hover">
      <div slot="header">
        <span>待办事项</span>
        <!-- <el-button @click="dialogTableVisible = true" style="float: right; padding: 3px 0" type="text">添加</el-button> -->
      </div>
      <el-dialog
        title="添加事项"
        :visible.sync="dialogTableVisible"
        :append-to-body="true"
      >
        <el-form>
          <el-form-item label="日期">
            <!-- <el-input v-model="gridData.date" type="date" placeholder="选择日期"></el-input> -->
            <el-date-picker
              v-model="gridData.date"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input
              v-model="gridData.name"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>

          <el-form-item label="事项">
            <el-input
              v-model="gridData.address"
              placeholder="请输入事项"
            ></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogTableVisible = false">取 消</el-button>
          <el-button @click.prevent="sumbit((dialogTableVisible = false))"
            >添 加</el-button
          >
        </div>
      </el-dialog>
      <div class="table-responsive" style="height: 400px">
        <!--
        <table
          class="table table-striped"
          style="color: #909399"
          :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        >
          <thead>
            <tr>
              <th>id</th>
              <th>日期</th>
              <th>姓名</th>
              <th>事项</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData" :key="index.id" >
              <td>{{ index + 1 }}</td>
              <td>{{ item.date | test("YYYY-MM-DD") }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.address }}</td>
              <td>
                <a @click="delItem(item.id)">删除</a>
              </td>
            </tr>
          </tbody>
        </table>
        -->
        <template>
        <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">
          <el-table-column prop="id" label="ID" width="100" ></el-table-column>
          <el-table-column prop="date" label="日期" width="160">{{tableData.data | test("YYYY-MM-DD")}}</el-table-column>
          <el-table-column prop="name" label="姓名" width="160"></el-table-column>
          <el-table-column prop="address" label="事项" width="180"></el-table-column>
          <el-table-column prop="delete" label="操作"  width="100"> <a @click="delItem(tableData.id)">删除</a></el-table-column>
          <!-- bug---删除失败，路径不对 -->
        </el-table>
        </template>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[3, 5, 10, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        >
          <!--total ：代表的是数据的总长度-->
          <!--page-size：代表的是每一页数据的长度-->
          <!--current-page：代表当前页数-->
          <!--page-sizes：每页显示个数选择器-->
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      nowTimes: {
        year: 0,
        yy: 0,
        dd: "00",
        hou: "00",
        min: "00",
        sec: "00",
      },
      gridData: {
        date: "",
        name: "",
        address: "",
      },
      currentPage: 1, // 当前页码
      pageSize: 5, //每页显示
      tableData:[],
      dialogTableVisible: false,
    };
  },
  methods: {
    setNowTimes() {
      let myDate = new Date(); //标准时间
      this.nowTimes.year = myDate.getFullYear(); //年
      this.nowTimes.yy = myDate.getMonth() + 1; //月
      this.nowTimes.dd = String(
        myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
      ); //日
      this.nowTimes.hou = String(
        myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
      ); //时
      this.nowTimes.min = String(
        myDate.getMinutes() < 10
          ? "0" + myDate.getMinutes()
          : myDate.getMinutes()
      ); //分
      this.nowTimes.sec = String(
        myDate.getSeconds() < 10
          ? "0" + myDate.getSeconds()
          : myDate.getSeconds()
      ); //秒
    },
    matterdata() {
      this.$axios.get("/fromname").then((result) => {
        this.tableData = result.data;
      });
    },
    sumbit() {
      if (this.gridData.name && this.gridData.date && this.gridData.address) {
        this.$axios
          .post("/fromname", this.gridData)
          .then(({ data, status }) => {
            if (status === 201) {
              // this.$router.push({ path: "/home" });
              //可能是json本身的bug，导致添加刷新后在尾部显示,并且el-dialog的内容不消失，而且添加的内容会变成后来增加的内容
              this.tableData.unshift(this.gridData);
            }
          });
      } else {
        alert("内容不能为空");
      }
    },
    delItem(id) {
      if (confirm("确认删除数据?")) {
        this.$axios.delete(`/fromname/${id}`).then((red) => {
          red.status === 200 && this.matterdata();
        });
      }
    },

    // 每页显示数据变更
    handleSizeChange(val) {
      // console.log("每页" + val + "条");
      //this.pageSize 是请求表格数据接口中的参数 设置表格每页显示多少条数据
      this.currentPage = 1;
      this.pageSize = val;
    },
    // 页码变更
    handleCurrentChange(val) {
      // console.log("当前页" + val);
      //this.currentPage 是请求表格数据接口中的参数 设置表格当前处于多少页
      this.currentPage = val;
    },
  },
  filters: {
    test(value, format) {
      return moment(value).format(format);
    },
  },
  mounted() {
    this.matterdata();
    setInterval(() => {
      this.setNowTimes();
    }, 1000);
  },
};
</script>

<style lang="less" scoped>
.header_card {
  height: 300px;
  width: 400px;
  float: left;
  margin-top: 20px;
}
.header_card img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  float: left;
}
.header_card .user_name {
  padding-left: 220px;
  padding-top: 30px;
}
.card_name {
  width: 20%;
  height: 100px;
  float: left;
  margin-left: 23.5px;
  margin-top: 20px;
}
.iconfont-ico {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
  background: #2d8cf0;
  margin: -10%;
}
.iconfont-ico_right {
  text-align: center;
  margin-left: 92px;
  font-size: 20px;
  margin-top: -63px;
}
.iconfont-ico_right .iconfont-ico_right_span1 {
  color: #2d8cf0;
  font-weight: bold;
  font-size: 30px;
}
.iconfont-ico_right .iconfont-ico_right_span2 {
  font-size: 14px;
  color: #999;
}
.el-card-inner {
  float: right;
  width: 64%;
  height: 471px;
  margin: -471px 0 0 0;
  margin-right: 0px;
}
/* ”添加“    定位属性 */
.position {
  position: absolute;
  padding: 61px 0px 0px 22px;
}
</style>