<template>
  <ul>
    <li>消息编号：{{$route.query.id}}</li>
    <li>消息标题：{{$route.query.title}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'Detail',
    mounted() {
      // this.$route能够得到当前组件相关的路由配置信息，this.$route.query能获取query参数
      console.log(this.$route);
    }
  }
</script>