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
export const userReservations = async (userId) => {
    const result = await pool.query(`select * from reservation where user_id = $1 `, [userId])
    return result.rows
}
export const acceptReservation = async (resId) => {
    const reservation = (await pool.query(`select * from reservation where id = $1`, [resId])).rows[0]

    const tableRes = await pool.query(`select * from tables
         where isavailable = true  
        AND capacity >= $1
        order by capacity ASC
        LIMIT 1
        `, [reservation.guests_number])

    return tableRes.rows[0]

}

export const updateReservation = async (reservationId, tableId) => {
    console.log(reservationId, tableId);
    const result = await pool.query(`update reservation set status = $1, table_id= $2 where id = $3 returning * `, ["approved", tableId, reservationId])
    console.log(result);
    return result.rows[0]
}
export const getAllReservations = async () => {
    const result = await pool.query("SELECT * FROM reservation");
    return result.rows;
};


export const rejectReservation = async (resId, reject) => {
    console.log(resId, reject);

    const result = await pool.query(`update reservation set status = $1 where id = $2 returning *`, [reject, resId])
    console.log(result.rows);

    return result.rows[0]
}