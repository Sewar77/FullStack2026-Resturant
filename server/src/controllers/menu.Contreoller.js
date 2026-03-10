import { getAllMenuItems, getMenuItem } from "../models/menu.Model.js";
import { asyncHandler } from "../middleware/asyncHandler.Middleware.js"


export const getAllMenuItemsController = asyncHandler(async (req, res) => {
    try {
        const result = await getAllMenuItems()
        if (result.length === 0) {
            return res.status(200).json({ message: "No Mneu Item Yet. ", menu: [] })
        }
        return res.status(200).json({ message: "Happy meal!", menu: result })
    } catch (err) {
        throw err
    }
})

export const getMenuItemController = asyncHandler(async (req, res) => {
    const menuId = req.params
    try {
        const result = await getMenuItem(menuId)
        if (result.length === 0) {
            return res.status(404).json({ message: "Not Found " })
        }
        return res.status(200).json({ message: "Happy meal!", menu: result })
    } catch (err) {
        throw err
    }
})