import axios from 'axios';

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:8080', // Ajax请求的基本url
  timeout: 20000 // 请求超时时间20s
})

//给 service 创建 http request 拦截器
service.interceptors.request.use(request => {
    // 放行
    return request
  },
  error => {
  return Promise.reject(error);
})

// http response 拦截器
service.interceptors.response.use(response => {
    // 放行  
    return response
  },
  error => {
    return Promise.reject(error.response)   // 返回接口返回的错误信息
});

// 把封装的axios暴露出去使用
export default service