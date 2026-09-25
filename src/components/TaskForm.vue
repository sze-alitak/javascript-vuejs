<script setup>
import { ref } from 'vue'

const emit = defineEmits(['taskSubmit'])
let error_message = ref('')
let new_task = ref('')

function addTask() {
    new_task.value = new_task.value.trim()
    if (new_task.value == '') {
      error_message.value = 'Nem lehet üres feladat'
      return
    }

    emit('taskSubmit', {task_name: new_task.value})
    
    new_task.value = ''
    error_message.value = ''
}
</script>

<template>
    <form v-on:submit.prevent="addTask" style="margin-bottom: 20px">
        <input v-model="new_task">
        <button type="submit">Create</button>
        <h5 v-if=error_message>{{ error_message }}</h5>
    </form>
</template>
