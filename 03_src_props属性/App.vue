<template>
  <div>
    <Student name="李四" sex="女" age="24"/>
    <!-- v-bind绑定的数据，21+1是表达式 -->
    <Student name="王五" sex="男" :age="21+1"/>
  </div>
</template>

<script>
  import Student from './components/Student.vue'
  export default {
    name: 'App',
    components: {Student}
  }
</script>