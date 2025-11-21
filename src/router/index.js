import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('@/views/WelcomeView.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('@/views/BooksView.vue')
    },
    {
      path: '/books/:id/edit',
      name: 'books.edit',
      component: () => import('@/views/BooksEditView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('@/views/TodoView.vue')
    },
    {
      path: '/todo/:id/edit',
      name: 'todo.edit',
      component: () => import('@/views/TodosEditView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
  ],
})

export default router
