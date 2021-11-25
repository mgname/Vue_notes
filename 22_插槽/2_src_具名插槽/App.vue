<template>
  <div class="container">
    <Category title="美食">
      <!-- 组件标签体中的结构默认全放入一个默认插槽 -->
      <!-- <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <a href="https://www.baidu.com">更多美食</a> -->
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <a slot="footer" href="https://www.baidu.com">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game , index) in games" :key="index">{{game}}</li>
      </ul>
      <!-- 一个插槽中可以放多个标签结构 -->
      <!-- <a slot="footer" href="https://www.baidu.com">单机游戏</a>
      <a slot="footer" href="https://www.baidu.com">网络游戏</a> -->

      <!-- 为了写样式将两个a标签包裹在一个div中 -->
      <div class="foot" slot="footer">
        <a href="https://www.baidu.com">单机游戏</a>
        <a href="https://www.baidu.com">网络游戏</a>
      </div>
      
    </Category>

    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <!-- <div class="foot" slot="footer">
        <a href="https://www.baidu.com">经典</a>
        <a href="https://www.baidu.com">热门</a>
        <a href="https://www.baidu.com">推荐</a>
      </div>
      <h4 slot="footer">欢迎前来观影</h4> -->

      <!-- 将多个标签结构放入一个具名插槽中可以给他们最外侧加一个template标签，添加slot属性指定插槽即可（不用在最外侧加div增加标签结构，只用写一次slot属性） -->
      <!-- 使用了template标签，slot属性就有第二种写法（vue2.6） -->
      <!-- <template slot="footer">
        <div class="foot">
          <a href="https://www.baidu.com">经典</a>
          <a href="https://www.baidu.com">热门</a>
          <a href="https://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template> -->

      <!-- template标签slot属性第二种写法 -->
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.baidu.com">经典</a>
          <a href="https://www.baidu.com">热门</a>
          <a href="https://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category.vue'
  export default {
    name: "App",
    components: {Category},
    data() {
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《釜山行》']
      }
    },
  };
</script>

<style>
  .container , .foot {
    display: flex;
    justify-content: space-around;
  }

  video {
    width: 100%;
  }

  h4 {
    text-align: center;
  }
</style>