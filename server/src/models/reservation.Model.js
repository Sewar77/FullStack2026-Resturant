import { pool } from "../config/db.js";

export const createReservation = async (
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
) => {
    const result = await pool.query(
        `insert into reservation (  userId,
            tableId,
            phone,
            full_name,
            email,
            guests_number,
            reservation_date,
            reservation_time,
            requests,
            status) 
            values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *`,
        [userId,
            tableId,
            phone,
            full_name,
            email,
            guests_number,
            reservation_date,
            reservation_time,
            requests,
            status]
    );
    return result.rows[0];
};
