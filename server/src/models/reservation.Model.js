import { pool } from "../config/db.js";

export const createReservation = async (
    userId,
    phone,
    full_name,
    email,
    guests_number,
    reservation_date,
    reservation_time,
    requests
) => {
    const result = await pool.query(
        `INSERT INTO reservation 
        (user_id, phone, full_name, email, guests_number, reservation_date, reservation_time, requests)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
        RETURNING *`,
        [
            userId,
            phone,
            full_name,
            email,
            guests_number,
            reservation_date,
            reservation_time,
            requests,
        ]
    );

    return result.rows[0];
};

export const getAllReservations = async () => {
    const result = await pool.query("SELECT * FROM reservation");
    return result.rows;
};