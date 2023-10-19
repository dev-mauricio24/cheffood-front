import axios from 'axios'

const API_URL = 'http://localhost:8080/api'

export const loginRequest = (user) => axios.post(`${API_URL}/auth/login`, user)  