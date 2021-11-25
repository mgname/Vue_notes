<template>
  <ul>
    <!-- 展示params参数 -->
    <li>消息编号：{{$route.params.id}}</li>
    <li>消息标题：{{$route.params.title}}</li>
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