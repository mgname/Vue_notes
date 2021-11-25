// 该文件用于创建Vuex中最为核心的store，也可以在src文件夹下创建vuex文件夹再在vuex文件夹下创建store.js文件

// store为了管理Actions、Mutations、State而出现

import Vue from 'vue';
// 引入Vuex，用于new出一个store对象
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex);

// 准备actions —— 用于响应组件中的动作
const actions = {
  // 传递的第一个实参上下文对象，相当于一个miniStore，包含了部分store中的方法、属性
  // actions中的jia、jian方法直接调用了mutations中的JIA、JIAN，没有处理其他的业务逻辑，可以去掉，则不能继续在组件中dispatch，可以直接在组件中commit联系mutations修改数据
  /* jia(context , value) {
    // console.log('actions中的jia被调用了');
    context.commit('JIA' , value);
  },
  jian(context , value) {
    // console.log('actions中的jian被调用了');
    context.commit('JIAN' , value);
  }, */
  jiaOdd(context , value) {
    // console.log('actions中的jiaOdd被调用了');
    if(context.state.sum % 2) {
      context.commit('JIA' , value);
    }
  },
  jiaWait(context , value) {
    // console.log('actions中的jiaWait被调用了');
    setTimeout(() => {
      context.commit('JIA' , value);
    }, 500);
  },
  
};
// 准备mutations —— 用于操作数据（state）
const mutations = {
  // mutations中的方法大写
  JIA(state , value) {
    console.log('mutations中的JIA被调用了');
    state.sum += value;
  },
  JIAN(state , value) {
    console.log('mutations中的JIAN被调用了');
    state.sum -= value;
  }
};
// 准备state —— 用于存储数据
const state = {
  sum: 0,  // 当前的和
  school: '荆楚理工',
  subject: '前端'
};
// 准备getters —— 用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum*10;
  }
};


// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});

// 暴露store
// export default store;