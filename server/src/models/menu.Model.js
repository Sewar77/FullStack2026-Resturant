import { pool } from "../config/db.js";

export const getAllMenuItems = async () => {
    const result = await pool.query('select * from menu')
    return result.rows
}

export const getMenuItem = async (menuId) => {
    const result = await pool.query('select * from menu where menuid = $1', [menuId])
    return result.rows[0]
}

export const createNewMenuItem = async () => {
    const result = await pool.query('insert into menu () values()')
    return result.rows
}

export const updateMenuItems = async () => {
    const result = await pool.query('update menu set name=1$ where menuid = ')
    return result.rows
}