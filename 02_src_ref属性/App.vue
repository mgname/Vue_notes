<template>
  <div>
    <!-- <h1 v-text="msg" id="title"></h1> -->
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <!-- 自闭和只能用在脚手架环境，非脚手架环境自闭和会导致后续组件不能渲染 -->
    <School ref="sch"/>
    <!-- <School/>
    <School/> -->
  </div>
</template>

<script>
  // 引入School组件
  import School from './components/School.vue'
  export default {
    name: 'App',
    components: {School},
    data() {
      return {
        msg: '欢迎学习Vue'
      }
    },
    methods: {
      showDOM() {
        // 通过原生js找到此DOM元素
        // console.log(document.getElementById('title'));
        console.log(this.$refs.title);  // 真实DOM元素
        console.log(this.$refs.btn);    // 真实DOM元素
        
        // 如果给组件标签一个id来获取的话，获取的是组件所对应的完整DOM结构，将id放到DOM结构的根元素上
        console.log(this.$refs.sch);    // School组件的实例对象（vc）
      }
    }
  }
</script>