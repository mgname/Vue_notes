<template>
  <div>
    <!-- 读取到state中的sum -->
    <!-- <h1>当前求和为：{{$store.state.sum}}</h1> -->
    <!-- 简化代码中的$store.state.sum，写为sum（在计算属性中进行处理） -->
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大10倍为：{{bigSum}}</h3>
    <h3>我在{{school}}，学习{{subject}}</h3>
    <h3 style="color:red">Person组件的总人数是：{{personList.length}}</h3>
    <!-- <h1>当前求和为：{{sum}}</h1> -->
    <!-- 收到的数据全部强制转换为数字 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- 由mapMutations、mapActions生成的方法需要传参 -->
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
  import {mapState , mapGetters , mapMutations , mapActions} from 'vuex'
  export default {
    name: 'Count',
    data() {
      return {
        n: 1,   // 用户选择的数字
        // 将共享数据交给vuex管理
        // sum: 0  // 当前的和
      }
    },
    computed: {
      // sum: 'sum'在js层面上没有简写方式，此处有简写方式（生成的计算属性名和真正读取出来的名一致）
      ...mapState(['sum' , 'school' , 'subject' , 'personList']),

      // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
      ...mapGetters(['bigSum'])
    },
    methods: {
      // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
      ...mapMutations({increment: 'JIA' , decrement: 'JIAN'}),

      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
      ...mapActions({incrementOdd: 'jiaOdd' , incrementWait: 'jiaWait'})
    },
    mounted() {
      // 帮助生成带有state的代码
      // const x = mapState({sum: 'sum' , school: 'school' , subject: 'subject'});
      // console.log(x);
    }
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>
