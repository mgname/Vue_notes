<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
  // 组件交互相关的代码（数据、方法等）
  // Vue.extend可以省略，写成对象形式
  /* export default Vue.extend({
    data() {
      return {
        name: '荆楚理工',
        address: '荆门'  
      }
    },
    methods: {
      showName() {
        console.log('showName' , this);
      } 
    }
  }); */

  export default {
    name: 'School',
    data() {
      return {
        name: '荆楚理工',
        address: '荆门'  
      }
    },
    methods: {
      showName() {
        console.log('showName' , this);
      } 
    }
  };
</script>

<style>
  /* 组件的样式 */
  .demo {
    background-color: orange;
  }
</style>