import { createWebHistory, createRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import TasksView from '../views/TasksView.vue'
import TaskView from '../views/TaskView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'

const router =  createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: "tasks.index", component: TasksView },
    { path: '/tasks/:id', name: "tasks.show", component: TaskView},
    { path: '/about', name: "about", component: AboutView, meta: {requiresAuth: true} },
    { path: '/login', name: "login", component: LoginView },
  ]
})

// Regisztrálja az útvonalváltás előtt lefutó globális őrt. A to a célútvonal adatait tartalmazza.
router.beforeEach(async to => {
  // Lekéri a bejelentkezési állapotot kezelő Pinia-tárolót.
  const auth = useAuthStore()
  // Megvárja, amíg a tároló szükség esetén visszaállítja a bejelentkezési állapotot.
  // await auth.restore()
  // Védett útvonalnál a kijelentkezett felhasználót a bejelentkezési oldalra irányítja, a teljes célútvonalat a redirect paraméterben megőrizve.
  if (to.meta.requiresAuth && !auth.isAuthenticated) return { name: 'login', query: { redirect: to.fullPath } }
  // Ha egy bejelentkezett felhasználó a bejelentkezési oldalra lépne, átirányítja a feladatlistára.
  // if (to.name === 'about' && !auth.isAuthenticated) return { name: 'login' }
  if (to.name === 'login' && auth.isAuthenticated) return { name: 'tasks.index' }

// Lezárja az útvonalőrt. Ha eddig nem történt visszatérés, a navigáció folytatódik a célútvonal felé.
})

export default router
