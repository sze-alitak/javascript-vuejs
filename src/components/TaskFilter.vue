<script setup>
// import { ref } from 'vue'

// const props = defineProps({
//     selectedFilter : {type: String},
// })
// let taskFilter = ref(props.selectedFilter)
// const emit = defineEmits(['filter'])
const filter = defineModel()
</script>

<template>
  <div>
    <label for="selectedFilter" style="margin-right: 10px">Szűrő</label>
    <select name="selectedFilter" id="selectedFilter" v-model="filter">
    <!-- <select name="selectedFilter" id="selectedFilter" v-model="taskFilter" v-on:change="emit('filter', selectedFilter)"> -->
      <option value="all">Összes</option>
      <option value="active">Aktív</option>
      <option value="completed">Kész</option>
    </select>
  </div>
</template>
