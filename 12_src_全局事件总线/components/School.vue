<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'School',
    props: ['getSchoolName'],
    data() {
      return {
        name: '荆楚理工学院',
        address: '荆门'
      }
    },
    mounted() {
      // 测试在School组件实例对象中能找到Vue原型上的$bus
      console.log('School' , this.$bus);

      // 测试公共组件$on方法
      this.$bus.$on('hello' , (data) => {
        console.log('我是School组件，收到了数据：' + data);
      });
    },
    // 在此组件被销毁之前解绑公共组件$bus身上的事件
    beforeDestroy() {
      this.$bus.$off('hello');
    }
  }
</script>

<style scoped>
  .school {
    background-color: skyblue;
    padding: 5px;
  }
</style>