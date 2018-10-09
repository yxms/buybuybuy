import Vue from 'vue'
import App from './App.vue'

// 导入样式
import "./assets/statics/site/css/style.css";
// 导入路由
import VueRouter from 'vue-router';

import index from './components/index.vue'

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    component:index
  },
  {
    path:'/index',
    component:index
  }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
