import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/index/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import('../views/blogs/index.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/project/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
