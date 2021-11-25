// 引入vue
import Vue from 'vue';
// 引入App
import App from './App.vue';

import vueResource from 'vue-resource'

// 先安装vuex，再引入vuex插件
// import Vuex from 'vuex'    // 在创建store的文件中引入此插件


Vue.config.productionTip = false;

// 使用插件
// 使vc、vm身上都多了$http属性
Vue.use(vueResource);
// 使用Vuex插件，创建vm时可以传入store配置项
// Vue.use(Vuex);   // 在创建store的文件中使用此插件，可以保证先使用插件再创建store实例

// 在脚手架中，会扫描整个文件的import语句，然后把所有的import语句按照编写的顺序汇总到最上方，但引入store（创建store实例）需要先使用Vuex插件
// 引入store
import store from './store/index'

// 创建vm
const vm = new Vue({
  el: '#app',
  render: h => h(App),
  store,
  beforeCreate() {
    // 安装全局事件总线
    Vue.prototype.$bus = this;
  }
});

// console.log(vm);   // 使用Vuex插件并传入store配置项，vm身上多了$store属性