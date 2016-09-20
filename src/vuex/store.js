import Vue from 'vue'
import Vuex from 'vuex'
// 调用vuex
Vue.use(Vuex);
const state={
  // 存放初始状态
  count:0
}
const mutations={
  //变更函数
  INCREMENT(state,amount){
    state.count=state.count+amount
  },
  jian(state,amount){
    state.count=state.count-amount
  }
}
export default new Vuex.Store({state,mutations})
