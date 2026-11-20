import { createWebHistory, createRouter } from 'vue-router'

import TasksView from '../views/TasksView.vue'
import TaskView from '../views/TaskView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
    { path: '/', name: "tasks.index", component: TasksView },
    { path: '/tasks/:id', name: "tasks.show", component: TaskView},
    { path: '/about', name: "about", component: AboutView },
    { path: '/login', name: "login", component: LoginView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})