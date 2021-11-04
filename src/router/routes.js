/*
 * @Descripttion:
 * @version:
 * @Author: WANGCHUNYUAN
 * @Date: 2021-11-03 18:34:42
 * @LastEditTime: 2021-11-03 19:41:05
 */
import a from './modules/a'
import b from './modules/b'

const baseRouter = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/Main.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  }
]

export default [
  ...baseRouter,
  ...a,
  ...b
  //  {
  //   path: "/:catchAll(.*)",
  //   component: _import("NotFound"),
  // },
]
