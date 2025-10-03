<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
    tags: Array
})

const emit = defineEmits(['tag-selected'])

const activeTag = ref('all')

const tags = computed(() => ["all", ...new Set(props.tags)])

const selectTag = (tag) => {
    activeTag.value = tag
    emit('tag-selected', tag)
}
</script>

<template>
    <div class="flex gap-2 mb-2">
        <button 
        v-for="tag in tags" 
        class="border-1 p-1 hover:bg-gray-400 cursor-pointer"
        :class="{'bg-gray-200': activeTag === tag}"
        :key="`tag-${tag}`"
        type="button"
        v-on:click="selectTag(tag)"
        >
            {{ tag }}
        </button>
    </div>
</template>