// 引入vue
import Vue from 'vue';
// 引入App
import App from './App.vue';


// 关闭vue的生产提示
Vue.config.productionTip = false;

// 将组件x放在window身上，让每个组件实例vc都能看见x组件（使用框架网往window身上放属性不太好）
// window.x = {a: 1 , b: 2}
// 将组件x放在VueComponent身上，让每个vc都能看到x组件（VueComponent.prototype找不到，也不能改源码）
// VueComponent.prototype.x = {a: 1 , b: 2};

// 1、x组件需要被每个vc都能看到
// Vue.prototype.x = {a: 1 , b: 2};

// 2、x组件需要可以调用$on、$off、$emit（$on、$off、$emit都在Vue原型对象上）
// Demo是一个VueComponent
// const Demo = Vue.extend({});
// VueComponent的实例对象（自己new出来的），组件标签解析时Vue创建一个VueComponent实例对象
// const d = new Demo();
// Vue.prototype.x = d;


// 创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    // 安装全局事件总线
    // vm也可以调用$on、$off、$emit（不用实例化出vc，更简洁）
    Vue.prototype.$bus = this;   // this是Vue实例
  }
});

