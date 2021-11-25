// 引入vue
import Vue from 'vue';
// 引入App
import App from './App.vue';

// 1、先安装vue插件库vue-router，再引入VueRouter
import VueRouter from 'vue-router'

// 4、引入路由器（一个应用一个路由器就够了）
import router from './router/index'

Vue.config.productionTip = false;

// 2、应用插件VueRouter就可以在创建vm时使用一个全新的配置项router
Vue.use(VueRouter);

const vm = new Vue({
  el: '#app',
  render: h => h(App),
  // 3、此配置项值不可以随意设置，必须是一个router（创建路由器：在router文件夹下创建路由器）
  router
});