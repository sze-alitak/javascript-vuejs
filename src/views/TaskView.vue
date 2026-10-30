<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useData } from '@/composables/useData'

const route = useRoute()

const {loadEntry} = useData()

const task = ref()

onMounted(async () => {
    task.value = await loadEntry(route.params.id)
})

</script>

<template>
{{ task }}
</template>