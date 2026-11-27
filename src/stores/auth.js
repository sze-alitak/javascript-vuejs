import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { authApi } from '@/services/api'

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)
    const isAuthenticated = computed(() => !!user.value)

    const login = async (username, password) => {
        if (user.value !== null) {
            return
        }

        const data = await authApi().login(username, password)
        user.value = data
    }

    const logout = async () => {
        if (!user.value) return
        
        await authApi().logout(user.value.token)
        user.value = null


    }

    return {user, isAuthenticated, login, logout}
})
