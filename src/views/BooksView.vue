<script setup>
import { ref, computed } from 'vue'
import BookCreate from '@/components/books/BookCreate.vue'
import BooksList from '@/components/books/BooksList.vue'

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

    <BooksList title="Könyvek" :books="incompleteBooks" v-if="incompleteBooks.length" />
    <BooksList title="Elolvasott könyvek" :books="completeBooks" v-if="completeBooks.length" />
</template>