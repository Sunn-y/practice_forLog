import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		navDrawer: false,
	},
	mutations: {
		changeDrawer(state) {
			state.navDrawer === false ? state.navDrawer = true : state.navDrawer = false;
		}
	},
	actions: {
		setDrawer: ({
			commit
		}) => {
			commit('changeDrawer');
		}
	},
	modules: {}
});
