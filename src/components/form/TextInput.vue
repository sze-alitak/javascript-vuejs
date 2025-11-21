<script setup>
defineProps(['type'])
const modelValue = defineModel()
</script>

<template>
    <input
        class="border-1 border-gray-300 p-1 focus:bg-gray-200"
        v-model="modelValue"
        :type="type || 'text'"/>
</template>
