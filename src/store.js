import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],

	state: {
		item: ""
	},

	mutations: {
		add(state, n) {
			state.item = n;
        }
	},


	getters: {
		getItem(state) {
			return state.item;
		}
	},

	actions: {
		
		add({commit}, n) {
			commit("add", n);
		}
	}
});