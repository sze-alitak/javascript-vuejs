import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from '@/services/http'

export const useAuthStore = defineStore('auth', () => {
    const token = ref('')
    const user = ref(null)
    const isAuthenticated = computed(() => !!token.value)

    const setToken = (newToken) => {
        token.value = newToken
        axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`
    }

    const clearToken = () => {
        token.value = ''
        user.value = null
        delete axios.defaults.headers.common['Authorization']
    }

    const register = async (email, password) => {
        try {
            const response = await axios.post('/auth/register', {
                email,
                password
            })
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data?.message || 'Registration failed' }
        }
    }

    const login = async (email, password) => {
        try {
            const response = await axios.post('/auth/login', {
                email,
                password
            })
            if (response.data.token) {
                setToken(response.data.token)
                user.value = response.data.user
            }
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data?.message || 'Login failed' }
        }
    }

    const logout = async () => {
        try {
            if (token.value) {
                await axios.post('/auth/logout')
            }
        } catch (error) {
            console.log('Logout error:', error)
        } finally {
            clearToken()
        }
    }

    if (token.value) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
    }

    return {
        token,
        user,
        isAuthenticated,
        register,
        login,
        logout,
        clearToken
    }
}, {
    persist: true
})