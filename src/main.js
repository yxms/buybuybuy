import Vue from 'vue'
import App from './App.vue'

//导入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.use(iView);

import './assets/cavars.js';

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
// use一下 全局
Vue.use(Vuex)
// 实例化Vuex
const store = new Vuex.Store({
  // 数据设置到state属性中
  state: {
    shopCartData:JSON.parse(window.localStorage.getItem('cartData'))||{}
  },
  // 修改数据的方式
  mutations: {
    // increment (state) {
    //   state.count++
    // }

    addCart(state,opt){
      if(state.shopCartData[opt.id] == undefined){
        Vue.set(state.shopCartData,opt.id,opt.buyCount);
      } else {
        state.shopCartData[opt.id] += opt.buyCount;
      }
    }
  },
  // 相当于Vue的计算属性
  getters:{
    cartGoodCount(state){
      // 通过state就可以访问到我们的数据
      let totalCount = 0;
      for (const key in state.shopCartData) {
        totalCount += state.shopCartData[key]
      }
      return totalCount;
    }
  }
})



Vue.use(ElementUI);
import axios from "axios";
// 把axios 放到构造函数中 所有的vue实例都可以使用
// Vue组件也是一个Vue实例
//挂到原型链上 所有的组件都能访问 
Vue.prototype.$axios = axios;

// 导入moment
import moment from "moment";

Vue.filter('beautifyTime',function (value,str,str2,str3) {
 
    return moment(value).format("YYYY年MM月DD日");
  
}),

// 公共路径部分
axios.defaults.baseURL = 'http://111.230.232.110:8899';

// 路由规则
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
// 实例化Vue
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载到Vue实例上
  router,
  // 挂载到Vue实例上 所有子组件都能访问
  store
}).$mount('#app')


// 浏览器关闭事件
window.onbeforeunload = function(){
  // 保存
  window.localStorage.setItem('cartData',JSON.stringify(store.state.shopCartData))
  
}