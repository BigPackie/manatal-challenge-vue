import Vue from 'vue';
import Vuex from 'vuex';
import { api } from '../api/news';


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
        .find((src) => item.source.id === src.id
        || item.source.name === src.name
        // when "all sources" are let though, without id or different source
        || state.filteredSources.length === state.sources.length)),
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
        return;
      }
      headline.title = newTitle;
    },
  },
  actions: {
    fetchAllHeadlines({ commit }) {
      commit('incDataLoad');
      return api.fetchHeadlines()
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
      commit('incDataLoad');
      return api.fetchSources()
        .then((sources) => {
          commit('setSources', sources);
          commit('setFilteredSources', sources);
        }).finally(() => {
          commit('decDataLoad');
        });
    },
    /** Works together with SourceFilter */
    fetchBySearchString({ commit }, payload) {
      commit('incDataLoad');
      return api.fetchHeadlinesByString(payload)
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
