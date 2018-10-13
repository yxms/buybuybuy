import Vue from 'vue'
import App from './App.vue'

//导入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.use(iView);

// 导入样式
import "./assets/statics/site/css/style.css";
// 导入路由
import VueRouter from 'vue-router';
//引入index组件
import index from './components/index.vue'
// 导入detal组件
import detail from './components/detail.vue';
// 导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// use一下
Vue.use(VueRouter);

// 图片放大镜功能
import ProductZoomer from 'vue-product-zoomer'
Vue.use(ProductZoomer)

// 导入Vuex
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})



Vue.use(ElementUI);
import axios from "axios";
// 把axios 放到构造函数中 所有的vue实例都可以使用
// Vue组件也是一个Vue实例
// 所有的组件都能访问
Vue.prototype.$axios = axios;

// 导入moment
import moment from "moment";

Vue.filter('beautifyTime',function (value,str,str2,str3) {
 
    return moment(value).format("YYYY年MM月DD日");
  
}),


axios.defaults.baseURL = 'http://111.230.232.110:8899';
const routes = [
  {
    path:'/',
    component:index
  },
  {
    path:'/index',
    component:index
  },
  {
    path:'/detail/:goodId',
    component:detail
  }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
