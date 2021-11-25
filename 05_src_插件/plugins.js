// 定义完了插件，要先应用插件，再创建vm

export default {
  // 插件应用时Vue自动调用install方法
  // 传入第一个参数是Vue构造函数，第二个参数以后都是插件使用者传递的数
  install(Vue , x , y) {
    // 打印插件使用者传递的参数
    console.log(x , y);
    // 全局过滤器
    Vue.filter('mySlice' , function(value){
      return value.slice(0 , 4);
    });


    // 定义全局指令
    // 对象写法
    Vue.directive('fbind', {
      // 指令与元素成功绑定时（一上来）
      bind(element, binding) {
        element.value = binding.value;
      },
      // 指令所在元素被插入页面时
      inserted(element, binding) {
        element.focus();
      },
      // 指令所在的模板被重新解析时
      update(element, binding) {
        element.value = binding.value;
      }
    });

    // 定义混入
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 200   
        }
      }
    });

    // 给Vue原型上添加一个方法（vm和vc都能用）
    Vue.prototype.hello = () => {alert('你好啊！')};
  }
};
// const obj = {
//   install() {
//     console.log('@@@install');
//   }
// };

// export default obj;