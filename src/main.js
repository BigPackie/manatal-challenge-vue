import Vue from 'vue';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Loading from './components/Loading.vue';
import HistoryTracker from './components/HistoryTracker.vue';

Vue.config.productionTip = false;

Vue.component('Loading', Loading);
Vue.component('HistoryTracker', HistoryTracker);

Vue.filter('formatDate', (value) => {
  if (!value) {
    return '';
  }
  return moment(value).format('LLLL');
});

Vue.filter('formatDateCalendar', (value) => {
  if (!value) {
    return '';
  }
  return moment(value).calendar();
});


new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
