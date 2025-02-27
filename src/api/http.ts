import axios, { type AxiosRequestConfig } from 'axios'
import { useAuthStore } from '@/stores/users'

const service = axios.create({
  baseURL: 'api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'token f6d36975fca05ef94ab60652d7f48fffb035f11a',
  },
})

service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `token ${token}`
    return config
  },
  (error) => Promise.reject(error),
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 200) {
      console.error('API Error:', res.message)
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
  },
  (error) => {
    // 处理HTTP错误
    let message = ''
    if (error.response) {
      switch (error.response.status) {
        case 401:
          message = '请重新登录'
          // 跳转登录逻辑...
          break
        case 403:
          message = '拒绝访问'
          break
        case 404:
          message = '资源不存在'
          break
        default:
          message = `请求错误 (${error.response.status})`
      }
    } else if (error.request) {
      message = '网络连接异常'
    } else {
      message = error.message
    }
    console.error('HTTP Error:', message)
    return Promise.reject(error)
  },
)

export const http = {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config)
  },
  post<T = unknown>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.post(url, data, config)
  },
  put<T = unknown>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.put(url, data, config)
  },
  delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, config)
  },
}

export default service
