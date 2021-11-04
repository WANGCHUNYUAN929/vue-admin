/*
 * @Descripttion:
 * @version:
 * @Author: WANGCHUNYUAN
 * @Date: 2021-11-02 23:59:30
 * @LastEditTime: 2021-11-04 12:47:54
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import router_interceptor from '@/config/interceptors/router'

// fix vue-router NavigationDuplicated
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return VueRouterPush.call(this, location).catch((err) => err)
}
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return VueRouterReplace.call(this, location).catch((err) => err)
}

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

//TODO:路由拦截
router_interceptor(router)

export default router
