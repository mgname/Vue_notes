<template>
  <div>
    <!-- 开了命名空间，就不需要自己找countAbout下的属性 -->
    <!-- <h1>当前求和为：{{countAbout.sum}}</h1> -->
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大10倍为：{{bigSum}}</h3>
    <h3>我在{{school}}，学习{{subject}}</h3>
    <h3 style="color:red">Person组件的总人数是：{{personList.length}}</h3>
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
      // store中的state存储的是countAbout和personAbout
      // 通过第一个参数指定分类，给每一个配置加一个namespaced配置项
      ...mapState('countAbout' , ['sum' , 'school' , 'subject']),
      ...mapState('personAbout' , ['personList']),

      // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
      ...mapGetters('countAbout' , ['bigSum'])
    },
    methods: {
      // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
      ...mapMutations('countAbout' , {increment: 'JIA' , decrement: 'JIAN'}),

      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
      ...mapActions('countAbout' , {incrementOdd: 'jiaOdd' , incrementWait: 'jiaWait'})
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
