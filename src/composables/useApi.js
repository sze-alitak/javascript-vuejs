import { ref } from 'vue'
import axios from '@/services/http'

export default function useApi(type) {
    const data = ref([])
    const entry = ref({})

    const fetchData = () => {
        axios.get(`/${type}/`)
            .then(res => {
                    data.value = res.data
            })
            .catch(err => {
                    console.log(err)
            })
    }
    
    const viewItem = (id) => {
        axios.get(`/${type}/${id}`)
            .then(res => {
                entry.value = res.data
            })
            .catch(err => {
                console.log(err)
            })
    }

    const addItem = (item) => {
        axios.post(`/${type}/`, item)
            .then(res => {
                data.value.push(res.data)
            }) 
    }

    const updateItem = (item) => {
        return axios.put(`/${type}/${item.id}`, item)
            .then(res => {
                return fetchData()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteEntry = (id) => {
        if (!confirm('Biztos?')) {
            return
        }

        axios.delete(`/${type}/${id}`)
            .then(() => {
                fetchData()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return {
        data,
        entry,
        fetchData,
        viewItem,
        addItem,
        updateItem,
        deleteEntry,
    }
}
