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
    {
      path: '/cars',
      name: 'cars',
      component: () => import('@/views/cars/ListView.vue')
    },
    {
      path: '/cars/add',
      name: 'cars.add',
      component: () => import('@/views/cars/AddView.vue')
    },
    {
      path: '/cars/:id/edit',
      name: 'cars.edit',
      component: () => import('@/views/cars/EditView.vue')
    },
  ],
})

export default router
