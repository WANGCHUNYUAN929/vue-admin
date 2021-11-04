/*
 * @Descripttion:
 * @version:
 * @Author: WANGCHUNYUAN
 * @Date: 2021-11-03 16:46:48
 * @LastEditTime: 2021-11-04 13:00:38
 */
import Vue from 'vue'
const transvers = (object) => {
  if (Array.isArray(object)) {
    const arr = []
    for (const key of object) {
      if (typeof key === 'object') {
        arr.push(transvers(key))
      } else {
        arr.push(key)
      }
    }
    return arr
  } else if (toString.call(object) === '[object Object]') {
    const obj = {}
    Object.keys(object).forEach((key) => {
      if (typeof object[key] === 'object') {
        obj[key] = transvers(object[key])
      } else {
        obj[key] = object[key]
      }
    })
    return obj
  } else {
    return object
  }
}

const log = console.log
Object.defineProperty(console, 'log', {
  value(...arg) {
    const msg = arg.map((item) => {
      if (typeof item === 'object') {
        return transvers(item)
      } else {
        return item
      }
    })
    const timeStr = Date.parse(new Date())
    log(`%c ${Vue.prototype.$moment(timeStr).format('HH:mm:ss秒')}-debug `, 'background:green;color:#fff;border-radius:3px;padding:1px', ...msg)
  }
})
