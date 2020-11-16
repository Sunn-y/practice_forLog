import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		colorTheme: '#FF9999',
		drawer: false
	},
	mutations: {
		changeColor(state, payload) {
			state.colorTheme = payload;
		},
		changeDrawer(state) {
			state.drawer = !state.drawer;
		}
	},
	actions: {},
	modules: {}
});
