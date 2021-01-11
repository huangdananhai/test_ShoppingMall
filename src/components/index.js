import LayoutAside from '../components/home/layout-aside'
import LayoutHeader from '../components/home/layout-header'
import mianbaoxie from '../views/home/mianbaoxie'

export default {
    install(Vue) {
        Vue.component('layout-aside', LayoutAside) // 全局注册
        Vue.component('layout-header', LayoutHeader)
        Vue.component('mianbaoxie', mianbaoxie)
    }
}