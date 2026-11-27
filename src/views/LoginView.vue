<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

let username = ref("")
let password = ref("")
let error_message = ref("")
let sending = ref(false)

// async function login() {
// }

const login = async () => {
    sending.value = true
    error_message.value = ''
    try {
        await authStore.login(username.value, password.value)

        const redirect = route.query.redirect

        await router.push(redirect ? redirect : {'name': 'tasks.index'})
    } catch (e) {
        error_message.value = e.error_message
    } finally {
        sending.value = false
    }
}
</script>

<template>
    <h1>Login</h1>
    <form v-on:submit.prevent="login" style="margin-bottom: 20px">
        <input v-model="username">
        <input type="password" v-model="password">
        <button type="submit" :disabled="sending">login</button>
        <h5 v-if=error_message>{{ error_message }}</h5>
    </form>
</template>