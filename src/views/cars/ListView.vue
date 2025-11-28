<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import List from '@/components/List.vue'
import useApi from '@/composables/useApi'

const { data: cars, fetchData, deleteEntry } = useApi('cars')

const router = useRouter()

onMounted(() => {
    fetchData()
})
</script>

<template>
    <div>
        <div class="mb-4">
            <button v-on:click="router.push('/cars/add')" class="bg-blue-500 text-white px-4 py-2 rounded">
                Autó hozzáadása
            </button>
        </div>
        <List title="Autók" route-prefix="cars" :data="cars" v-on:delete-entry="deleteEntry" />
    </div>
</template>
