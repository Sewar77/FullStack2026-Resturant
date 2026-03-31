import { getAllUsers, getUserById, findUserByEmail, deleteUserById, updateUserById } from "../models/user.Model.js";
import { asyncHandler } from "../middleware/asyncHandler.Middleware.js";
export const getUserByIdController = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await getUserById(userId)
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        return res.status(200).json({ message: "user found seccessffully ", user })
    } catch (err) {
        return res.status(500).json({ message: "internal server error by id" })
    }
})

export const getAllUsersController = asyncHandler(async (req, res) => {
    try {
        const users = await getAllUsers()
        if (users.length === 0) {
            return res.status(200).json({ message: "no users yet", users: [] })
        }
        return res.status(200).json({ message: "users found seccessffully ", users })
    } catch (err) {
        return res.status(500).json({ message: "internal server error in get all users" })
    }
})

export const findUserByEmailController = asyncHandler(async (req, res) => {
    const { email } = req.body
    try {
        const user = await findUserByEmail(email)
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        return res.status(200).json({ message: "user found seccessffully ", user })
    } catch (err) {
        return res.status(500).json({ message: "internal server error" })
    }
})

export const deleteUserByIdController = asyncHandler(async (req, res) => {
    const userid = req.params.id
    console.log("userid: ", userid)
    try {
        await deleteUserById(userid)
        return res.status(200).json({ message: "user deleted seccessffully " })
    } catch (err) {
        return res.status(500).json({ message: "internal server error" })
    }
})

export const updateUser = asyncHandler(async (req, res) => {
    const userId = req.user.id
    console.log(userId);
    const { name, email } = req.body
    try {
        if (!name && !email) {
            return res.status(200).json({ message: "No Changes" })
        }
        const isExist = await findUserByEmail(email)
        if (isExist) {
            return res.status(400).json({ message: "You cant use this email, its already exist!" })
        }
        const user = await getUserById(userId)
        let updatedFields = {}
        if (name && name !== user.name) {
            updatedFields.name = name
        }
        if (email && email !== user.email) {
            updatedFields.email = email
        }
        if (Object.keys(updatedFields).length === 0) {
            return res.status(200).json({ message: "No Changes detected" })
        }
        await updateUserById(userId, updatedFields)
        return res.status(200).json({ message: "user updated seccessffully " })
    } catch (err) {
        return res.status(500).json({ message: "internal server error" })
    }
})














