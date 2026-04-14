import { useEffect, useState } from "react"
import api from "../api"
import toast from "react-hot-toast"

export function useTables() {
    const [tables, setTables] = useState([])

    //get all tables
    const fetchtables = async () => {
        const res = await api.get('/tables')
        setTables(res.data.tables)
        toast.success(res.data.message)
    }
    //create new table
    const addNewTable = async (newTable) => {
        try {
            const res = await api.post('/table', newTable)
            console.log(newTable);
            await fetchtables()
            setTables(res.data.tables)
            toast.success(res.data.message || "created done!")
        } catch (err) {
            console.log(err);

        }

    }
    const updateAvilability = async (tableId) => {
        try {
            const res = await api.put(`/table/avilability/${tableId}`)
            setTables(res.data.table)
            await fetchtables()
            toast.success("updated done!")
        } catch (err) {
            console.log(err);

        }
    }
    useEffect(() => {
        fetchtables()
    }, [])
    return { tables, addNewTable, updateAvilability }
}