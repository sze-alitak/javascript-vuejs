const baseUrl = 'https://zh.alitak.energo.cloud/api/aap748'

export const api = {

    async list() {
        const response = await fetch(`${baseUrl}/tasks`)
        if (!response.ok) {
            throw new Error('server error')
        }
        return response.json()
    },
    
    async get(id) {
        const response = await fetch(`${baseUrl}/tasks/${id}`)
        if (!response.ok) {
            throw new Error('server error')
        }
        return response.json()
    },
    
    async store(data) {
        const response = await fetch(`${baseUrl}/tasks`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
        if (!response.ok) {
            throw new Error('server error')
        }
        return response.json()
    },

}
