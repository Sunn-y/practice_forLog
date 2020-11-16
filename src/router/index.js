import Vue from 'vue';
import VueRouter from 'vue-router';
import AppCalendar from '../views/AppCalendar.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'AppCalendar',
    component: AppCalendar
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
