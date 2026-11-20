<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

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
    // try {
        await authStore.login(username.value, password.value)
    // } catch (e) {
    //     error_message.value = e.error_message
    // } finally {
    //     sending.value = false
    // }
}
</script>

<template>
    <h1>Login</h1>
    <form v-on:submit.prevent="login" style="margin-bottom: 20px">
        <input v-model="username">
        <input type="password" v-model="password">
        <button type="submit">login</button>
        <h5 v-if=error_message>{{ error_message }}</h5>
    </form>
</template>