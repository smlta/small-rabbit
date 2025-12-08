import axios from 'axios' // 导入axios实例
 const request = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
}) //自定义axios实例

request.interceptors.request.use(config => {
  return config
},err => {
  return Promise.reject(err)
}) // 请求拦截器

request.interceptors.response.use(res => {
return res.data
}, err => {
  return Promise.reject(err)
}) // 响应拦截器

export default request