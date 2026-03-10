import { pool } from "../config/db.js"

export const getAllCategories = async () => {
    const result = await pool.query('SELECT catid, name, description, created_at FROM categories')
    return result.rows
}

export const getCategory = async (catId) => {
    const result = await pool.query('select * from categories where catid = $1', [catId])
    return result.rows[0]
}