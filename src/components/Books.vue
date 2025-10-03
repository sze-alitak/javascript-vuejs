<script setup>
import { ref, computed } from 'vue'
import BookTags from './BookTags.vue'
import BookCreate from './BookCreate.vue'

const books = ref([
    {
        "id": 1,
        "title": "Foundation",
        "is_completed": false,
        "tag": "scifi",
    },
    {
        "id": 2,
        "title": "Foundation and Empire",
        "is_completed": false,
        "tag": "scifi",
    },
    {
        "id": 3,
        "title": "Witcher",
        "is_completed": false,
        "tag": "fantasy",
    },
    {
        "id": 4,
        "title": "Witcher 2",
        "is_completed": false,
        "tag": "fantasy",
    },
    {
        "id": 5,
        "title": "Witcher 3",
        "is_completed": false,
        "tag": "fantasy",
    },
])
const activeTag = ref('all')

function add(title) {
    books.value.push({
        "id": books.value.length + 1,
        "title": title,
        "is_completed": false,
        "tag": "scifi",
    })
}

const incompleteBooks = computed(() => books.value.filter(book => !book.is_completed))
const completeBooks = computed(() => books.value.filter(book => book.is_completed))
</script>

<template>
    <BookCreate v-on:add="add"/>

    <h2 v-if="incompleteBooks.length" class="font-bold text-lg">Könyvek:</h2>
    <BookTags
     :initialTags="books.map(book => book.tag)"
     v-model="activeTag"
     />

    <ul>
        <li v-for="book in incompleteBooks.filter(book => activeTag === 'all' || book.tag === activeTag)" :key="`book-${book.id}`" class="flex items-center justify-between">
            <span>{{ book.title }}</span>
            <input type="checkbox" v-model="book.is_completed">
        </li>
    </ul>

    <h2 class="mt-3 font-bold text-lg" v-if="completeBooks.length">Elolvasott könyvek:</h2>
    <ul>
        <li v-for="book in completeBooks" :key="`book-${book.id}`" class="flex items-center justify-between">
            <span>{{ book.title }}</span>
            <input type="checkbox" v-model="book.is_completed">
        </li> 
    </ul>
</template>