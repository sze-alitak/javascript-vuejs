<script setup>











import { defineProps, defineEmits } from 'vue'

defineProps({
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const add = (e) => {
    emit('update:modelValue', e.target.value)
}
</script>

<template>
    <input
        class="border-1 border-gray-300 rounded mt-2 p-1 focus:bg-gray-200"
        :value="modelValue"
        v-on:change="add"
        type="text"/>
</template>