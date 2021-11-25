<template>
  <div>
    <!-- 测试插件中的过滤器 -->
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="test">点我测试Vue原型上的hello方法</button>
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
    },
    methods: {
      test() {
        // 从vc找到Vue原型上的方法
        this.hello();
      }
    }
  }
</script>