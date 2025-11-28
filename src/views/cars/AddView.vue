<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TextInput from '@/components/form/TextInput.vue'
import CustomButton from '@/components/form/CustomButton.vue'
import useApi from '@/composables/useApi'

const { entry: car, addItem } = useApi('cars')

const router = useRouter()

const loading = ref(false)

const addCar = async () => {
    loading.value = true
    try {
        await addItem(car.value)
        router.push('/cars')
    } catch (error) {
        console.error('Error adding car:', error)
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <h2>Új autó hozzáadása</h2>
    
    <form v-on:submit.prevent="addCar">
        <TextInput v-model="car.title" label="Cím" placeholder="Autó címe" required/>
        
        <div class="mt-4">
            <CustomButton type="submit" :disabled="loading">{{ loading ? 'Hozzáadás...' : 'Hozzáadás' }}</CustomButton>
            <CustomButton type="button" v-on:click="router.push('/cars')" class="ml-2 bg-gray-500 hover:bg-gray-600">Mégse</CustomButton>
        </div>
    </form>
</template>