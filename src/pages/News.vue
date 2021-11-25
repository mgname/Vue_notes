<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <!-- 想要当路由组件被销毁后，input输入框中的值不被清除，需要在展示News路由组件的router-view外包裹一层保持路由组件不被销毁的标签keep-alive -->
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
  export default {
    name: 'News',
    data() {
      return {
        opacity: 1
      }
    },
    /* beforeDestroy() {
      console.log('News组件即将被销毁');
      // 由于缓存了路由组件，路由组件不被销毁，定时器也一直不会停止
      clearInterval(this.timer);
    }, */
    /* mounted() {
      this.timer = setInterval(() => {
        this.opacity -= 0.01;
        if (this.opacity <= 0) this.opacity = 1;
      }, 16);
    } */

    
    // 路由组件独有的两个生命周期钩子函数
    // 激活（News组件展示时调用）
    activated() {
      console.log('News组件被激活了');
      this.timer = setInterval(() => {
        this.opacity -= 0.01;
        if (this.opacity <= 0) this.opacity = 1;
      }, 16);
    },
    // 失活（News组件不展示时调用）
    deactivated() {
      console.log('News组件失活了');
      clearInterval(this.timer);
    },
  }
</script>