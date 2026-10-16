<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useData } from '@/composables/useData'

const route = useRoute()

const {data: tasks} = useData()

const task = computed(() => tasks.value.find(task => task.id == route.params.id))

</script>

<template>
{{ task }}


</template>