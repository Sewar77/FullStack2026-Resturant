import { useEffect, useState } from "react"
import api from "../api"
import toast from "react-hot-toast"

export function useReservations() {
    const [reservations, setReservations] = useState([])
    const fetchReservations = async () => {
        const res = await api.get('/reservations')
        setReservations(res.data.reservations)
        toast.success(res.data.message)
    }
    const addNewReservations = async (userId,
        tableId,
        phone,
        full_name,
        email,
        guests_number,
        reservation_date,
        reservation_time,
        requests,
        status) => {
        const res = await api.post('/reservations', {
            userId,
            tableId,
            phone,
            full_name,
            email,
            guests_number,
            reservation_date,
            reservation_time,
            requests,
            status
        })
        setReservations(res.data.reservations)
        toast.success(res.data.reservations || "created done!")
    }
    useEffect(() => {
        fetchReservations()
    }, [])
    return { reservations, addNewReservations }
}