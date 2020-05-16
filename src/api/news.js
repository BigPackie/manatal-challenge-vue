import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export const API_ROOT = 'https://newsapi.org/v2/';

export const API_KEY = '099148be22804e849a0c6fe022b7cf5e';

Vue.http.options.root = API_ROOT;
Vue.http.interceptors.push((request, next) => {
  console.log('interceptor !!!!');
  console.log(request);
  next((response) => {
    console.log('interceptors of response !!!');
    console.log(response);
  });
});

const fetchHeadlines = () => Vue.http.get(`top-headlines?country=us&apiKey=${API_KEY}`)
  .then((response) => response.body.articles);
// eslint-disable-next-line vue/max-len
const fetchHeadlinesByString = (searchString) => Vue.http.get(`top-headlines?q=${searchString}&apiKey=${API_KEY}`)
  .then((response) => response.body.articles);

const fetchSources = () => Vue.http.get(`sources?apiKey=${API_KEY}`)
  .then((response) => response.body.sources);

const badRequest = () => Vue.http.get('sources?apiKey')
  .then((response) => JSON.parse(response)).then((data) => console.log(`parsed json${data}`));

export const api = {
  fetchHeadlines,
  fetchHeadlinesByString,
  fetchSources,
  badRequest,
};
