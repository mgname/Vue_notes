<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中我们使用a标签的href属性实现页面的跳转（多页面应用） -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- vue-router提供的特殊标签：导航区点击后切换路径，由路由器监测路径的改变来控制页面组件的变换 -->
          <!-- Vue中借助router-link标签实现路由的切换 -->
          <!-- router-link标签最终通过vue-router转为a标签，所以页面结构不被破坏 -->
          <!-- active-class属性设置元素被激活时的样式 -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 此处到底展示什么组件，得看用户点击的是哪个导航项 -->
            <!-- 指定路由规则对应组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
  };
</script>