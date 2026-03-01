import jwt from "jsonwebtoken"

export const protect = (req, res, next) => {
    let token = req.cookie.token || null

    if (!token) {
        return res.status(401).json({ message: "Unautherized, no token" })
    }
    try {
        const decoded = jwt.verify(token, proces.env.JWT_SECERET)
        req.user = decoded
        next()
    }
    catch (err) {
        return res.status(500).json({ message: "internal server error" })
    }
}