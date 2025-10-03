<script setup>
import { ref } from 'vue'
import TextInput from './TextInput.vue'

const newBookTitle = ref('')

const emit = defineEmits(['add'])

const add = () => {
    emit('add', newBookTitle.value)
    newBookTitle.value = ''
}
</script>

<template>
    <h2 class="font-bold text-lg">Könyv hozzáadása</h2>
    <form class="flex mb-3" v-on:submit.prevent="add">
        <TextInput v-model="newBookTitle" />
        <button
         class="border-1 p-1 w-1/2 hover:bg-gray-200 cursor-pointer"
         type="submit">
            Hozzáadás
        </button>
    </form>
</template>
