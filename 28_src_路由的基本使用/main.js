// 引入vue
import Vue from 'vue';
// 引入App
import App from './App.vue';

/*  
  vue-router：一个插件库，专门用来实现SPA应用
  SPA应用
    - 单页Web应用（single page web application，SPA）
    - 整个应用只有一个完整的页面
    - 点击页面中的导航链接不会刷新页面，只会做页面的局部更新
    - 数据需要通过ajax请求获取

  前端路由
    - value是component，用于展示页面内容
    - 工作过程：当浏览器的路径改变时，对应的组件就会显示
  后端路由
    - value是function，用于处理客户端提交的请求
    - 工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据

*/

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