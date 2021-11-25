<template>
  <div>
    <h1>{{msg}}</h1>
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
  // 引入一个混合（局部混合），混合就是复用配置
  // import {mixin , mixin2} from '../mixin'
  export default {
    name: 'Student',
    data() {
      return {
        msg: '我是一个学生',
        name: '张三',
        sex: '男'
      }
    },
    // mixins: [mixin , mixin2]
  }
</script>