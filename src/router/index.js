import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/home.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }
]

/**
 * 定义返回模块
 */
const router = createRouter({
  history: createWebHistory(),  // 设置为history模式，就是路径里面没有#,  createWebHashHistory 是默认的，括号里面的就是基础路径，可以理解为项目名称，就是请求路径的基础url
  routes
})

export default router