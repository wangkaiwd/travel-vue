import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  mutations,
  getters: {
    doubleCity(state) {
      return state.city + ' ' + state.city;
    }
  }
});

export default store;