/*
 * @Descripttion:
 * @version:
 * @Author: WANGCHUNYUAN
 * @Date: 2021-11-03 17:55:38
 * @LastEditTime: 2021-11-03 18:14:01
 */
import moment from 'moment'
moment.locale('zh-cn')
export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$moment', { value: moment })
  }
}
