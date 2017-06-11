import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'
import Main from '@/views/Main'
import TroubleIndex from '@/views/Troubleshooting/TroubleIndex'
import TroubleList from '@/views/Troubleshooting/TroubleList'
import JCenterIndex from '@/views/JCenter/JCenterIndex'
import JCenterPlatform from '@/views/JCenter/JCenterPlatform'
import Report from '@/views/Report/Report'
import Trace from '@/views/Trace/Trace'
import BatteryType from '@/views/Device/BatteryType'
import DeviceKind from '@/views/Device/DeviceKind'
import DeviceType from '@/views/Device/DeviceType'
import DeviceInfo from '@/views/Device/DeviceInfo'
import DeviceGroup from '@/views/Device/DeviceGroup'
import DeviceLog from '@/views/Device/DeviceLog'
import Project from '@/views/Device/Project'
import Org from '@/views/Platform/Org'
import User from '@/views/Platform/User'
import CustomInit from '@/views/Platform/CustomInit'
import Dict from '@/views/Platform/Dict'
import AppV from '@/views/Platform/AppV'
import Auth from '@/views/Auth/Auth'
import Role from '@/views/Auth/Role'
import Module from '@/views/Auth/Module'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Login',
			component: Login,
			hidden: true
		},
		{
			path: '/404',
			name: 'NotFound',
			component: NotFound,
			hidden: true
		},
		{
			path: '/',
			component: Main,
			iconCls: 'iconfont icon-guzhangxinxi',
			hidden: true,
			leaf: true,
			children: [
				{ path: '/TroubleIndex', component: TroubleIndex, name: '故障排除', hidden: true },
				{ path: '/TroubleList', component: TroubleList, name: '故障列表', hidden: true }
			]
		},
		{
			path: '/',
			component: Main,
			iconCls: 'iconfont icon-jiankong',
			leaf: true,
			hidden: true,
			children: [
				{ path: '/JCenterIndex', component: JCenterIndex, name: '监控中心', hidden: true },
				{ path: '/JCenterPlatform', component: JCenterPlatform, name: '监控平台', hidden: true }
			]
		},
		{
			path: '/',
			component: Main,
			iconCls: 'iconfont icon-baobiao',
			leaf: true,
			hidden: true,
			children: [
				{ path: '/Report', component: Report, name: '报表统计', hidden: true }
			]
		},
		{
			path: '/',
			component: Main,
			iconCls: 'iconfont icon-bowensuyuan-',
			leaf: true,
			hidden: true,
			children: [
				{ path: '/Trace', component: Trace, name: '溯源中心', hidden: true }
			]
		},
		{
			path: '/',
			component: Main,
			name: '设备管理',
			iconCls: 'iconfont icon-shebeiguanli',
			hidden: true,
			leaf: true,
			children: [
				{ path: '/BatteryType', component: BatteryType, name: '电池类型', hidden: true },
				{ path: '/DeviceKind', component: DeviceKind, name: '设备类别', hidden: true },
				{ path: '/DeviceType', component: DeviceType, name: '设备类型', hidden: true },
				{ path: '/DeviceGroup', component: DeviceGroup, name: '设备组网关系', hidden: true },
				{ path: '/DeviceLog', component: DeviceLog, name: '设备连接日志', hidden: true },
				{ path: '/Project', component: Project, name: '项目管理', hidden: true },
				{ path: '/DeviceInfo', component: DeviceInfo, name: '设备信息', hidden: true }
			]
		},
		{
			path: '/',
			component: Main,
			name: '平台管理',
			iconCls: 'iconfont icon-yunweiguanlipingtai',
			hidden: true,
			leaf: true,
			children: [
				{ path: '/Org', component: Org, name: '机构管理', hidden: true },
				{ path: '/User', component: User, name: '用户管理', hidden: true },
				{ path: '/CustomInit', component: CustomInit, name: '客户初始化', hidden: true },
				{ path: '/Dict', component: Dict, name: '字典维护', hidden: true },
				{ path: '/AppV', component: AppV, name: 'App版本维护', hidden: true }
			]
		},
		{
			path: '/',
			component: Main,
			name: '权限管理',
			hidden: true,
			leaf: true,
			iconCls: 'iconfont icon-quanxianguanli',
			children: [
				{ path: '/Auth', component: Auth, name: '授权管理', hidden: true },
				{ path: '/Role', component: Role, name: '角色授权', hidden: true },
				{ path: '/Module', component: Module, name: '模块管理', hidden: true }
			]
		}
	]
})
