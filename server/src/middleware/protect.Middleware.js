import jwt from "jsonwebtoken"

export const protect = (req, res, next) => {
    let token = req.cookies.token || req.headers.authorization?.split(" ")[1]
    console.log(token)
    if (!token) {
        return res.status(401).json({ message: "Unautherized, no token" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECERET)
        req.user = decoded
        console.log(req.user)
        next()
    }
    catch (err) {
        return res.status(500).json({ message: "internal server error in tokens" })
    }
}