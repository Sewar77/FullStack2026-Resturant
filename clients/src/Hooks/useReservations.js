import { useEffect, useState } from "react";
import api from "../api";
import toast from "react-hot-toast";

export function useReservations() {
    const [reservations, setReservations] = useState([]);

    const fetchReservations = async () => {
        try {
            const res = await api.get("/reservations");
            setReservations(res.data.reservations);
        } catch (err) {
            toast.error("Failed to fetch reservations");
        }
    };

    const addNewReservations = async (reservation) => {
        try {
            const res = await api.post("/reservation", reservation);
            setReservations((prev) => [...prev, res.data.reservation]);
            toast.success(res.data.message);
        } catch (err) {
            toast.error(err.response?.data?.message || "Error creating reservation");
        }
    };

    useEffect(() => {
        fetchReservations();
    }, []);

    return { reservations, addNewReservations };
}