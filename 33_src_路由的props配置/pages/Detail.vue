<template>
  <ul>
    <!-- <li>消息编号：{{$route.params.id}}</li> -->
    <!-- 用计算属性简化模板里的读取参数代码更复杂了；可以用路由的props配置让路由组件更方便的收到参数 -->
    <li>消息编号：{{id}}</li>
    <li>消息标题：{{title}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'Detail',
    props: ['id' , 'title'],
    /* computed: {
      id() {
        return this.$route.params.id;
      },
      title() {
        return this.$route.params.title;
      }
    }, */
  }
</script>