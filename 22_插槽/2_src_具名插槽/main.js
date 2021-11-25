// 引入vue
import Vue from 'vue';
// 引入App
import App from './App.vue';

// 先安装vue-resource，再引入插件
// vue-resource是vue中发送ajax请求的插件库，是对xhr的封装（vue1.x用的多，官方已不维护）
import vueResource from 'vue-resource'


// 关闭vue的生产提示
Vue.config.productionTip = false;

// 使用插件
Vue.use(vueResource);

// 创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    // 安装全局事件总线
    Vue.prototype.$bus = this;
  }
});