<script setup>
import TaskForm from '../components/TaskForm.vue'
import TaskFilter from '../components/TaskFilter.vue'
import TaskList from '../components/TaskList.vue'

import { useData } from '../composables/useData.js'
import { onMounted } from 'vue'

const {loadData, filteredData, loading, error,  selectedFilter,  add,  remove,  toggle} = useData()
onMounted(loadData)
</script>

<template>
  <p v-if="loading">Betöltés…</p>
  <p v-else-if="error">{{ error }}</p>

  <TaskForm v-on:task-submit="add"></TaskForm>

  <TaskFilter v-model="selectedFilter"></TaskFilter>

  <TaskList
  :filteredTasks="filteredData"
  v-on:toggle="toggle"
  v-on:remove="remove"
  ></TaskList>
</template>
