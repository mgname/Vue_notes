<template>
  <div>
    <h1>{{msg}}</h1>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  // 引入一个混合（局部混合）
  // 混合时，如果data、methods配置项中的属性名重名，则使用自己写的属性
  // 特殊：生命周期函数如果重名则都调用，混合中的生命周期函数先执行
  // import {mixin , mixin2} from '../mixin'
  export default {
    name: 'School',
    data() {
      return {
        msg: '我是一个学生',
        name: '荆楚理工',
        address: '荆门'
      }
    },
    // mixins: [mixin , mixin2]
  }
</script>