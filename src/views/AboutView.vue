<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>

<template>
    <h1>About me</h1>
    <h2>User: {{ authStore.user.user.name }}</h2>
</template>
