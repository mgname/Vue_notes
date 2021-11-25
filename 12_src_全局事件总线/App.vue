<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
  import Student from './components/Student.vue'
  import School from './components/School.vue'
  export default {
    name: 'App',
    components: {Student , School},
    data() {
      return {
        msg: '你好啊！'
      }
    }
  }
</script>

<style>
  /* App中的样式是所有组件共用的，所以不用加scoped */
  .app {
    background-color: gray;
    padding: 5px;
  }
</style>