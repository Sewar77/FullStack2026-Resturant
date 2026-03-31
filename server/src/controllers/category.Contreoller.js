import { createCategory, getAllCategories, getCategory } from "../models/category.Model.js"
import { asyncHandler } from "../middleware/asyncHandler.Middleware.js"

export const getAllCategoriesController = asyncHandler(async (req, res) => {
    try {
        const result = await getAllCategories()
        if (result.length === 0) {
            return res.status(200).json({ message: "No Categories Yet. ", categories: [] })
        }
        return res.status(200).json({ message: "Happy meal!", categories: result })
    } catch (err) {
        throw err
    }
})

export const getCategoryController = asyncHandler(async (req, res) => {
    const catId = req.params
    try {
        const result = await getCategory(catId)
        if (result.length === 0) {
            return res.status(404).json({ message: "Not Found " })
        }
        return res.status(200).json({ message: "Happy meal!", menu: result })
    } catch (err) {
        throw err
    }
})

export const createCategoryController = asyncHandler(async (req, res) => {
    const { name, description } = req.body
    try {
        const result = await createCategory({ name, description })
        if (result.length === 0) {
            return res.status(404).json({ message: "Not Found " })
        }
        return res.status(200).json({ message: "Happy meal!", menu: result })
    } catch (err) {
        throw err
    }
})