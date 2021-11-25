// 引入vue
import Vue from 'vue';
// 引入App
import App from './App.vue';
// 引入插件，要先应用插件，再创建vm
import plugins from './plugins'


// 关闭vue的生产提示
Vue.config.productionTip = false;

// 应用（使用）插件
Vue.use(plugins , 1 , 2);

// 创建vm
new Vue({
  el: '#app',
  render: h => h(App)
});