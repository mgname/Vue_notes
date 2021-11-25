<template>
  <div>
    <Student/>
    <hr>
    <School/>
  </div>
</template>

<script>
  // 样式跟组件引入顺序有关
  // 脚手架解析Vue文件时，先引入，再读取配置项，最后解析模板
  import Student from './components/Student.vue'
  import School from './components/School.vue'
  export default {
    name: 'App',
    components: {Student , School}
  }
</script>

<style>
  /* App中的样式是所有组件共用的，所以不用加scoped */
  .title {
    color: red;
  }
</style>