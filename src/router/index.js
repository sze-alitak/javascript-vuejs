import { createWebHistory, createRouter } from 'vue-router'

import TasksView from '../views/TasksView.vue'
import TaskView from '../views/TaskView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
    { path: '/', name: "tasks.index", component: TasksView },
    { path: '/tasks/:id', name: "tasks.show", component: TaskView},
    { path: '/about', name: "about", component: AboutView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})