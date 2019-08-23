import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';

Vue.use(VueRouter);

const router =  new VueRouter({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/components/maps',
      name: 'maps',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Map.vue'),
    },
    {
      path: '/components/markers',
      name: 'markers',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/MarkerView.vue'),
    },
  ],
});

export default router;
