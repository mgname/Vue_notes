<template>
  <div class="container">
    <!-- App组件是Category组件的使用者，数据也在App组件中 -->
    <!-- <Category title="游戏">
      <ul>
        <li v-for="(game , index) in games" :key="index">{{game}}</li>
      </ul>
    </Category> -->

    <!-- 数据在Category组件中，根据数据生成的结构由Category的使用者App决定，让App得到Category中的数据games -->
    <Category title="游戏">
      <!-- 传递的结构外侧必须包裹一层template，才能收到插槽传递过来的数据 -->
      <!-- 不是插槽传递games此处接收就要定义为games的 -->
      <template scope="obj">
        <!-- 接收一个obj对象，对象中将插槽传递过来的数据封装为一个个键值对 -->
        <!-- {{obj.games}} -->
        <ul>
          <li v-for="(game , index) in obj.games" :key="index">{{game}}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 支持es6语法，解构赋值 -->
      <template scope="{games}">
        <ol>
          <li style="color:red" v-for="(game , index) in games" :key="index">{{game}}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 新的API：slot-scope -->
      <template slot-scope="{games}">
        <h4 v-for="(game , index) in games" :key="index">{{game}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category.vue'
  export default {
    name: "App",
    components: {Category},
    /* data() {
      return {
				games:['红色警戒','穿越火线','劲舞团','超级玛丽']
      }
    }, */
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