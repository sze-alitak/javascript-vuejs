import axios from 'axios'

export default axios.create({
    baseURL: 'http://95.138.193.252:32028',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 1000,
})
