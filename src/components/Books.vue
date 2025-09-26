<script setup>
import { ref, computed } from 'vue'

const books = ref([
    {
        "id": 1,
        "title": "Foundation",
        'is_completed': false,
    },
    {
        "id": 2,
        "title": "Foundation and Empire",
        'is_completed': false,
    },
    {
        "id": 3,
        "title": "Witcher",
        'is_completed': false,
    },
    {
        "id": 4,
        "title": "Witcher 2",
        'is_completed': false,
    },
    {
        "id": 5,
        "title": "Witcher 3",
        'is_completed': false,
    },
])

let newBookTitle = ref('')

const incompleteBooks = computed(() => books.value.filter(book => !book.is_completed))
const completeBooks = computed(() => books.value.filter(book => book.is_completed))

function add() {
    books.value.push({
        "id": books.value.length + 1,
        "title": newBookTitle.value,
        'is_completed': false,
    })
    newBookTitle.value = ''
}

</script>

<template>
    <form class="grid grid-cols-1 mb-3" v-on:submit.prevent="add">
        <input
         class="border-1 border-gray-300 rounded mt-2 p-1 focus:bg-gray-200"
         v-model="newBookTitle"
         type="text"/>
        <button
         class="border-1 border-gray-300 rounded bg-gray-300 mt-2 p-1 w-1/2 hover:bg-gray-400 cursor-pointer"
         type="submit">
         Hozzáadás
        </button>
    </form>


    <h2 v-if="incompleteBooks.length">Könyvek:</h2>
    <ul>
        <li v-for="book in incompleteBooks" :key="`book-${book.id}`">
        <input type="checkbox" v-model="book.is_completed">
        <span>{{ book.title }}</span>
        </li>
    </ul>

    <h2 class="mt-3" v-if="completeBooks.length">Elolvasott könyvek:</h2>
    <ul>
        <li v-for="book in completeBooks" :key="`book-${book.id}`">
            <input type="checkbox" v-model="book.is_completed">
            <span>{{ book.title }}</span>
        </li> 
    </ul>
</template>