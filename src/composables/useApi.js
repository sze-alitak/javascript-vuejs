import { ref } from 'vue'
import axios from '@/services/http'

export default function useApi(type) {
    const data = ref([])

    const fetchData = () => {
        axios.get(`/${type}/`)
        .then(res => {
                data.value = res.data
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

    return {
        data,
        fetchData,
        addItem,
    }
}
