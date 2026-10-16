<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    task: {},
})
const emit = defineEmits(['toggle', 'remove'])
</script>

<template>
    <li>
      <span>
        {{ task.id }} - 
        <!-- <RouterLink :to="`/tasks/${task.id}`">{{ task.title }}</RouterLink> -->
        <RouterLink :to="{name: 'tasks.show', params: {id: task.id}}">{{ task.title }}</RouterLink>
        {{ task.is_completed ? '- DONE' : ''}}
      </span>
      <button type="button" v-on:click="emit('toggle', task.id)">{{ task.is_completed ? 'Újranyit' : 'Lezár' }}</button>
      <button type="button" v-on:click="emit('remove', task.id)">DEL</button>
    </li>
</template>
