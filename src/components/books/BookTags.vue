<script setup>
import { computed } from 'vue'

const props = defineProps({
    initialTags: Array,
})

const activeTag = defineModel()

const tags = computed(() => ["all", ...new Set(props.initialTags)])
</script>

<template>
    <div class="flex gap-2 mb-2">
        <button 
        v-for="tag in tags" 
        class="border-1 p-1 hover:bg-gray-400 cursor-pointer"
        :class="{'bg-gray-200': activeTag === tag}"
        :key="`tag-${tag}`"
        type="button"
        v-on:click="activeTag = tag"
        >
            {{ tag }}
        </button>
    </div>
</template>
