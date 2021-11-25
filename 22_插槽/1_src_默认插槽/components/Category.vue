<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 使用v-show让相同的组件展示不同的效果 -->
    <!-- <ul v-show="title !== '美食'">
      <li v-for="(item , index) in listData" :key="index">{{item}}</li>
    </ul>
    <img v-show="title === '美食'" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt=""> -->
    
    <!-- 定义一个插槽，组件标签的标签体填充此处 -->
    <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
  export default {
    name: 'Category',
    props: ['title']
    // props: ['listData' , 'title']
  }
</script>

<style>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }

  h3 {
    text-align: center;
    background-color: orange;
  }

  img {
    width: 100%;
  }
</style>