<template>
  <ul>
    <!-- 想要当路由组件被销毁后，input输入框中的值不被清除，需要在展示News路由组件的router-view外包裹一层保持路由组件不被销毁的标签keep-alive -->
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
  export default {
    name: 'News',
    beforeDestroy() {
      console.log('News组件即将被销毁');
    }
  }
</script>