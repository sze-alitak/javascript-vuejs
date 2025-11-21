<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import TextInput from '@/components/form/TextInput.vue'
import CustomButton from '@/components/form/CustomButton.vue'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  loading.value = true
  error.value = ''
  
  const result = await authStore.login(email.value, password.value)
  
  if (result.success) {
    router.push('/')
  } else {
    error.value = result.error
  }
  
  loading.value = false
}
</script>

<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-6">Login</h1>
    
    <form v-on:submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium mb-1">Email:</label>
        <TextInput 
          id="email" 
          v-model="email"
          type="email"
          required
          class="w-full"
        />
      </div>
      
      <div>
        <label for="password" class="block text-sm font-medium mb-1">Password:</label>
        <TextInput 
          id="password" 
          v-model="password"
          type="password"
          required
          class="w-full"
        />
      </div>
      
      <CustomButton 
        type="submit" 
        v-bind:disabled="loading"
        class="w-full"
      >
        {{ loading ? 'Logging in...' : 'Login' }}
      </CustomButton>
      
      <div v-if="error" class="text-red-600 text-sm">
        {{ error }}
      </div>
    </form>
  </div>
</template>
