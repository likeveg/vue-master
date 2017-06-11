<template>
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm login-container">
		<h3 class="title">系统登录</h3>
		<el-form-item prop="account">
			<el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="请输入账号"></el-input>
		</el-form-item>
		<el-form-item prop="checkPass">
			<el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="请输入密码"></el-input>
		</el-form-item>
		<el-checkbox v-model="checked" checked class="remember">记住我</el-checkbox>
		<el-form-item style="width:100%;">
			<el-button type="primary" style="width:100%;" @click.native.prevent="submit">登录</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
import _ from 'lodash'
import api from '@/api'
// import addAllRoutes from '@/router/addAllRoutes'
export default {
	data () {
		return {
			ruleForm: {
				account: 'admin',
				checkPass: '123456'
			},
			rules: {
				account: [
					{ required: true, message: '请输入账号', trigger: 'blur' }
					// { validator: validaePass }
				],
				checkPass: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
					// { validator: validaePass2 }
				]
			},
			checked: false
		}
	},
	methods: {
		submit () {
			this.$refs.ruleForm.validate((valid) => {
				if (valid) {
					// let params = '?isRemenberMe=' + this.checked + '&mtd=0&password=' + this.ruleForm.checkPass + '&userName=' + this.ruleForm.account
					let params = {
						username: this.ruleForm.account,
						password: this.ruleForm.checkPass,
						isRemenberMe: this.checked
					}
					api.LoginRequest(params).then(res => {
						let {code, msg, user, menu} = res.data
						if (code === 200) {
							for (let routesItem of this.$router.options.routes) {
								for (let authName of menu) {
									let result = _.findKey(routesItem.children, {'name': authName})
									if (result >= 0) {
										routesItem.hidden = false
										routesItem.children[result].hidden = false
									}
								}
							}
							for (let child of this.$router.options.routes) {
								if (!child.hidden) {
									let showCount = 0
									for (let childrenItem of child.children) {
										if (!childrenItem.hidden) {
											showCount++
										}
									}
									if (showCount > 1) {
										child.leaf = false
									} else {
										child.leaf = true
									}
								}
							}
							this.$router.replace({path: '/TroubleIndex'})
							sessionStorage.setItem('user', JSON.stringify(user))
							sessionStorage.setItem('menu', JSON.stringify(this.$router.options.routes))
							this.$message({
								message: msg,
								type: 'success'
							})
						} else {
							this.$message({
								message: msg,
								type: 'warning'
							})
						}
					})
				} else {
					// console.log('222222222222222')
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	.login-container {
		box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
		border-radius: 0px;
		position: relative;
		margin: 180px auto;
		width: 350px;
		padding: 35px 35px 15px 35px;
		background: #fff;
		border: 1px solid #eaeaea;
		box-shadow: 0 0 10px #cac6c6;
		.title {
			margin: 0px auto 40px auto;
			text-align: center;
			color: #505458;
		}
		.remember {
			float: left;
			margin: 0px 0px 35px 0px;
		}
	}
</style>
