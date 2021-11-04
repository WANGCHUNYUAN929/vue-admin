/*
 * @Descripttion:
 * @version:
 * @Author: WANGCHUNYUAN
 * @Date: 2021-11-03 19:02:37
 * @LastEditTime: 2021-11-03 19:45:19
 */
const ROUTER_WHITELIST = ['/login', '/b']
const handleWhiteList = (whiteList, { path }, next) => {
  if (whiteList.indexOf(path) > -1) {
    next()
  } else next('/login')
}
export default function router_interceptor(router) {
  let token = window.sessionStorage.getItem('token') || ''
  router.beforeEach((to, from, next) => {
    // 处理url携带token根据具体业务
    if (!token) {
      handleWhiteList(ROUTER_WHITELIST, to, next)
    } else {
      if (to.path === '/login') {
        alert('请退出登录')
        next(from)
      } else next()
    }
  })
  router.afterEach((to) => {
    // 设置title
    if (to.meta.title) {
      document.title = to.meta.title
    }
  })
}
