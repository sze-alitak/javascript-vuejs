<script setup>
import TaskForm from '../components/TaskForm.vue'
import TaskFilter from '../components/TaskFilter.vue'
import TaskList from '../components/TaskList.vue'

import { useTasksStore } from '@/stores/tasks'
const tasksStore = useTasksStore()

import { onMounted } from 'vue'

onMounted(async () => {
  await tasksStore.loadData()
})
</script>

<template>
  <p v-if="tasksStore.loading">Betöltés…</p>
  <p v-else-if="tasksStore.error">{{ tasksStore.error }}</p>

  <TaskForm v-on:task-submit="tasksStore.add({title: $event.task_name})"></TaskForm>

  <TaskFilter v-model="tasksStore.selectedFilter"></TaskFilter>

  <TaskList
  :filteredTasks="tasksStore.filteredData"
  v-on:toggle="tasksStore.toggle"
  v-on:remove="tasksStore.remove"
  ></TaskList>
</template>
