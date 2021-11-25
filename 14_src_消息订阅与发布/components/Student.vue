<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <!-- 实现兄弟组件之间通信（把Student组件中的学生名交给School组件） -->
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'

  export default {
    name: 'Student',
    data() {
      return {
        name: '张三',
        sex: '男'
      }
    },
    methods: {
      sendStudentName() {
        // 发布一个hello消息
        pubsub.publish('hello' , 666);
      }
    }
  }
</script>

<style lang="less" scoped>
  .student {
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
  }
</style>