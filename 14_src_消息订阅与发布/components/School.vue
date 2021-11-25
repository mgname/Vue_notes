<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  // 引入第三方库pubsub-js实现消息订阅与发布
  import pubsub from 'pubsub-js'
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
      // School组件一挂载完毕，就订阅一个hello消息
      // 回调函数第一个参数是消息名，后面的参数才是传递的数据
      this.pubId = pubsub.subscribe('hello' , (msgName , data) => {
        console.log('有人发布了hello消息，hello消息的回调执行了' , msgName , data);
      });
    },
    beforeDestroy() {
      // 通过id取消取消订阅hello，unsubscribe参数为订阅id（subscribe返回一个订阅消息的id）
      pubsub.unsubscribe(this.pubId);
    }
  }
</script>

<style scoped>
  .school {
    background-color: skyblue;
    padding: 5px;
  }
</style>