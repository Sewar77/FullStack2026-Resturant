import { pool } from "../config/db.js";
//crud => create,read,  update, delete,
export const createProducts = async ({ name, price, quantity }) => {
    const result = await pool.query(
        `insert into products (name, price, quantity) values($1, $2, $3) returning *`,
        [name, price, quantity]
    );
    return result.rows[0]; //first row (the only rwo)
};

export const getAllProducts = async () => {
    const result = await pool.query(`select * from products`)
    return result.rows //all rows
}