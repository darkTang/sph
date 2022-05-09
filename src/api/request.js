import axios from "axios"
// 引入进度条
import nProgress from "nprogress"
// 引入进度条样式
import 'nprogress/nprogress.css'
const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 配置请求拦截器
service.interceptors.request.use(config => {
  nProgress.start()
  return config
})

service.interceptors.response.use(response => {
  nProgress.done()
  const { data, code, message } = response.data
  if (code === 200) {
    return data
  } else {
    return Promise.reject(new Error(message))
  }
}, err => {
  return Promise.reject(err.message)
})

export default service