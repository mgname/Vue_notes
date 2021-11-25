// 引入vue
import Vue from 'vue';
// 引入App
import App from './App.vue';


// 关闭vue的生产提示
Vue.config.productionTip = false;

// 创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  /* mounted() {
    setTimeout(() => {
      this.$destroy();    // vm被销毁，其子组件与子组件身上的自定义事件都被销毁，原生事件不受影响
    } , 3000);
  } */
});