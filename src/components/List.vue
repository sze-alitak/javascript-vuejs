<script setup>
import { ref, computed } from 'vue'
import Tags from '@/components/Tags.vue'

const emit = defineEmits(['update-entry', 'delete-entry'])

const props = defineProps({
    title: String,
    data: Array,
    routePrefix: String,
})

const activeTag = ref('all')

const dataFiltered = computed(() => {
    return props.data.filter(entry => activeTag.value === 'all' || entry.tag === activeTag.value)
})

function updateEntry(entry) {
    entry.completed = !entry.completed
    emit('update-entry', entry)
}

function deleteEntry(id) {
    emit('delete-entry', id)
}
</script>

<template>
    <h2 class="font-bold text-lg">{{ title }}:</h2>
    
    <Tags
     :initialTags="props.data.map(entry => entry.tag)"
     v-model="activeTag"
     />

    <ul>
        <li v-for="entry in dataFiltered" :key="`entry-${entry.id}`"
         class="flex items-center">
            <RouterLink :to="`/${routePrefix}/${entry.id}/edit`" class="mr-auto">
                <span>{{ entry.title }}</span>
            </RouterLink>
            <input type="checkbox" :checked="entry.completed" v-on:change="updateEntry(entry)">
            <button
                v-on:click="deleteEntry(entry.id)"
                class="cursor-pointer ml-2"
                type="submit"
            >
                X
            </button>
        </li>
    </ul>
</template>
