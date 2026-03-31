import { useEffect, useState } from "react"
import api from "../api"
import toast from "react-hot-toast"

export function useCategories() {
    const [categories, setCategories] = useState([])
    const fetchCategories = async () => {
        const res = await api.get('/categories')
        setCategories(res.data.categories)
        toast.success(res.data.message)
    }
    const addNewCategory = async ({ name, description }) => {
        const res = await api.post('/category', { name, description })
        setCategories(res.data.categories)
        toast.success(res.data.categories || "created done!")
    }
    useEffect(() => {
        fetchCategories()
    }, [])
    return { categories, addNewCategory }
}