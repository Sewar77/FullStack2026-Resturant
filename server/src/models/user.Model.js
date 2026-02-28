import { pool } from "../config/db.js";

export const getUserById = async (userid) => {
    const result = await pool.query(`select name, email, hashed_password, role from users where userid = 
        $1`, [userid])
    return result.rows[0]
}

export const findUserByEmail = async (email) => {
    const result = await pool.query(`select userid, name, email, hashed_password, role from users where email = 
        $1`, [email])
    return result.rows[0]
}

export const getAllUsers = async () => {
    const result = await pool.query(`select userid, name, email, role from users`)
    return result.rows
}

export const updateUserById = async (userid, name, email) => {
    const result = await pool.query(`update users set name = $1, 
        email = $2
        where userid = $2 returning userid, name, email
        `, [name, email, userid])
    return result.rows[0]
}

export const deleteUserById = async (userid) => {
    await pool.query(`delete from users where userid=$1`, [userid])
}


export const saveRefreshToken = async (userid, refreshToken) => {
    await pool.query(`update users set refresh_token = $1 where userid = $2`, [refreshToken, userid])
}