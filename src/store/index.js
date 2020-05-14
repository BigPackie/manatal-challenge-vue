import Vue from 'vue';
import Vuex from 'vuex';
import fetchHeadlines from '../api/dummy-headlines';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headlines: [],
  },
  getters: {
    getHeadlines(state) {
      return state.headlines;
    },
  },
  mutations: {
    setHeadlines(state, headlines) {
      state.headlines = headlines;
    },
  },
  actions: {
    fetchAllHeadlines({ commit }) {
      console.log('fetching headlines action activated');
      return fetchHeadlines().then((headlines) => commit('setHeadlines', headlines));
    },
  },
  modules: {
  },
});
