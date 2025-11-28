<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TextInput from '@/components/form/TextInput.vue'
import CustomButton from '@/components/form/CustomButton.vue'
import useApi from '@/composables/useApi'

const { entry: car, viewItem, updateItem } = useApi('cars')

const route = useRoute()
const router = useRouter()

const loading = ref(false)

const updateCar = async () => {
    loading.value = true
    try {
        await updateItem(car.value)
        router.push('/cars')
    } catch (error) {
        console.error('Error updating car:', error)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    viewItem(route.params.id)
})
</script>

<template>
    <h2>Autó szerkesztése</h2>
    
    <form v-on:submit.prevent="updateCar">
        <TextInput v-model="car.title" label="Cím" placeholder="Autó címe" required/>
        
        <div class="mt-4">
            <CustomButton type="submit" :disabled="loading">{{ loading ? 'Mentés...' : 'Mentés' }}</CustomButton>
            
            <CustomButton type="button" v-on:click="router.push('/cars')" class="ml-2 bg-gray-500 hover:bg-gray-600">Mégse</CustomButton>
        </div>
    </form>
</template>