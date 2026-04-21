import axios from "axios"

const api = axios.create({
    baseURL: "https://fullstack2026-resturant-3.onrender.com/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

export default api