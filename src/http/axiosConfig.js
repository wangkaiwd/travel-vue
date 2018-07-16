
import store from '@/store'
import Axios from 'axios'
import HTTP from './httpConfig'

const axiosInstance = Axios.create({
  baseURL: `${HTTP.HTTP_SERVER}${HTTP.HTTP_PREFIX}`,
  timeout: 8000,
})
// TODO:请求超时的友好提示

// 添加请求拦截器
axiosInstance.interceptors.request.use((config) => {
  store.commit('isShowGlobalLoading', true);
  if (config.method.toLowerCase() === 'post') {
    config.headers = { "Content-Type": "application/x-www-from-urlencoded" }
  }
  return config;
},
  (error) => {
    // 对请求错误做些什么
    console.log('请求失败', error);
    return Promise.reject(error);
  });

// 添加响应拦截器
axiosInstance.interceptors.response.use((response) => {
  store.commit('isShowGlobalLoading', false)
  // 对响应数据做点什么
  return response.data;
},
  (error) => {
    // 对响应错误做点什么
    console.log('响应失败', error);
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

// 使用Promsie进行处理回到函数，防止回到地狱
const promiseAjax = (url, method = 'post') =>
  (data) =>
    new Promise((resolve, reject) => {
      axiosInstance({
        method,
        url,
        data
      }).then(res => resolve(res), err => reject(err))
    })
