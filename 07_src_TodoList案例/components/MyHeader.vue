<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
  </div>
</template>

<script>
  // nanoid采用分别暴露的方式，暴露出来的nanoid是一个函数，可以直接调用生成一串唯一字符串
  import {nanoid} from 'nanoid'
  export default {
    name: 'MyHeader',
    props: ['addTodo'],
    methods: {
      add(event) {
        // 输入框为空则退出
        if (!event.target.value.trim()) return alert('输入不能为空');
        // 将用户的输入包装成一个todo对象，id必须不同
        // const todoObj = {id: Date.now()};
        // const todoObj = {id: Math.random()};
        // uuid：生成全球唯一字符串编码，算法：目前所处地理位置+网卡Mac地址+内存条序列号...生成唯一字符串
        // nanoid：uuid的精简版
        // event.target.value 获取输入框的值
        const todoObj = {id: nanoid() , title: event.target.value , done: false};
        
        // 通知App组件去添加一个todo对象
        this.addTodo(todoObj);

        // 清空输入框
        event.target.value = '';
      }
    }
  }
</script>

<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }

</style>