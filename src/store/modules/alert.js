/* eslint-disable no-shadow */
const state = {
  alert: {
    message: '',
    type: 'error', // success, info, warning, error
  },
};

const mutations = {
  setAlert(state, alert) {
    state.alert = alert;
  },
};


export default {
  namespaced: true,
  state,
  mutations,
};
