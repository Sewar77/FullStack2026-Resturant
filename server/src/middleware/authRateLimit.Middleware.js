import rateLimit from "express-rate-limit"


export const authRateLimit = rateLimit({
    windowMs: 60 * 1000 * 15,
    max: 35,
    message: {
        success: false,
        message: "Too many requests, plesae try again after 15 minutes"
    },
    standardHeaders: true,
    legacyHeaders: false
})