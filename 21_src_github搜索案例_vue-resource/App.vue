<template>
  <div class="container">
    <Search/>
    <List/>
  </div>
</template>

<script>
  /*  
    引入第三方（公共）样式方法
      - 在assets文件夹中创建文件，通过import引入文件
      - 在public文件夹中创建文件，在页面中引入文件
  */
  // 通过import引入样式，脚手架会做非常严格的检查，.css中只要用到了不存在的资源就会报错
  // import './assets/css/bootstrap.css'
  import Search from './components/Search.vue'
  import List from './components/List.vue'
  export default {
    name: "App",
    components: {Search , List}
  };
</script>