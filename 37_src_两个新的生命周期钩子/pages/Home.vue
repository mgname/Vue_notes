<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- 路由链接是一个子级路由，必须带父亲的路径 -->
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- keep-alive标签保持路由组件不被销毁，include说明缓存哪个路由组件，不被缓存的路由组件会被销毁（不写此属性则缓存所有路由组件） -->
      <!-- include的值是组件名，组件的name属性配置的名字 -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    /* mounted() {
      console.log('Home组件挂载完毕');
    },
    beforeDestroy() {
      console.log('Home组件即将被销毁');
    } */
  }
</script>