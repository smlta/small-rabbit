import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // history模式
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/RLayout.vue'),
      children:[
        {
          path: '',
          component: () => import('@/views/Layout/children/RHome.vue')
        },
        {
          path: 'category',
          component: () => import('@/views/Layout/children/RCategory.vue')
        } // /category访问
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login/RLogin.vue')
    }
  ]
})

export default router
