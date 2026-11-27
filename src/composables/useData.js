import { ref, computed } from 'vue'

export function useData(api) {
    let data = ref([])
    let selectedFilter = ref('all')
    let loading = ref(false)
    let error = ref('')

    async function loadData() {
        loading.value = true
        error.value = ''
        try {
            const dataList = await api.list()
            data.value = dataList
            return dataList
        } catch {
            error.value = 'Nem sikerült betölteni az adatokat!'
        } finally {
            loading.value = false
        }
    }

    async function loadEntry(id) {
        loading.value = true
        error.value = ''
        try {
            return await api.get(id)
        } catch {
            error.value = 'Nem sikerült betölteni az adatokat!'
        } finally {
            loading.value = false
        }
    }

    let filteredData = computed(() =>
        data.value.filter(
            (entry) =>
            (selectedFilter.value == 'all') ||
            (selectedFilter.value == 'completed' ? entry.is_completed : !entry.is_completed)
        )
    )

    async function add(entry) {
        await api.store(entry)
        loadData()
    }

    let remove = (id) => {
        data.value = data.value.filter(entry => entry.id !== id)
    }

    let toggle = (id) => {
        const entry = data.value.find((entry) => entry.id == id)
        entry.is_completed = !entry.is_completed
    }

    return {data, filteredData, loading, error, selectedFilter, loadData, add, remove, toggle, loadEntry}
}
