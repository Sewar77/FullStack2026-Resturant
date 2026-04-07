import { useEffect, useState } from "react"
import api from "../api"
import toast from "react-hot-toast"

export function useTables() {
    const [tables, setTables] = useState([])
    const fetchtables = async () => {
        const res = await api.get('/tables')
        setTables(res.data.tables)
        toast.success(res.data.message)
    }
    const addNewTable = async (table_number, capacity, floor) => {
        const res = await api.post('/category', table_number, capacity, floor)
        setTables(res.data.tables)
        toast.success(res.data.tables || "created done!")
    }
    useEffect(() => {
        fetchtables()
    }, [])
    return { tables, addNewTable }
}