<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import useApi from '@/composables/useApi'
import TextInput from '@/components/form/TextInput.vue'
import { useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const {entry: todo, viewItem, updateItem } = useApi('todo')

onMounted(() => {
    viewItem(route.params.id)
})

async function updateEntry() {
    await updateItem(todo.value)

    router.push({ name: 'todo' })
}
</script>

<template>
    <form class="flex mb-3" v-on:submit.prevent="updateEntry">
        <TextInput v-model="todo.title" />
        <button
         class="border-1 p-1 w-1/2 hover:bg-gray-200 cursor-pointer"
         type="submit">
            Módosítás
        </button>
    </form>
</template>
