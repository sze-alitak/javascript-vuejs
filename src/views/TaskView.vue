<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { useTasksStore } from '@/stores/tasks'

const route = useRoute()

const tasksStore = useTasksStore()


onMounted(async () => {
    tasksStore.loadData()
})

</script>

<template>
<!-- {{ task }} -->
</template>