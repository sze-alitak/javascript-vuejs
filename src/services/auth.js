const baseUrl = 'https://zh.alitak.energo.cloud/api/aap748'

async function request(url, method = 'GET', data) {
    const options = {method}
    if (data !== undefined) {
        options.headers = {'Content-Type': 'application/json'}
        options.body = JSON.stringify(data)
    }

    const response = await fetch(url, options)
    if (!response.ok) {
        throw new Error('server error')
    }
    return response
}

export function createApi(resource) {
    const resourceUrl = `${baseUrl}/${resource}`

    return {
        async list() {
            const response = await request(resourceUrl)
            return response.json()
        },

        async get(id) {
            const response = await request(`${resourceUrl}/${id}`)
            return response.json()
        },

        async store(data) {
            const response = await request(resourceUrl, 'POST', data)
            return response.json()
        },

        async update(id, data) {
            const response = await request(`${resourceUrl}/${id}`, 'PUT', data)
            return response.json()
        },

        async destroy(id) {
            await request(`${resourceUrl}/${id}`, 'DELETE')
        },

    }
}
