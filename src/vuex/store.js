import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'; // 引入某个store对象

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  }
});