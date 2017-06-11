import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {LoginUsers} from './data/user'
import _Routes from './data/routes'
import menu from './data/menu'
import _orgTree from './data/orgTree'
export default{
	bootstrap () {
		let mock = new MockAdapter(axios)
		mock.onGet('/success').reply(200, {msg: 'success'})
		mock.onGet('/faulure').reply(500, {msg: 'failure'})
		mock.onPost('/login').reply(config => {
			let {username, password} = JSON.parse(config.data)
			return new Promise((resolve, reject) => {
				let user = {}
				setTimeout(() => {
					let hasUser = LoginUsers.some(u => {
						if (u.username === username && u.password === password) {
							user = u
							user.password = undefined
							return true
						}
					})
					if (hasUser) {
						resolve([200, {
							code: 200,
							msg: '登录成功',
							user,
							menu
						}])
					} else {
						resolve([200, {
							code: 500,
							msg: '账号或密码错误'
						}])
					}
				}, 1000)
			})
		})
		mock.onPost('/getRoutes').reply(config => {
			return new Promise((resolve, reject) => {
				resolve([200, {
					routes: _Routes
				}])
			})
		})
		mock.onPost('getOrgTree').reply(config => {
			return new Promise((resolve, reject) => {
				resolve([200, {
					orgTreeData: _orgTree
				}])
			})
		})
	}
}
