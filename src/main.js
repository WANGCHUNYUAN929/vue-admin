/*
 * @Descripttion:
 * @version:
 * @Author: WANGCHUNYUAN
 * @Date: 2021-11-02 23:59:30
 * @LastEditTime: 2021-11-03 18:09:13
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/js/common/log'
import moment from '@/assets/js/plugin/moment'
// css main
import '@/assets/css/index.scss'
// 自动注册基础组件(全局注册需放在new Vue之前)
import '@/components/src/index'
Vue.use(moment)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
