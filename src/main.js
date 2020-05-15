import Vue from 'vue';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Loading from './components/Loading.vue';

Vue.config.productionTip = false;

Vue.component('Loading', Loading);

Vue.filter('formatDate', (value) => {
  if (!value) {
    return '';
  }
  return moment(value.toString()).format('LLLL');
});


new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
