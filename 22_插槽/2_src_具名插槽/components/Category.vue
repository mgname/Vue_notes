<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽，组件标签的标签体填充此处 -->
    <!-- 默认插槽（没有名字的插槽）使用多次是将组件标签中的结构多次展示 -->
    <!-- <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
    <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot> -->
    <slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
    <slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot>
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