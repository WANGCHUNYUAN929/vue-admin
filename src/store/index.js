/*
 * @Descripttion:
 * @version:
 * @Author: WANGCHUNYUAN
 * @Date: 2021-11-02 23:59:30
 * @LastEditTime: 2021-11-05 17:11:41
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const index = modulePath.lastIndexOf('/')
  const moduleName = modulePath.substring(index + 1, modulePath.length)
  const name = moduleName.replace(/^(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[name] = value.default
  return modules
}, {})
console.log('modules :>> ', modules)
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules
  plugins: [vuexLocal.plugin]
})
