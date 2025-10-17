<script setup>
import { ref, computed } from 'vue'
import Tags from '@/components/Tags.vue'

const props = defineProps({
    title: String,
    data: Array,
    routePrefix: String,
})

const activeTag = ref('all')

const dataFiltered = computed(() => {
    return props.data.filter(entry => activeTag.value === 'all' || entry.tag === activeTag.value)
})
</script>

<template>
    <h2 class="font-bold text-lg">{{ title }}:</h2>
    
    <Tags
     :initialTags="props.data.map(entry => entry.tag)"
     v-model="activeTag"
     />

    <ul>
        <li v-for="entry in dataFiltered" :key="`entry-${entry.id}`"
         class="flex items-center justify-between">
            <RouterLink :to="`/${routePrefix}/${entry.id}/edit`">
                <span>{{ entry.title }}</span>
            </RouterLink>
            <input type="checkbox" v-model="entry.is_completed">
        </li>
    </ul>
</template>
