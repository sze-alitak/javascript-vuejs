import { defineStore } from 'pinia'
import { ref } from 'vue'
import { authApi } from '@/services/api'


export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)

    const login = async (username, password) => {
        const data = await authApi().login(username, password)
        user.value = data
    }

    const logout = async () => {
        if (!user.value) return
        
        await authApi().logout(user.value.token)
        user.value = null
    }

    return {user, login, logout}
})
