<script setup>
import { ref, computed } from 'vue'
import TextInput from './TextInput.vue'
import BookTags from './BookTags.vue'

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

const newBookTitle = ref('')

function add() {
    books.value.push({
        "id": books.value.length + 1,
        "title": newBookTitle.value,
        "is_completed": false,
        "tag": "scifi",
    })
    newBookTitle.value = ''
}

const incompleteBooks = computed(() => books.value.filter(book => !book.is_completed))
const completeBooks = computed(() => books.value.filter(book => book.is_completed))
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

    <h2 v-if="incompleteBooks.length" class="font-bold text-lg">Könyvek:</h2>
    <BookTags
     :initialTags="books.map(book => book.tag)"
     :activeTag="activeTag"
     v-on:tag-selected="activeTag = $event"
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