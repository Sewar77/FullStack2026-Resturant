import bcrypt from "bcryptjs";
import { createUser } from "../models/auth.Model.js";
import { findUserByEmail, getUserById, saveRefreshToken } from "../models/user.Model.js";
import { generateAccessTokens, generateRefreshTokens, verifyRefreshTokens } from "../utils/tokens.utils.js";
import { setAccessTokenCookie, setRefreshTokenCookie } from "../utils/cookies.utils.js";
import { asyncHandler } from "../middleware/asyncHandler.Middleware.js";

export const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.validateData;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const existedUser = await findUserByEmail(email);
    if (existedUser) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser(name, email, hashedPassword, "user");

    if (!newUser) return res.status(400).json({ message: "Failed to create user" });

    res.status(201).json({ message: "User created successfully", user: { userid: newUser.userid, name, email, role: "user" } });
});

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.validateData;

    if (!email || !password) return res.status(400).json({ message: "All fields are required" });

    const user = await findUserByEmail(email);
    if (!user) return res.status(400).json({ message: "User not registered" });

    const isMatch = await bcrypt.compare(password, user.hashed_password);
    if (!isMatch) return res.status(400).json({ message: "Email or password incorrect" });

    const accessToken = generateAccessTokens(user);
    const refreshToken = generateRefreshTokens(user);

    await saveRefreshToken(user.userid, refreshToken);

    setAccessTokenCookie(res, accessToken);
    setRefreshTokenCookie(res, refreshToken);

    res.status(200).json({
        message: "Logged in successfully",
        user: { userid: user.userid, name: user.name, email: user.email, role: user.role }
    });
});

export const logout = asyncHandler(async (req, res) => {
    const token = req.cookies.refreshTokens;

    if (!token) return res.status(400).json({ message: "No refresh token provided" });

    const decoded = verifyRefreshTokens(token);
    await saveRefreshToken(decoded.userid, null);

    res.clearCookie("accessToken");
    res.clearCookie("refreshTokens");

    res.status(200).json({ message: "Logged out successfully" });
});

export const currentUser = asyncHandler(async (req, res) => {
    const userId = req.user.userid;

    const me = await getUserById(userId);
    if (!me) return res.status(404).json({ message: "User not found" });

    return res.status(200).json({ message: "User fetched successfully", me });
});