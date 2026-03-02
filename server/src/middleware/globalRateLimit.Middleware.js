import rateLimit from "express-rate-limit"


export const globalRateLimit = rateLimit({
    windowMs: 60 * 1000 * 60,
    max: 500,
    message: {
        success: false,
        message: "Too many requests, plesae try again after an hour"
    },
    standardHeaders: true,
    legacyHeaders: false
})