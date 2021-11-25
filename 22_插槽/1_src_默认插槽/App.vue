<template>
  <div class="container">
    <!-- <Category title="美食" :listData="foods"> -->
    <Category title="美食">
      <!-- 使用组件标签体传递动态结构，插入组件结构中slot标签标记的位置，实现同样的组件展示不同的效果 -->
      <!-- 标签体中的结构是在App组件中解析后，再传入Category组件结构中，所以可以将样式写在App组件（结构和样式一起传入Category组件）中，也可以写在Category组件中（解析时没有样式，传入Category组件中有样式） -->
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </Category>

    <!-- <Category title="游戏" :listData="games"> -->
    <Category title="游戏">
      <ul>
        <li v-for="(game , index) in games" :key="index">{{game}}</li>
      </ul>
    </Category>

    <!-- <Category title="电影" :listData="films"> -->
    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
  .container {
    display: flex;
    justify-content: space-around;
  }

  video {
    width: 100%;
  }
</style>