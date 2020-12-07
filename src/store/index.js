import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		theme: '#FF9999',
		drawer: false,
		userName: '',
	},
	mutations: {
		setColor(state, res){
			state.theme = res.data.color;
		},
		changeColor(state, payload){
			state.theme = payload;
		},
		setDrawer(state) {
			state.drawer = !state.drawer;
		},
		setUserName(state, res){
			state.userName = res.userName;
		}

	},
	actions: {
		async getColor({commit}){
			const res = await axios.get('http://localhost:3000/theme');
			let color = JSON.stringify(res.data.color);
			console.log(color);
			commit('setColor', color);
			return color;
		},
		async changeColor({commit}, payload){
			await axios.put("http://localhost:3000/theme", {color:payload});
			commit('changeColor', payload);
		},
		getDrawer({commit}){
			commit('setDrawer');
		},
		async getUserName({commit}){
			const res = await axios.get("http://localhost:3000/userInfo");
			commit('setUserName', res);
		}
	},
	modules: {}
});
