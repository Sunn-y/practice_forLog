import Vue from 'vue';
import VueRouter from 'vue-router';
import AppCalendar from '../views/AppCalendar.vue';
import EditHashtag from '../views/EditHashtag.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'AppCalendar',
    component: AppCalendar
  },
  {
    path: '/edithashtag',
    name: 'EditHashtag',
    component: EditHashtag
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
