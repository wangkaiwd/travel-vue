/**
 * @desc 获取localStorage
 * @param {any} key：想要获取内容的键值
 * @returns {any} 解析后的js语法
 */
const getItem = (key) => {
  const result = localStorage.getItem(key);
  return JSON.parse(result);
};
/**
 * @desc 设置localStorage
 * @param key
 * @param val
 */
const setItem = (key,val) => {
  const handleVal = JSON.stringify(val);
  localStorage.setItem(key,handleVal);
};

export default {
  getItem,
  setItem,
}