import axios from 'axios'

// prod
// let baseUrl = 'http://10.88.20.89:8205/acp-web-monitor/security/login'
// export const LoginRequest = params => { return axios.post(baseUrl + params) }

// test
let base = ''
export const LoginRequest = params => { return axios.post(`${base}/login`, params) }
// export const GetRoutes = () => { return axios.post(`${base}/getRoutes`) }
// 平台管理－机构管理－组织树查询
export const OrgTreeRequst = params => { return axios.post(`${base}/getOrgTree`, params) }
