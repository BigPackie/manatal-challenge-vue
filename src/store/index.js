import Vue from 'vue';
import Vuex from 'vuex';
import fetchHeadlines from '../api/dummy-headlines';
import fetchSources from '../api/dummy-sources';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headlines: [],
    sources: [],
  },
  getters: {
    headline: (state) => (id) => state.headlines.find((item) => item.customId === id),
  },
  mutations: {
    setHeadlines(state, headlines) {
      state.headlines = headlines;
    },
    setSources(state, sources) {
      state.sources = sources;
    },
    changeHeadlineTitle(state, { id, newTitle }) {
      const headline = state.headlines.find((item) => item.customId === id);
      if (!headline) {
        console.log('Headline not found');
        return;
      }
      headline.title = newTitle;
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
    changeHeadlineTitle({ commit }, payload) {
      commit('changeHeadlineTitle', payload);
    },
    fetchAllSources({ commit }) {
      console.log('fetching sources action activated');
      return fetchSources().then((sources) => {
        commit('setSources', sources);
      });
    },
  },
  modules: {
  },
});
