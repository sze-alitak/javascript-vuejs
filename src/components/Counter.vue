<script setup>
const count = defineModel()

count.value=1000
</script>

<template>
    <button type="text" v-on:click="count--">-</button>
    <span>{{ count }}</span>
    <button type="text" v-on:click="count++">+</button>
</template>