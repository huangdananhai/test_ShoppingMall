// 专门配置路由的
import Vue from 'vue'
import VueRouter from 'vue-router' // 引入路由
import Home from '../components/home/home'
import Login from '../components/login/login'


// 引入组件 
Vue.use(VueRouter) // 多了一步use 相当于全局注册路由  注意这一步 必须有!!!!
export default new VueRouter({
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        redirect: '/login',
    }, {
        path: '/home',
        component: Home,
        children: [{
            // 主页
            path: '',
            component: () => import('../views/home/home'), // 按需加载
            meta:['首页']
        }, {
            path: 'administrator',
            component: () => import ('../views/home/administrator') // 按需加载
        }, {
            path: 'Worklog',
            component: () => import ('../views/home/Worklog') // 按需加载
            }, {
                path: 'gerenxinxi',
            component: () => import ('../views/home/gerenxinxi') // 按需加载
            },]
    }, {
        path: '/login',
        component: Login
        },]
})  // 实例化路由

