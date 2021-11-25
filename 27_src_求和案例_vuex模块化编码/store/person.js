import axios from 'axios'
import { nanoid } from 'nanoid';
// 人员管理相关的配置
export default {
  namespaced: true,
  actions: {
    addPersonWang(context , value) {
      if (value.name.indexOf('王') === 0) {
        context.commit('ADD_PERSON' , value);
      }else {
        alert('添加的人必须姓王！');
      }
    },
    // 从服务器获取人名
    addPersonServer(context) {
      // 免费API，每次访问都返回一句话
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response => {
          context.commit('ADD_PERSON' , {id: nanoid() , name: response.data});
        },
        error => {
          alert(error.message);
        }
      );
    }
  },
  mutations: {
    ADD_PERSON(state , value) {
      console.log('mutations中的ADD_PERSON被调用了');
      state.personList.unshift(value);
    }
  },
  state: {
    personList: [
      {id: '001' , name: '张三'}
    ]
  },
  getters: {
    // 此处的state不是store下的state，是personOptions配置项局部的state
    firstPersonName(state) {
      return state.personList[0].name;
    }
  }
};