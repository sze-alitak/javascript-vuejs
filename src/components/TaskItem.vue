<script setup>
defineProps({
    task: {},
})
const emit = defineEmits(['toggle', 'remove'])
</script>

<template>
    <li>
      <span>
        {{ task.id }} - {{ task.title }} {{ task.is_completed ? '- DONE' : ''}}
      </span>
      <button type="button" v-on:click="emit('toggle', task.id)">{{ task.is_completed ? 'Újranyit' : 'Lezár' }}</button>
      <button type="button" v-on:click="emit('remove', task.id)">DEL</button>
    </li>
</template>
