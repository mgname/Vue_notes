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
  routes: [
    {
      // 命名路由，跳转时可简化编码
      name: 'guanyu',
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News,
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              name: 'xiangqing',
              // 在路径后加占位符，用来接收params参数
              path: 'detail/:id/:title',
              component: Detail,

              // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件（Detail组件需要用props接收）
              // 缺点：只能传递死数据
              // props: {a: 1 , b: 'hello'}

              // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数（不能处理query参数），以props的形式传给Detail组件（Detail组件需要用props接收）
              // props: true

              // props的第三种写法，值为函数，Vue-Router调用此回调函数会传递一个$route，可以用来获取params、query参数
              props($route) {
                // 返回值必须是对象，每一组key-value会以props的形式传递给Detail组件
                return {
                  id: $route.params.id , 
                  title: $route.params.title
                };
              }
              // 解构赋值的连续写法
              /* props({params:{id , title}}) {
                return {id, title};
              } */
            }
          ]
        },
      ]
    },
  ]
});