<template>
  <ul class="mb-20 grid grid-cols-6 gap-4">
    <li><RouterLink to="/">Home</RouterLink></li>
    <li><RouterLink to="/books">Books</RouterLink></li>
    <li><RouterLink to="/todo">Todo</RouterLink></li>
    <li v-if="!authStore.isAuthenticated"><RouterLink to="/register">Register</RouterLink></li>
    <li v-if="!authStore.isAuthenticated"><RouterLink to="/login">Login</RouterLink></li>
    <li v-if="authStore.isAuthenticated">
      <button v-on:click="handleLogout" class="text-blue-600 hover:text-blue-800">Logout</button>
    </li>
  </ul>

  <RouterView></RouterView>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const handleLogout = async () => {
  await authStore.logout()
  router.push('/')
}
</script>

