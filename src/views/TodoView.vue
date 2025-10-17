<script setup>
import { ref, computed } from 'vue'
import CreateSimple from '@/components/CreateSimple.vue'
import List from '@/components/List.vue'

const todos = ref([
    {
        "id": 1,
        "title": "Rounting alapok",
        "is_completed": false,
        "tag": "routing",
    },
    {
        "id": 2,
        "title": "Axios, async/await",
        "is_completed": false,
        "tag": "axios",
    },
])

function add(title) {
    todos.value.push({
        "id": todos.value.length + 1,
        "title": title,
        "is_completed": false,
        "tag": "todo",
    })
}

const incompleteTodos = computed(() => todos.value.filter(todo => !todo.is_completed))
const completeTodos = computed(() => todos.value.filter(todo => todo.is_completed))
</script>

<template>
    <CreateSimple title="Todo hozzáadása" v-on:add="add"/>

    <List title="Todos" route-prefix="todo" :data="incompleteTodos" v-if="incompleteTodos.length" />
    <List title="Elolvasott todo" route-prefix="todo" :data="completeTodos" v-if="completeTodos.length" />
</template>