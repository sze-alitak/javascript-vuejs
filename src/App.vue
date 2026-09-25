<script setup>
import { ref, computed } from 'vue'

let tasks = ref([
  {id: 1, title: 'Task manager alapok', 'is_completed': false},
  {id: 2, title: 'Task listázás', 'is_completed': true},
  {id: 3, title: 'Task létrehozás', 'is_completed': false},
])

let newTaskId = tasks.value.length + 1
let error_message = ref('')
let new_task = ref('')
let selectedFilter = ref('all')

let filteredTasks = computed(() =>
  tasks.value.filter(
    (task) => 
      (selectedFilter.value == 'all') ||
      (selectedFilter.value == 'completed' ? task.is_completed : !task.is_completed)
  )
)

function addTask() {
  new_task.value = new_task.value.trim()

  if (new_task.value == '') {
    error_message.value = 'Nem lehet üres feladat'
    return
  }

  tasks.value.push({
    id: newTaskId++,
    title: new_task.value,
    is_completed: false,
  })

  new_task.value = ''
  error_message.value = ''
}

let removeTask = (id) => {
  tasks.value = tasks.value.filter(task => task.id !== id)
}

let toggleTask = (id) => {
  const task = tasks.value.find((task) => task.id == id)
  task.is_completed = !task.is_completed
}
</script>

<template>
  <form v-on:submit.prevent="addTask" style="margin-bottom: 20px">
    <input v-model="new_task">
    <button type="submit">Create</button>
    <h5 v-if=error_message>{{ error_message }}</h5>
  </form>

  <div>
    <label for="selectedFilter" style="margin-right: 10px">Szűrő</label>
    <select name="selectedFilter" id="selectedFilter" v-model="selectedFilter">
      <option value="all">Összes</option>
      <option value="active">Aktív</option>
      <option value="completed">Kész</option>
    </select>
  </div>

  <p v-if="filteredTasks.length == 0">
    No tasks
  </p>
  <ul v-else>
    <li v-for="task in filteredTasks" :id="task.id">
      <span>
        {{ task.id }} - {{ task.title }} {{ task.is_completed ? '- DONE' : ''}}
      </span>
      <button type="button" v-on:click="toggleTask(task.id)">{{ task.is_completed ? 'Újranyit' : 'Lezár' }}</button>
      <button type="button" v-on:click="removeTask(task.id)">DEL</button>
    </li>
  </ul>
</template>

<style scoped>

</style>
