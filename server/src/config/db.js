import { Pool } from "pg";
import dotenv from 'dotenv'
dotenv.config()

const pool = new Pool({
    connectionString: process.env.connection_string
})



const connectDB = async () => {
    try {
        const client = await pool.connect();
        console.log("PostgreSQL connected successfully");
        client.release();
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1);
    }
};


export { connectDB, pool };