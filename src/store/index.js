import Vue from 'vue';
import Vuex from 'vuex';
import fetchHeadlines from '../api/dummy-headlines';
import fetchSources from '../api/dummy-sources';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headlines: [],
    sources: [],
    filteredSources: [],
    routeHistory: [],
  },
  getters: {
    headline: (state) => (id) => state.headlines.find((item) => item.customId === id),
    filteredHeadlines: (state) => state.headlines
      .filter((item) => state.filteredSources
        .find((src) => item.source.id === src.id || item.source.name === src.name)),
  },
  mutations: {
    logRoute(state, { path, title }) {
      state.routeHistory.unshift(
        {
          path,
          title,
          dateTime: new Date(),
        },
      );
    },
    setHeadlines(state, headlines) {
      state.headlines = headlines;
    },
    setSources(state, sources) {
      state.sources = sources;
    },
    setFilteredSources(state, sources) {
      state.filteredSources = sources;
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
      return fetchHeadlines()
        .then((headlines) => {
          const enrichedHeadlines = headlines.map(
            (headline, index) => ({ customId: index, ...headline }),
          );
          commit('setHeadlines', enrichedHeadlines);
        });
    },
    fetchAllSources({ commit }) {
      console.log('fetching sources action activated');
      return fetchSources()
        .then((sources) => {
          commit('setSources', sources);
          commit('setFilteredSources', sources);
        });
    },
  },
  modules: {
  },
});
