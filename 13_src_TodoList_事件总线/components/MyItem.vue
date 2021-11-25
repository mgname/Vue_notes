<template>
  <li>
    <label>
      <!-- 让此标签动态的拥有checked属性 -->
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <!-- 
        v-model双向绑定也能实现功能（初始化勾选、改变勾选实时更新done），但是不推荐，因为修改了props，
        虽然修改todo.done是修改对象属性，Vue监测不到，Vue只能监测到整个属性直接被改，但是如果Vue监测到修改了props中的属性会报错
      -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
  export default {
    name: 'MyItem',
    // 声明接收todo对象
    props: ['todo'],
    methods: {
      // 勾选or取消勾选
      handleCheck(id) {
        // 通知App组件将对应的todo对象的done值取反
        // this.checkTodo(id);
        this.$bus.$emit('checkTodo' , id);
      },

      // 删除
      handleDelete(id) {
        if (confirm('确定删除吗？')) {
          // 通知App组件删除对应的todo对象
          // this.deleteTodo(id);
          this.$bus.$emit('deleteTodo' , id);
        }
      }
    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: #ddd;
  }

  li:hover button {
    display: block;
  }
</style>