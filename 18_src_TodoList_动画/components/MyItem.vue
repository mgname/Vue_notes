<template>
  <!-- 给整个todo添加动画效果 -->
  <!-- <transition name="todo" appear> -->
    <li>
      <label>
        <!-- 让此标签动态的拥有checked属性 -->
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <!-- 
          v-model双向绑定也能实现功能（初始化勾选、改变勾选实时更新done），但是不推荐，因为修改了props，
          虽然修改todo.done是修改对象属性，Vue监测不到，Vue只能监测到整个属性直接被改，但是如果Vue监测到修改了props中的属性会报错
        -->
        <!-- <input type="checkbox" v-model="todo.done"/> -->
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input 
          type="text" 
          v-show="todo.isEdit" 
          :value="todo.title" 
          @blur="handleBlur(todo , $event)"
          ref="inputTitle"
        >
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
      <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
  <!-- </transition>  -->
</template>

<script>
  import pubsub from 'pubsub-js';
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
          // this.$bus.$emit('deleteTodo' , id);

          // 发布消息并传递数据
          pubsub.publish('deleteTodo' , id);
        }
      },
      // 编辑
      handleEdit(todo) {
        if (Object.prototype.hasOwnProperty.call(todo , 'isEdit')) {
          todo.isEdit = true;

        }else {
          // todo身上没有isEdit
          this.$set(todo , 'isEdit' , true);
        }
        // 获取焦点（此时handleEdit还没执行完，还没重新解析页面，input框还没显示不能获取焦点）
        /* setTimeout(() => {
          this.$refs.inputTitle.focus();
        }); */
        // $nextTick(fun)所指定的回调函数会在DOM节点更新之后再执行
        this.$nextTick(function () {
          this.$refs.inputTitle.focus();
        });
      },
      // 失去焦点回调（真正执行修改逻辑）
      handleBlur(todo , e) {
        todo.isEdit = false;
        if (!e.target.value.trim()) return alert('输入不能为空！');
        this.$bus.$emit('updateTodo' , todo.is , e.target.value);
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

  /* .todo-enter-active {
    animation: demo 1s;
  }

  .todo-leave-active {
    animation: demo 1s reverse;
  }

  @keyframes demo {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0px);
    }
  } */
</style>