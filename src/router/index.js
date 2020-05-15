import Vue from 'vue';
import VueRouter from 'vue-router';
import News from '../views/News.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/news',
    component: News,
    name: 'news',
  },
  {
    path: '/news/:id',
    name: 'detail',
    // route level code-splitting
    // this generates a separate chunk (headlineDetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "headlineDetail" */ '../views/HeadlineDetail.vue'),
    props(route) {
      const props = { ...route.params };
      props.id = +props.id; // convert to number
      return props;
    },
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
  scrollBehavior(to, from, savedPosition) {
    if (to.name === 'detail') {
      return { x: 0, y: 0 };
    }
    return savedPosition;
  },
});

export default router;
