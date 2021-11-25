// 该文件用于创建Vuex中最为核心的store，也可以在src文件夹下创建vuex文件夹再在vuex文件夹下创建store.js文件

// store为了管理Actions、Mutations、State而出现

import Vue from 'vue';
// 引入Vuex，用于new出一个store对象
import Vuex from 'vuex'

import countOptions from './count'
import personOptions from './person'


// 应用Vuex插件
Vue.use(Vuex);


// 创建并暴露store
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions
  }
});