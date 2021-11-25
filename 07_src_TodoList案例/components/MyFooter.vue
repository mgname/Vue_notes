<template>
  <!-- total不为零则显示底部 -->
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <!-- v-model绑定的是计算属性，不是props属性，可以更改 -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <!-- <span> <span>已完成{{doneTotal}}</span> / 全部{{todos.length}} </span> -->
    <span> <span>已完成{{doneTotal}}</span> / 全部{{total}} </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name: 'MyFooter',
    props: ['todos' , 'checkAllTodo' , 'clearAllTodo'],
    computed: {
      total() {
        return this.todos.length;
      },
      doneTotal() {
        // 计算已完成的个数
        // let i = 0;
        // this.todos.forEach(todo => {
        //   if(todo.done) i++;
        // });
        // return i;

        // reduce第一个参数是回调函数，第二个参数是第一个回调函数的第一个参数的初始值，返回值为最后一次执行回调的返回值
        // 回调函数的第一个参数是每次执行函数的返回值，第二个参数是数组的元素
        /* const x = this.todos.reduce((pre , current) => {
          return pre + (current.done ? 1 : 0);
        } , 0); */

        return this.todos.reduce((pre , currentTodo) => pre + (currentTodo.done ? 1 : 0) , 0);
      },
      isAll: {
        get() {
          return this.total === this.doneTotal && this.total > 0;
        },
        set(value) {
          this.checkAllTodo(value);
        }
      }
    },
    methods: {
      /* checkAll(e) {
        this.checkAllTodo(e.target.checked);
      } */
      clearAll() {
        this.clearAllTodo();
      }
    }
  }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>