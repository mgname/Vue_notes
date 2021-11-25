<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "App",
    methods: {
      /*  
        解决跨域问题的办法（跨域问题是服务器不能处理别的前端网页的js代码，服务器会有响应，但浏览器会发现跨域而不把数据交给网页）
          1、cors：服务器端设置响应头来解决
          2、jsonp：通过script标签的src属性不受同源策略影响来解决，但只能处理get请求
          3、配置代理服务器，代理服务器作为中间服务器，协议主机端口与前端页面保持一致（不存在跨域问题），前端页面向它发送请求，它再向目标服务器发送请求，
            目标服务器给它返回数据（服务器传数据用http请求，不受同源策略影响），它再返回到前端页面
              - 代理服务器开启方法：
                1)nginx开启代理服务器
                2)借助Vue脚手架（vue-cli）开启代理服务器：对脚手架进行配置，需要配置vue.config.js文件

              - 注意：
                当前端页面请求的资源代理服务器有（public根文件夹中有什么，代理服务器中就有什么），则不会将请求转发给目标服务器
      */
      getStudents() {
        // axios.get('http://localhost:5000/students').then(
        // 开启了代理服务器，向代理服务器发请求（增加了一个/api请求前缀）
        axios.get('http://localhost:8080/api/students').then(
          response => {
            // response是响应对象，response.data获取响应数据
            console.log('请求成功了' , response.data);
          },
          error => {
            console.log('请求失败了' , error.message);
          }
        );
      },
      getCars() {
        axios.get('http://localhost:8080/demo/cars').then(
          response => {
            // response是响应对象，response.data获取响应数据
            console.log('请求成功了' , response.data);
          },
          error => {
            console.log('请求失败了' , error.message);
          }
        );
      }
    }
  };
</script>
