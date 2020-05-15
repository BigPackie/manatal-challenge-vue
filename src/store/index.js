import Vue from 'vue';
import Vuex from 'vuex';
import fetchHeadlines from '../api/dummy-headlines';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headlines: [],
  },
  getters: {
    headline: (state) => (id) => state.headlines.find((item) => item.customId === id),
  },
  mutations: {
    setHeadlines(state, headlines) {
      state.headlines = headlines;
    },
  },
  actions: {
    fetchAllHeadlines({ commit }) {
      console.log('fetching headlines action activated');
      return fetchHeadlines().then((headlines) => {
        const enrichedHeadlines = headlines.map(
          (headline, index) => ({ customId: index, ...headline }),
        );
        commit('setHeadlines', enrichedHeadlines);
      });
    },
  },
  modules: {
  },
});
