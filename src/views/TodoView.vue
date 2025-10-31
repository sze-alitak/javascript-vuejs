<script setup>
import { ref, computed, onMounted } from 'vue'
import CreateSimple from '@/components/CreateSimple.vue'
import List from '@/components/List.vue'
import axios from 'axios'

const todos = ref([])

const fetchTodos = () => {
    axios.get('http://95.138.193.252:32028/todo/')
    .then(res => {
            todos.value = res.data
    })
    .catch(err => {
            console.log(err)
    })
}

function add(title) {
    axios.post('http://95.138.193.252:32028/todo/', {
        "title": title,
        "completed": false,
        "tag": "todo",
    })
    .then(res => {
        // fetchTodos()
        todos.value.push(res.data)
    })    
}

onMounted(() => {
   fetchTodos()
})

const incompleteTodos = computed(() => todos.value.filter(todo => !todo.is_completed))
const completeTodos = computed(() => todos.value.filter(todo => todo.is_completed))
</script>

<template>
    <CreateSimple title="Todo hozzáadása" v-on:add="add"/>

    <List title="Todos" route-prefix="todo" :data="incompleteTodos" v-if="incompleteTodos.length" />
    <List title="Elolvasott todo" route-prefix="todo" :data="completeTodos" v-if="completeTodos.length" />
</template>