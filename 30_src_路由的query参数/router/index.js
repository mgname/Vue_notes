// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
export default new VueRouter({
  // 配置多组路由，每一个路由都是一个配置对象
  routes: [
    {
      // 一级路由
      path: '/about',
      component: About
    },
    {
      // 一级路由
      path: '/home',
      component: Home,
      // 配置子路由
      children: [
        {
          // 子路由路径不写/
          path: 'news',
          component: News,
        },
        {
          // 子路由路径不写/
          path: 'message',
          component: Message,
          children: [
            {
              path: 'detail',
              component: Detail,
            }
          ]
        },
      ]
    },
  ]
});