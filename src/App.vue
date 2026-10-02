<script setup>
import TaskForm from './components/TaskForm.vue'
import TaskFilter from './components/TaskFilter.vue'
import TaskList from './components/TaskList.vue'

import { useData } from './composables/useData.js'
import { onMounted } from 'vue'

const {
  data: tasks, 
  filteredData: filteredTasks, 
  selectedFilter: selectedFilter, 
  add: addTask, 
  remove: removeTask, 
  toggle: toggleTask,
} = useData()

const {
  data: movies, 
  filteredData: filteredMovies, 
  selectedFilter: selectedFilterMovies, 
  add: addMovie,
  remove: removeMovie,
  toggle: toggleMovie,
} = useData()


onMounted(() => {
  tasks.value = [
        {id: 1, title: 'Task manager alapok', 'is_completed': false},
        {id: 2, title: 'Task listázás', 'is_completed': true},
        {id: 3, title: 'Task létrehozás', 'is_completed': false},
    ]

   movies.value = [
        {id: 1, title: 'Mátrix', 'is_completed': false},
        {id: 2, title: 'Gyűrűk ura', 'is_completed': true},
    ]
})
</script>

<template>
  <TaskForm v-on:task-submit="addTask"></TaskForm>

  <TaskFilter v-model="selectedFilter"></TaskFilter>

  <TaskList
  :filteredTasks="filteredTasks"
  v-on:toggle="toggleTask"
  v-on:remove="removeTask"
  ></TaskList>
  
  <hr>
  
  <TaskForm v-on:task-submit="addMovie"></TaskForm>

  <TaskFilter v-model="selectedFilterMovies"></TaskFilter>

  <TaskList
   :filteredTasks="filteredMovies"
   v-on:toggle="toggleMovie"
   v-on:remove="removeMovie"
   ></TaskList>

</template>
