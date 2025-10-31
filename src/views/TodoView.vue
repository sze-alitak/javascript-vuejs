<script setup>
import { computed, onMounted } from 'vue'
import CreateSimple from '@/components/CreateSimple.vue'
import List from '@/components/List.vue'
import useApi from '@/composables/useApi'

const { data: todos, fetchData, addItem, updateItem, deleteEntry } = useApi('todo')

function add(title) {
    addItem({
        "title": title,
        "completed": false,
        "tag": "todo",
    })
}

onMounted(() => {
   fetchData()
})
const incompleteTodos = computed(() => todos.value.filter(todo => !todo.completed))
const completeTodos = computed(() => todos.value.filter(todo => todo.completed))
</script>

<template>
    <CreateSimple title="Todo hozzáadása" v-on:add="add"/>

    <List title="Todos" route-prefix="todo" :data="incompleteTodos" v-if="incompleteTodos.length" v-on:update-entry="updateItem" v-on:delete-entry="deleteEntry"/>
    <List title="Elolvasott todo" route-prefix="todo" :data="completeTodos" v-if="completeTodos.length" v-on:update-entry="updateItem" v-on:delete-entry="deleteEntry"/>
</template>