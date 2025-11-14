<script setup>
import { ref, computed } from 'vue'
import CreateSimple from '@/components/CreateSimple.vue'
import List from '@/components/List.vue'

import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()

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
<h2>
        Counter: {{ counterStore.count }}
        <button @click="counterStore.increment">Increment</button>
        <button @click="counterStore.decrement">Decrement</button>
    </h2>

    <CreateSimple title="Könyv hozzáadása" v-on:add="add"/>

    <!-- named route -->
    <!-- <RouterLink :to="{ name: 'books.edit', params: { id: 1 } }">Edit</RouterLink> -->

    <List title="Könyvek" route-prefix="books" :data="incompleteBooks" v-if="incompleteBooks.length" />
    <List title="Elolvasott könyvek" route-prefix="books" :data="completeBooks" v-if="completeBooks.length" />
</template>