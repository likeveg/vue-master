// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import _ from 'lodash'
import Mock from './mock'
Mock.bootstrap()
Vue.use(ElementUI)
// Object.definePrototype(Vue.prototype, '_', { value: _ })
Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {
// 	console.log(to.meta.name)
// 	console.log(to.meta.name)
// 	console.log(to.meta.name)
// 	// let user = sessionStorage.getItem('user')
// 	if (to.path === '/login') {
// 		sessionStorage.removeItem('user')
// 	} else {
// 		console.log(111)
// 	}
// 	next()
// })

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
