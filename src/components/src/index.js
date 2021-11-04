/*
 * @Descripttion:
 * @version:
 * @Author: WANGCHUNYUAN
 * @Date: 2021-11-03 15:51:17
 * @LastEditTime: 2021-11-03 16:37:40
 */
// 自动化全局注册
import Vue from 'vue'

const requireComponent = require.context(
  // 其组件目录的相对路径
  '@/components/src',
  // 是否查询其子目录
  true,
  /\.vue$/
)
requireComponent.keys().forEach((fileName) => {
  // getComponentOptinos
  const componentConfig = requireComponent(fileName)
  Vue.component(
    componentConfig.default.name, // conponents name
    // 如果这个组件选项是通过 `export default` 导出的 优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default
  )
})
