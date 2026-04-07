import { asyncHandler } from "../middleware/asyncHandler.Middleware.js";
import { createReservation, getAllReservations } from "../models/reservation.Model.js";

export const createReservationsController = asyncHandler(async (req, res) => {
    const { userId,
        tableId,
        phone,
        full_name,
        email,
        guests_number,
        reservation_date,
        reservation_time,
        requests,
        status } = req.body
    try {
        const reservation = await createReservation(userId,
            tableId,
            phone,
            full_name,
            email,
            guests_number,
            reservation_date,
            reservation_time,
            requests,
            status)
        if (!reservation) {
            return res.status(400).json({ message: "Created failed" })

        }
        return res.status(201).json({ message: "Created successfullt", reservation })
    } catch (err) {
        return res.status(500).json({ message: "internal server rror" })
    }
})

export const getAllReservationsController = asyncHandler(async (req, res) => {
    try {
        const reservations = await getAllReservations()
        if (reservations.length === 0) {
            return res.status(200).json({ message: "No reservations yet", reservations: [] })
        }
        return res.status(200).json({ message: "reservations", reservations })

    } catch (err) {
        return res.status(500).json({ message: "internal server rror" })
    }
})