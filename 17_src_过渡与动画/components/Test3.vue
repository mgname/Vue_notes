<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 第三方css动画库Animate.css -->
    <transition-group 
      appear
      name="animate__animated animate__bounce" 
      enter-active-class="animate__rubberBand"
      leave-active-class="animate__backInUp"
    >
      <h1 v-show="!isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">你好啊！</h1>
    </transition-group> 
  </div>
</template>

<script>
  // 引入样式，直接引人import '路径'
  import 'animate.css';
  export default {
    name: 'Test',
    data() {
      return {
        isShow: true
      }
    },
  }
</script>

<style scoped>
  h1 {
    background-color: orange;
  }

</style>