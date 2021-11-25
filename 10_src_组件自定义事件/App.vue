<template>
  <div class="app">
    <h1>{{msg}}，学生姓名是：{{studentName}}</h1>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- 想触发此test事件找Student组件的实例对象，App模板解析到下面这一行，立即给Student组件实例对象绑定事件 -->
    <!-- <Student v-on:test="getStudentName"/> -->
    <!-- 触发时只能触发一次事件 -->
    <!-- <Student v-on:test.once="getStudentName"/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <!-- 通过ref拿到组件实例对象能更灵活的给实例对象绑定事件 -->
    <!-- native修饰符，在组件上绑定原生DOM事件，否则组件全当做自定义事件处理，使用修饰符将此事件交给Student组件模板中最外侧的元素 -->
    <!-- <Student ref="student" @click.native="show"/> -->
    <Student ref="student"/>

    <hr>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>
  </div>
</template>

<script>
  // 样式跟组件引入顺序有关
  // 脚手架解析Vue文件时，先引入，再读取配置项，最后解析模板
  import Student from './components/Student.vue'
  import School from './components/School.vue'
  export default {
    name: 'App',
    components: {Student , School},
    data() {
      return {
        msg: '你好啊！',
        studentName: ''
      }
    },
    methods: {
      getSchoolName(name) {
        console.log('App收到了学校名：' + name);
      },
      // ...params表示剩下的实参都在params数组中
      getStudentName(name , ...params) {
        console.log('App收到了学生名：' , name , params);
        this.studentName = name;
      },
      m1() {
        console.log('demo事件被触发了！');
      },
      show() {
        alert('123');
      }
    },
    // 当前组件挂载完毕时调用
    mounted() {
      // this.$refs.student是Student的组件实例对象，直接给组件实例对象添加自定义事件
      // getStudentName方法在methods中，普通函数写在methods中，getStudentName中的this是组件实例对象，与Vue规定的谁触发this就是谁冲突，但以methods中的方法为主
      this.$refs.student.$on('test' , this.getStudentName);    // 绑定自定义事件
      /* this.$refs.student.$on('test' , function (name , ...params) {   
        // 普通函数作为回调，谁触发的test事件，此回调函数中的this就是谁，此时是Student实例对象触发的test事件
        console.log(this);
        console.log('App收到了学生名：' , name , params);
      }); */
      /* this.$refs.student.$on('test' , (name , ...params) => {   
        // 箭头函数作为回调，没有自己的this向外找，生命周期勾子写成普通函数的this是当前组件的实例对象
        console.log(this);
        console.log('App收到了学生名：' , name , params);
      }); */


      this.$refs.student.$on('demo' , this.m1);    // 绑定自定义事件
      // $once事件只触发一次
      // this.$refs.student.$once('test' , this.getStudentName);   // 绑定自定义事件（一次性）
    }
  }
</script>

<style>
  /* App中的样式是所有组件共用的，所以不用加scoped */
  .app {
    background-color: gray;
    padding: 5px;
  }
</style>