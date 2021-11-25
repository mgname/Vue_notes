// 引入vue
import Vue from 'vue';
// 引入App
import App from './App.vue';


// 全局混合，混合中的配置会应用到所有的vm、vc上
import {mixin , mixin2} from './mixin';
Vue.mixin(mixin);
Vue.mixin(mixin2);


// 关闭vue的生产提示
Vue.config.productionTip = false;

// 创建vm
new Vue({
  el: '#app',
  render: h => h(App)
});