<script setup>
import { ref, computed, onMounted } from 'vue'
import CreateSimple from '@/components/CreateSimple.vue'
import List from '@/components/List.vue'
import useApi from '@/composables/useApi'

const { data: todos, fetchData, addItem } = useApi('todo')

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

const incompleteTodos = computed(() => todos.value.filter(todo => !todo.is_completed))
const completeTodos = computed(() => todos.value.filter(todo => todo.is_completed))
</script>

<template>
    <CreateSimple title="Todo hozzáadása" v-on:add="add"/>

    <List title="Todos" route-prefix="todo" :data="incompleteTodos" v-if="incompleteTodos.length" />
    <List title="Elolvasott todo" route-prefix="todo" :data="completeTodos" v-if="completeTodos.length" />
</template>