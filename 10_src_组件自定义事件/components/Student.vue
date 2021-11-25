<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>当前求和为：{{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑test事件</button>
    <!-- 一个组件被销毁了，它身上的自定义事件都会失效 -->
    <button @click="death">销毁当前Student组件的实例（vc）</button>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        name: '张三',
        sex: '男',
        number: 0
      }
    },
    methods: {
      add() {
        console.log('add回调被调用了');
        this.number++;
      },
      sendStudentName() {
        // 触发Student组件实例身上的test事件，
        // 第一个实参是触发的事件名，第二个实参以后是传递给事件回调函数的实参
        this.$emit('test' , this.name , 1 , 2);
        // this.$emit('demo');
      },
      unbind() {
        // 在组件实例对象上解绑
        this.$off('test');    // 解绑一个自定义事件
        // this.$off(['test' , 'demo']);    // 解绑多个自定义事件
        // this.$off();    // 解绑所有的自定义事件
      },
      death() {
        this.$destroy();  // 销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效
      }
    }
  }
</script>

<style lang="less" scoped>
  .student {
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
  }
</style>