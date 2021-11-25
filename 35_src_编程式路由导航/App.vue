<template>
  <div>
    <div class="row">
      <!-- 通过引入注册，亲自写组件标签的组件是一般组件（components文件夹放一般组件）；靠路由规则匹配出来，由路由器渲染出来的组件是路由组件（pages文件夹放路由组件） -->
      <!-- 切换掉的路由组件被销毁掉了 -->
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 通过命名路由跳转 -->
          <!-- 路由对历史记录的影响：默认是push模式，使用replace属性开启replace模式（将栈顶浏览记录替换掉） -->
          <router-link replace class="list-group-item" active-class="active" :to="{name: 'guanyu'}">About</router-link>
          <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from './components/Banner.vue'
  export default {
    name: "App",
    components: {Banner}
  };
</script>