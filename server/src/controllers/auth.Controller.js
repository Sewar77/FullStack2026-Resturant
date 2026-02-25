import { createUser } from "../models/auth.Model.js";
import bcrypt from "bcryptjs"
import { findUserByEmail } from "../models/user.Model.js";


export const register = async (req, res) => {
    const { name, email, password } = req.validateData
    console.log(req.validateData)
    try {
        const existedUser = await findUserByEmail(email)
        if (existedUser) {
            return res.status(400).json({ message: "email already exists" })
        }
        console.log(12)
        const hashed_password = await bcrypt.hash(password, 10)
        console.log(13)
        console.log(password)

        console.log(hashed_password)

        const newUser = await createUser(name, email, hashed_password, "{user}")
        console.log(newUser)

        if (!newUser) {
            return res.status(400).json({ message: "failed to create user" })
        }
        console.log(16)

        return res.status(201).json({ message: "user created successfully", user: newUser })
    }
    catch (err) {
        return res.status(500).json({ message: "internal server error, in register" })
    }
}