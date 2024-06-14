// axios基础封装
import axios from 'axios'

// 基地址+超时时间
const httpInstance = axios.create({
    baseURL:'http://localhost:8080',
    timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))
// axios相应拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})

export default httpInstance