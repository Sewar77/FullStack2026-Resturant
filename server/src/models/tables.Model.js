import { pool } from "../config/db.js";

export const createTable = async (table_number, capacity, floor) => {
    const result = await pool.query(
        `insert into tables (table_number, capacity, floor) values($1, $2, $3) returning *`,
        [table_number, capacity, floor]
    );
    return result.rows[0];
}

export const getAllTables = async () => {
    const result = await pool.query(`select * from tables`)
    return result.rows
}

export const getTableById = async (tableId) => {
    const result = await pool.query(`select * from tables where id = $1`, [tableId])
    return result.rows[1]
}

export const getTableByNumber = async (table_number) => {
    const result = await pool.query(`select * from tables where table_number = $1`, [table_number])
    return result.rows[1]
}