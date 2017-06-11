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

export default function (json) {
	if (!json) {
		return null
	} else {
		for (let i in json) {
			json[i]['component'] = Main
			for (let j in json[i].children) {
				switch (json[i].children[j].path) {
				case '/TroubleIndex':
					json[i].children[j]['component'] = TroubleIndex
					break
				case '/TroubleList':
					json[i].children[j]['component'] = TroubleList
					break
				case '/JCenterIndex':
					json[i].children[j]['component'] = JCenterIndex
					break
				case '/JCenterPlatform':
					json[i].children[j]['component'] = JCenterPlatform
					break
				case '/Report':
					json[i].children[j]['component'] = Report
					break
				case '/Trace':
					json[i].children[j]['component'] = Trace
					break
				case '/BatteryType':
					json[i].children[j]['component'] = BatteryType
					break
				case '/DeviceKind':
					json[i].children[j]['component'] = DeviceKind
					break
				case '/DeviceType':
					json[i].children[j]['component'] = DeviceType
					break
				case '/DeviceInfo':
					json[i].children[j]['component'] = DeviceInfo
					break
				case '/DeviceGroup':
					json[i].children[j]['component'] = DeviceGroup
					break
				case '/DeviceLog':
					json[i].children[j]['component'] = DeviceLog
					break
				case '/Project':
					json[i].children[j]['component'] = Project
					break
				case '/Org':
					json[i].children[j]['component'] = Org
					// console.log(json[i].children[j])
					break
				case '/User':
					json[i].children[j]['component'] = User
					break
				case '/CustomInit':
					json[i].children[j]['component'] = CustomInit
					break
				case '/Dict':
					json[i].children[j]['component'] = Dict
					break
				case '/AppV':
					json[i].children[j]['component'] = AppV
					break
				case '/Auth':
					json[i].children[j]['component'] = Auth
					break
				case '/Role':
					json[i].children[j]['component'] = Role
					break
				case '/Module':
					json[i].children[j]['component'] = Module
					break
				}
			}
		}
		return json
	}
}
