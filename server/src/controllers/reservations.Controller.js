import { asyncHandler } from "../middleware/asyncHandler.Middleware.js";
import { acceptReservation, createReservation, getAllReservations, rejectReservation, updateReservation, userReservations } from "../models/reservation.Model.js";
import { updateTable } from "../models/tables.Model.js"
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
    console.log("req.user new", req.user);
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
export const userReservationsController = asyncHandler(async (req, res) => {
    const userId = req.user.userid;
    console.log("reservatuin user id", userId);
    try {
        const reservations = await userReservations(userId)

        if (!reservations) {
            return res.status(200).json({ message: "you dont have any resevations yet", reservations: [] })
        }
        return res.status(200).json({ message: "gets reservations successfully", reservations: reservations })
    } catch (err) {
        return res.status(500).json({ message: "internal server error" })
    }
})

export const acceptReservationController = asyncHandler(async (req, res) => {
    const resId = req.params.id;
    console.log(resId);

    try {
        const table = await acceptReservation(resId);

        if (!table) {
            return res.status(200).json({
                message: "No available table",
                reservations: []
            });
        }
        const updatedReservation = await updateReservation(resId, table.id);
        const updatedTable = await updateTable(table.id);

        return res.status(200).json({
            message: "approved",
            reservation: updatedReservation,
            table: updatedTable
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "internal server error" });
    }
});


export const rejectReservationController = asyncHandler(async (req, res) => {

    const resId = req.params.id
    console.log("resId", resId);
    try {
        const reject = "rejected"
        const rejected = await rejectReservation(resId, reject);
        console.log(rejected);

        if (rejected.length === 0) {
            return res.status(400).json({ message: "could not reject" });
        }
        return res.status(200).json({ message: "reservation reejcted", reservation: rejected });

    } catch (err) {
        return res.status(500).json({ message: "internal server error" });
    }
})