import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui' // 引入elementui
// import  路径  import  from => 需要变量  如果不需要变量 import "路径"
import "./../node_modules/bootstrap/dist/css/bootstrap.css"; // 引入 bootstarp的样式文件
import 'element-ui/lib/theme-chalk/index.css' // 引入ElementUI样式
import Component from './components'
// import './styles/less.css'
// import router from './router/index.js'  // 完整引用路径
import './styles/font_ioc/iconfont.css' //引入阿里矢量图
import moment  from 'moment'
import router from './router'  // 简写路径
import axios from 'axios'  // 引入axios
// 在axios统一导入之前 设置一个常态值
axios.defaults.baseURL = "http://localhost:3000/"
Vue.prototype.$axios = axios // 相当于所有的Vue的实例就都有了这个$axios属性

Vue.prototype.moment=moment
Vue.use(ElementUI) // 全局注册
Vue.use(Component)

new Vue({
  el: '#app',
  render: h => h(App),
  router  //  es6简写  挂载路由
})
