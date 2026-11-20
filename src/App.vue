<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { useAuthStore } from './stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <nav style="margin-bottom: 30px;"">
    <RouterLink to="/" style="margin-right: 10px;">Home</RouterLink>
    <RouterLink to="/about" style="margin-right: 10px;">About</RouterLink>
    <RouterLink to="/login" v-if="!authStore.user" style="margin-right: 10px;">Login</RouterLink>
    <a href="#" v-on:click.prevent="authStore.logout()" v-else>Logout</a>
  </nav>

  <RouterView />
</template>
