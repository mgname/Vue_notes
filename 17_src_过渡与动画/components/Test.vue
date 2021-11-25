<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 想让谁有动画效果，就把谁用transition标签包裹起来 -->
    <!-- transition 可以指定名字name -->
    <!-- appear为true指定元素一出现就有动画，true是表达式，需要在appear前加:，可省略直接写appear -->
    <!-- <transition name="hello" :appear="true"> -->
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition> 
  </div>
</template>

<script>
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

  /* 进入动画时激活的样式（默认名）,transition 没指定name */
  /* .v-enter-active {
    animation: demo 1s;
  } */
  /* transition 指定name为hello */
  .hello-enter-active {
    animation: demo 1s;
  }

  /* 离开动画时激活的样式（默认名） */
  /* .v-leave-active {
    animation: demo 1s reverse;
  } */
  .hello-leave-active {
    animation: demo 1s reverse;
  }

  @keyframes demo {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>