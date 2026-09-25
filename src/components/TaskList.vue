<script setup>
import TaskItem from './TaskItem.vue'

defineProps({
    filteredTasks: {},
})
const emit = defineEmits(['toggle', 'remove'])
</script>

<template>
  <p v-if="filteredTasks.length == 0">
    No tasks
  </p>
  <ul v-else>
    <TaskItem
     v-for="task in filteredTasks"
      :id="task.id"
      :task
      v-on:toggle="emit('toggle', $event)"
      v-on:remove="emit('remove', $event)"
      >
    </TaskItem>
  </ul>
</template>
