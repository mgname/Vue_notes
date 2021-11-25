<template>
  <div>
    <!-- 读取到state中的sum -->
    <!-- <h1>当前求和为：{{$store.state.sum}}</h1> -->
    <!-- 简化代码中的$store.state.sum，写为sum（在计算属性中进行处理） -->
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大10倍为：{{bigSum}}</h3>
    <h3>我在{{school}}，学习{{subject}}</h3>
    <!-- <h1>当前求和为：{{sum}}</h1> -->
    <!-- 收到的数据全部强制转换为数字 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  import {mapState , mapGetters} from 'vuex'
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
      // 靠程序员亲自去写计算属性
      /* sum() {
        return this.$store.state.sum;
      },
      school() {
        return this.$store.state.school;
      },
      subject() {
        return this.$store.state.subject;
      }, */

      // 借助mapState生成计算属性，从state中读取数据（对象写法）
      // ...mapState({sum: 'sum' , school: 'school' , subject: 'subject'}),

      // 借助mapState生成计算属性，从state中读取数据（数组写法）
      // sum: 'sum'在js层面上没有简写方式，此处有简写方式（生成的计算属性名和真正读取出来的名一致）
      ...mapState(['sum' , 'school' , 'subject']),

      /* ************************************************************* */
      /* bigSum() {
        return this.$store.getters.bigSum;
      } */

      // 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
      // ...mapGetters({bigSum: 'bigSum'})
      // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
      ...mapGetters(['bigSum'])
    },
    methods: {
      increment() {
        // this.sum += this.n;
        // jia、jian在actions中没有处理业务逻辑，可以直接在组件中commit修改数据
        this.$store.commit('JIA' , this.n);
      },
      decrement() {
        // this.sum -= this.n;
        this.$store.commit('JIAN' , this.n);
      },
      incrementOdd() {
        /* if (this.sum % 2) {
          this.sum += this.n;
        } */
        /* if (this.$store.state.sum % 2) {
          this.$store.dispatch('jia' , this.n);
        } */

        // 将业务逻辑写在actions中
        this.$store.dispatch('jiaOdd' , this.n);
      },
      incrementWait() {
        /* setTimeout(() => {
          // this.sum += this.n;
          this.$store.dispatch('jia' , this.n);
        }, 500); */

        // 将业务逻辑写在actions中
        this.$store.dispatch('jiaWait' , this.n);
      }
    },
    mounted() {
      // 帮助生成带有state的代码
      const x = mapState({sum: 'sum' , school: 'school' , subject: 'subject'});
      console.log(x);
    }
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>
