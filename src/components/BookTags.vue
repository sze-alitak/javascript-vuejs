<script setup>
import { computed } from 'vue'

const props = defineProps({
    initialTags: Array,
    activeTag: String,
})

const emit = defineEmits(['tag-selected'])

const tags = computed(() => ["all", ...new Set(props.initialTags)])

const selectTag = (tag) => {
    emit('tag-selected', tag)
}
</script>

<template>
    <div class="flex gap-2 mb-2">
        <button 
        v-for="tag in tags" 
        class="border-1 p-1 hover:bg-gray-400 cursor-pointer"
        :class="{'bg-gray-200': props.activeTag === tag}"
        :key="`tag-${tag}`"
        type="button"
        v-on:click="selectTag(tag)"
        >
            {{ tag }}
        </button>
    </div>
</template>