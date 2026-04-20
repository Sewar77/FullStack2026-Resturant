import { pool } from "../config/db.js";
//step two
export const getUserById = async (userid) => {
    const result = await pool.query(`select * from users where userid = 
        $1`, [userid])
    return result.rows[0]
}

export const findUserByEmail = async (email) => {
    const result = await pool.query(`select userid, name, email, hashed_password, role from users where email = 
        $1`, [email])
    return result.rows[0]
}

export const getAllUsers = async () => {
    const result = await pool.query(`select userid, name, email, role, created_at from users`)
    return result.rows
}

export const changePassword = async (userId, hashed_password) => {
    const result = await pool.query(`update users set hashed_password = $1 where userid = $2`, [hashed_password, userId])
    return result.rows[0]
}

export const updateUserById = async (userid, updatedFields) => {
    console.log("userid, name, email", userid, updatedFields);
    const result = await pool.query(`update users set name = $1, 
        email = $2
        where userid = $3 returning userid, name, email
        `, [updatedFields.name, updatedFields.email, userid])
    console.log("here");

    return result.rows[0]
}

export const deleteUserById = async (userid) => {
    console.log(userid);

    await pool.query(`delete from users where userid=$1`, [userid])
}


export const saveRefreshToken = async (userid, refreshToken) => {
    await pool.query(`update users set refresh_token = $1 where userid = $2`, [refreshToken, userid])
}


