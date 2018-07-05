import Axios from 'axios'
import HTTP from './httpConfig'
const axiosInstance = Axios.create({
  baseURL: `${HTTP.HTTP_SERVER}${HTTP.HTTP_PREFIX}`,
  timeout: 8000,
})

// TODO:请求超时的友好提示

// 添加请求拦截器
axiosInstance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config;
},
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axiosInstance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response.data;
},
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


/**
 * @description
 *  缓存请求路径和请求方式
 * @param {String} url 请求路径
 * @param {string} [method='post'] 请求方式，默认为post
 */
const ajaxFunction = (url, method = 'post') =>
  /**
 * @description
 *  axios请求数据处理
 * @param {*} data 请求参数
 * @param {*} success 成功时的回调
 * @param {*} fail 失败时的回调
 */
  (data, success, fail = () => { }) => {
    axiosInstance({
      method,
      url,
      data
    }).then(res => success(res), err => fail(err))
  }


export default ajaxFunction;
