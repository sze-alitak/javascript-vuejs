<script setup>
import { ref, computed } from 'vue'
import BookTags from './BookTags.vue'

const props = defineProps({
    title: String,
    books: Array,
})

const activeTag = ref('all')

const booksFiltered = computed(() => {
    return props.books.filter(book => activeTag.value === 'all' || book.tag === activeTag.value)
})
</script>

<template>
    <h2 class="font-bold text-lg">{{ title }}:</h2>
    
    <BookTags
     :initialTags="props.books.map(book => book.tag)"
     v-model="activeTag"
     />

    <ul>
        <li v-for="book in booksFiltered" :key="`book-${book.id}`" class="flex items-center justify-between">
            <span>{{ book.title }}</span>
            <input type="checkbox" v-model="book.is_completed">
        </li>
    </ul>
</template>
