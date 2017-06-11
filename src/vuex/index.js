import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		menu: ''
	},
	mutations: {
		showUserName (state) {
			alert(state.user_name)
		}
	}
})
