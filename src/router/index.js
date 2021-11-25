// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建一个路由器
const router = new VueRouter({
  routes: [
    {
      // 命名路由，跳转时可简化编码
      name: 'guanyu',
      path: '/about',
      component: About,
      meta: {title: '关于'}
    },
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
      meta: {title: '主页'},
      children: [
        {
          name: 'xinwen',
          path: 'news',
          component: News,
          // 自定义属性为true表示需要权限校验
          meta: {isAuth: true , title: '新闻'}
        },
        {
          name: 'xiaoxi',
          path: 'message',
          component: Message,
          meta: {isAuth: true , title: '消息'},
          children: [
            {
              name: 'xiangqing',
              // 在路径后加占位符，用来接收params参数
              path: 'detail/:id/:title',
              component: Detail,
              meta: {isAuth: true , title: '详情'},

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

// 暴露路由器之前先跟路由器商量一个路由守卫
// 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to , from , next) => {
  console.log('前置路由守卫' , to , from);

  // 每个路由的meta中配置title属性，路由更改页签标题随之更改（写在此处即使被拦截路径不变，标题还是会变，因为是在路由切换之前被调用，如果写在前置路由守卫中需要每次放行前都调用一遍更改标题）
  // document.title = to.meta.title || 'wy系统';   // 首页标题根据package.json中项目名而定，需将首页标题改为wy系统才能一致不抖动

  // 不调用next，路由守卫拦住所有东西，在路由切换之前被拦住，所以路径不变
  // 判断什么时候放行，什么时候拦截
  // if ( to.path === '/home/news' || to.path === '/home/message' ) {

  // 这种判断过于麻烦，可以给每个路由配置里面加一个特殊属性（配置项不能随意加，可以加在meta（路由元信息）配置项中），用于标识本路由是否需要进行全新的校验
  // if ( to.name === 'xinwen' || to.name === 'xiaoxi' ) {
  if ( to.meta.isAuth ) {   // 判断是否需要权限（简单，只需要给需要校验权限的路由配置此属性）
    if ( localStorage.getItem('school') === 'atguigu' ) {
      next();
    }else {
      alert('学校名不对，无权限查看！');
    }
  }else {
    next();
  }
});


// 全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to , from) => {
  console.log('后置路由守卫' , to , from);
  document.title = to.meta.title || 'wy系统';
});


export default router;