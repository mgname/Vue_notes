/*  

  使用vue脚手架具体步骤
    1.全局安装@vue/cli：npm install -g @vue/cli
    2.切换到要创建项目的目录，然后使用命令创建项目：vue create xxx
    3.启动项目：npm run serve
        main.js文件是整个项目的入口文件，执行npm run serve后最先执行


  注意：
    1.下载缓慢可配置npm淘宝镜像：npm config set registry https://registry.npm.taobao.org
    2.Vue脚手架隐藏了所有webpake相关的配置，若想查看具体的webpake配置，请执行：vue inspect > output.js（生成output.js文件，只能查看配置，修改无效）
*/

// 引入vue（省略了模板解析器的vue）
// 在vue文件夹的配置文件package.json中，"module": "dist/vue.runtime.esm.js"配置项控制ES6模块化引入的是vue文件夹下的哪个js文件
import Vue from 'vue'

// 引入完整版vue
// import Vue from 'vue/dist/vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false

/* 
	关于不同版本的Vue：
	
		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/

// 开启语法检查有没有使用的函数或变量会报错
// function Extend() {
  
// }

// 创建vue的实例对象--vm
new Vue({
  // 引入残缺版的vue，不能解析template配置项，配置具体的内容不能用template，vue调用render函数，传入一个函数用来创建具体的元素
  // package.json文件中配置项"vue-template-compiler": "^2.6.11"表示可以解析.vue文件中的template标签
  render: h => h(App)
  // render(createElement) {
  //   // 第一个参数是html中的内置元素，第二个参数是元素的具体内容
  //   return createElement('h1' , '你好啊');
  // }
  
  // template: `<h1>你好</h1>`
}).$mount('#app')
