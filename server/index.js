import connectDB from "./src/config/db.js";
import dotenv from 'dotenv'
import authRoutes from "./src/routes/auth.Routes.js"
import express from 'express'
import { errorHandler } from "./src/middleware/errorHandler.Middleware.js";
import cors from "cors"
import helmet from "helmet"
dotenv.config()
connectDB()

const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors({
    origin: "http://localhost:5000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))

app.use('/api', authRoutes)

app.use(errorHandler)
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})