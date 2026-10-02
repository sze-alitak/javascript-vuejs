import { ref, computed } from 'vue'

export function useData() {
    let data = ref([])

    let newEntryId = data.value.length + 1
    let selectedFilter = ref('all')

    let filteredData = computed(() =>
        data.value.filter(
            (entry) => 
            (selectedFilter.value == 'all') ||
            (selectedFilter.value == 'completed' ? entry.is_completed : !entry.is_completed)
        )
    )

    function add(entry) {
        entry.value.push({
            id: newEntryId++,
            title: entry.entry_name,
            is_completed: false,
        })
    }

    let remove = (id) => {
        data.value = data.value.filter(entry => entry.id !== id)
    }

    let toggle = (id) => {
        const entry = data.value.find((entry) => entry.id == id)
        entry.is_completed = !entry.is_completed
    }

    return {data, filteredData, selectedFilter, add, remove, toggle}
}