const baseUrl = 'https://zh.alitak.energo.cloud/api/aap748'

async function request(url, method = 'GET', data, token) {
    const options = {method}
    options.headers = {}
    if (data !== undefined) {
        options.headers = {'Content-Type': 'application/json'}
        options.body = JSON.stringify(data)
    }

    if (token !== undefined) {
        options.headers['Authorization'] = `Bearer ${token}`
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

export function authApi(){
    const resourceUrl = `${baseUrl}/auth`

    return {
        async login(username, password) {
            // const credentials = {
            //     "username": username,
            //     "password": password
            // }
            // const response = await request(`${resourceUrl}/login`, 'POST', credentials)
            // return response.json()  
                      console.log("api login")
            return (await request(`${resourceUrl}/login`, 'POST', {"username": username, "password": password})).json()            
        },

        async me(token) {
            return await request(`${resourceUrl}/me`, 'GET', undefined, token ).json()            
        },

        async logout(token) {
            console.log(token)
            await request(`${resourceUrl}/logout`, 'POST', undefined, token )
        }
    }
}

