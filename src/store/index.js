import Vue from 'vue';
import Vuex from 'vuex';
import { fetchHeadlines, fetchHeadlinesByString } from '../api/dummy-headlines';
import fetchSources from '../api/dummy-sources';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headlines: [],
    sources: [],
    filteredSources: [],
    routeHistory: [],
    dataLoadingCounter: 0,
  },
  getters: {
    headline: (state) => (id) => state.headlines.find((item) => item.customId === id),
    filteredHeadlines: (state) => state.headlines
      .filter((item) => state.filteredSources
        .find((src) => item.source.id === src.id || item.source.name === src.name)),
    isLoading: (state) => !(state.dataLoadingCounter <= 0),
  },
  mutations: {
    incDataLoad(state) {
      state.dataLoadingCounter += 1;
    },
    decDataLoad(state) {
      state.dataLoadingCounter -= 1;
    },
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
      commit('incDataLoad');
      return fetchHeadlines()
        .then((headlines) => {
          const enrichedHeadlines = headlines.map(
            (headline, index) => ({ customId: index, ...headline }),
          );
          commit('setHeadlines', enrichedHeadlines);
        }).finally(() => {
          commit('decDataLoad');
        });
    },
    fetchAllSources({ commit }) {
      console.log('fetching sources action activated');
      commit('incDataLoad');
      return fetchSources()
        .then((sources) => {
          commit('setSources', sources);
          commit('setFilteredSources', sources);
        }).finally(() => {
          commit('decDataLoad');
        });
    },
    /** Works together with SourceFilter */
    fetchBySearchString({ commit }, payload) {
      console.log(`fetching headlines by search action activated, payload: ${payload}`);
      commit('incDataLoad');
      return fetchHeadlinesByString(payload)
        .then((headlines) => {
          const enrichedHeadlines = headlines.map(
            (headline, index) => ({ customId: index, ...headline }),
          );
          commit('setHeadlines', enrichedHeadlines);
        }).finally(() => {
          commit('decDataLoad');
        });
    },
  },
  modules: {
  },
});
