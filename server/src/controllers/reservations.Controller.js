import { asyncHandler } from "../middleware/asyncHandler.Middleware.js";
import { createReservation, getAllReservations } from "../models/reservation.Model.js";

export const createReservationsController = asyncHandler(async (req, res) => {
    const {
        phone,
        full_name,
        email,
        guests_number,
        reservation_date,
        reservation_time,
        requests,
    } = req.body;

    const userId = req.user.userid;
    console.log("req.user", req.user);
    try {
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if (!phone || !full_name || !email || !guests_number || !reservation_date || !reservation_time) {
            return res.status(400).json({ message: "All required fields must be filled" });
        }

        const reservation = await createReservation(
            userId,
            phone,
            full_name,
            email,
            guests_number,
            reservation_date,
            reservation_time,
            requests
        );

        return res.status(201).json({
            message: "Reservation created successfully",
            reservation,
        });
    } catch (err) {
        return res.status(500).json({ message: "internal server error" });
    }
});

export const getAllReservationsController = asyncHandler(async (req, res) => {
    const reservations = await getAllReservations();

    return res.status(200).json({
        message: reservations.length ? "Reservations fetched" : "No reservations yet",
        reservations,
    });
});