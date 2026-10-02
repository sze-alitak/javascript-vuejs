<script setup>
import TaskForm from './components/TaskForm.vue'
import TaskFilter from './components/TaskFilter.vue'
import TaskList from './components/TaskList.vue'

import { useTasks } from './composables/useTasks'
const {filteredTasks, selectedFilter, addTask, removeTask, toggleTask} = useTasks()
</script>

<template>
  <TaskForm v-on:task-submit="addTask"></TaskForm>

  <TaskFilter v-model="selectedFilter"></TaskFilter>

  <TaskList
   :filteredTasks
   v-on:toggle="toggleTask"
   v-on:remove="removeTask"
   ></TaskList>
</template>
