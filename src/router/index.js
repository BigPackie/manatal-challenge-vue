import Vue from 'vue';
import VueRouter from 'vue-router';
import News from '../views/News.vue';
import HeadlineDetail from '../views/HeadlineDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/news',
    component: News,
  },
  {
    path: '/headline',
    component: HeadlineDetail,
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
