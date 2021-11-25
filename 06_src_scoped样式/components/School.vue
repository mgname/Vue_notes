<template>
  <div class="demo">
    <h2 class="title">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        name: '荆楚理工学院',
        address: '荆门'
      }
    }
  }
</script>

<style scoped>
  /* scoped属性限制本文件中的样式只负责本文件的模板 */
  /* 实现方法：给最外层的div加一个特殊的标签属性data-v-xxx（随机生成数），配合标签属性选择器 */
  .demo {
    background-color: skyblue;
  }
</style>