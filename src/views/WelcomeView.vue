<script setup>
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>


<template>
    <h1>welcome</h1>

    <h2>
        Counter: {{ counterStore.count }}
        <button @click="counterStore.increment">Increment</button>
        <button @click="counterStore.decrement">Decrement</button>
    </h2>
</template>