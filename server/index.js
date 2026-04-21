import connectDB from "./src/config/db.js";
import dotenv from 'dotenv'
import authRoutes from "./src/routes/auth.Routes.js"
import express from 'express'
import { errorHandler } from "./src/middleware/errorHandler.Middleware.js";
import cors from "cors"
import userRoutes from "./src/routes/user.Routes.js"
import helmet from "helmet"
import { globalRateLimit } from "./src/middleware/globalRateLimit.Middleware.js";
import bodyPrser from "body-parser"
import cookieParser from "cookie-parser";
import menuRoutes from "./src/routes/menu.Routes.js"
import categoryRoutes from "./src/routes/category.Routes.js"
import tablesRoutes from "./src/routes/tables.Routes.js"
import reservationsRoutes from "./src/routes/reservations.Routes.js"
import productsRoutes from "./src/routes/products.Routes.js"
dotenv.config()
const app = express()
app.use(express.json())
connectDB()
app.use(globalRateLimit)
app.use(helmet())
app.use(cors({
    origin: "https://full-stack2026-resturant-rgmd1m1in-sewar77s-projects.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))
app.use(cookieParser())
app.use(bodyPrser.urlencoded({ extended: true }))
//step fifth 
app.use('/api', authRoutes)
app.use("/api", userRoutes)
app.use('/api', menuRoutes)
app.use('/api', categoryRoutes)
app.use('/api', tablesRoutes)
app.use('/api', reservationsRoutes)
app.use('/api', productsRoutes)
app.use(errorHandler)


app.get("/health", (req, res) => {
    res.send("alive");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
});
