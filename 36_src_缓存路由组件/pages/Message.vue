<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link :to="{
          name: 'xiangqing',
          params: {
            id: m.id,
            title: m.title
          }
        }">
          {{m.title}}
        </router-link>
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    data() {
      return {
        messageList: [
          {id: '001' , title: '消息001'},    
          {id: '002' , title: '消息002'},    
          {id: '003' , title: '消息003'},    
        ]
      }
    },
    methods: {
      // 编程式路由导航：不借助router-link的路由导航
      // 灵活控制往哪个路由跳转并携带参数
      pushShow(m) {
        this.$router.push({
          name: 'xiangqing',
          params: {
            id: m.id,
            title: m.title
          }
        });
      },
      replaceShow(m) {
        this.$router.replace({
          name: 'xiangqing',
          params: {
            id: m.id,
            title: m.title
          }
        });
      },
    },
    beforeDestroy() {
      console.log('Message组件即将被销毁');
    }
  }
</script>