<script setup>
const modelValue = defineModel()
</script>

<template>
    <input
        class="border-1 border-gray-300 rounded mt-2 p-1 focus:bg-gray-200"
        v-model="modelValue"
        type="text"/>
</template>
