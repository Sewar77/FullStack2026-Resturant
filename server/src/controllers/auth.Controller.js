import { createUser } from "../models/auth.Model.js";
import bcrypt from "bcryptjs"
import { findUserByEmail, saveRefreshToken } from "../models/user.Model.js";
import { generateRefreshTokens, verifyAccessToken, verifyRefreshTokens, generateAccessTokens } from "../utils/tokens.utils.js";
import { setAccessTokenCookie, setRefreshTokenCookie } from "../utils/cookies.utils.js";
import { asyncHandler } from "../middleware/asyncHandler.Middleware.js";

export const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.validateData
    try {
        const existedUser = await findUserByEmail(email)
        if (existedUser) {
            return res.status(400).json({ message: "email already exists" })
        }
        const hashed_password = await bcrypt.hash(password, 10)
        const newUser = await createUser(name, email, hashed_password, "user")
        console.log(newUser)
        if (!newUser) {
            return res.status(400).json({ message: "failed to create user" })
        }
        return res.status(201).json({ message: "user created successfully", user: newUser })
    }
    catch (err) {
        throw err
    }
})

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.validateData;
    console.log(email, password)
    try {
        if (!email || !password) {
            const error = new Error("all fields are required!")
            error.statusCode = 400
            throw error
        }
        const isUserExist = await findUserByEmail(email)
        if (!isUserExist) {
            const error = new Error("User not registered, please register to log in")
            error.statusCode = 400
            throw error
        }
        const isMatch = await bcrypt.compare(password, isUserExist.hashed_password)

        if (!isMatch) {
            const error = new Error("password or email is incorrect")
            error.statusCode = 400
            throw error
        }
        //generate tokens=> access, refresh
        const accessToken = generateAccessTokens(isUserExist)
        const refreshTokens = generateRefreshTokens(isUserExist)
        console.log(accessToken)
        //should store the refresh tokens in db
        await saveRefreshToken(isUserExist.userid, refreshTokens)
        //set tokens in cookies
        setAccessTokenCookie(res, accessToken)
        setRefreshTokenCookie(res, refreshTokens)

        return res.status(200).json({ message: "logged in successfully", user: { userid: isUserExist.userid, name: isUserExist.name, email: isUserExist.email, role: isUserExist.role } })
    }
    catch (err) {
        throw err
    }
})


export const refreshToken = async (req, res) => {
    const token = req.cookies.refreshTokens;
    try {
        if (!token) {
            return res.status(401).json({ message: "Unauthorized, no refresh token provided" })
        }
        const decoded = verifyRefreshTokens(token)

        const user = await findUserByEmail(decoded.email)
        if (!user) {
            return res.status(401).json({ message: "unautharized" })
        }

        const newAccessTokens = generateAccessTokens(user)

        setAccessTokenCookie(res, newAccessTokens)

        res.json({ message: "access tokens refreshed successfully" })
    }
    catch (err) {
        throw err
    }
}


export const logout = asyncHandler(async (req, res) => {
    const token = req.cookies.refreshTokens;
    try {
        if (!token) {
            return res.status(400).json({ message: "no refresh token provided" })
        }
        const decoded = verifyRefreshTokens(token)
        await saveRefreshToken(decoded.userid, null)
        res.clearCookie("accessToken")
        res.clearCookie("refreshTokens")
        return res.status(200).json({ message: "logged out successfully" })
    }
    catch (err) {
        throw err
    }
})