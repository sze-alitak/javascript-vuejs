<script setup>
import { ref, computed } from 'vue'
import CreateSimple from '@/components/CreateSimple.vue'
import List from '@/components/List.vue'

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
    <CreateSimple title="Könyv hozzáadása" v-on:add="add"/>

    <List title="Könyvek" :data="incompleteBooks" v-if="incompleteBooks.length" />
    <List title="Elolvasott könyvek" :data="completeBooks" v-if="completeBooks.length" />
</template>