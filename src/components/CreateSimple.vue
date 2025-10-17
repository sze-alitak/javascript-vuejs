<script setup>
import { ref } from 'vue'
import TextInput from '@/components/form/TextInput.vue'

const props = defineProps({
    title: String,
})

const title = ref('')

const emit = defineEmits(['add'])

const add = () => {
    emit('add', title.value)
    title.value = ''
}
</script>

<template>
    <h2 class="font-bold text-lg" v-text="props.title"></h2>
    <form class="flex mb-3" v-on:submit.prevent="add">
        <TextInput v-model="title" />
        <button
         class="border-1 p-1 w-1/2 hover:bg-gray-200 cursor-pointer"
         type="submit">
            Hozzáadás
        </button>
    </form>
</template>
