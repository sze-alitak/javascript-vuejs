<script setup>
import { RouterView, RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const logout = async () => {
  await authStore.logout()

  await router.push({'name': 'login'})
}

</script>

<template>
  <nav style="margin-bottom: 30px;"">
    <RouterLink to="/" style="margin-right: 10px;">Home</RouterLink>
    <RouterLink to="/about" style="margin-right: 10px;">About</RouterLink>
    <RouterLink to="/login" v-if="!authStore.user" style="margin-right: 10px;">Login</RouterLink>
    <a href="#" v-on:click.prevent="logout" v-else>Logout</a>
  </nav>

  <RouterView />
</template>
