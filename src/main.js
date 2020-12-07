import Vue from 'vue';
import axios from './plugins/axios';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  axios,
  render: h => h(App)
}).$mount('#app');
