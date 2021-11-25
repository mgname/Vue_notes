<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- 需要把路由配置中的路径设置成可以传参的路径 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

        <!-- 用name: 'xiangqing'代替path: '/home/message/detail' -->
        <!-- 跳转路由并携带params参数，to的对象写法，对象中的配置不允许用path设置路径，必须使用name命名路由 -->
        <router-link :to="{
          name: 'xiangqing',
          params: {
            id: m.id,
            title: m.title
          }
        }">
          {{m.title}}
        </router-link>
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
  }
</script>