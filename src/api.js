import axios from 'axios'

const api_poke = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api_poke