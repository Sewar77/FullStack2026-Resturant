import { protect } from "../middleware/protect.Middleware.js"
import express from 'express'
import { createCategoryController, getAllCategoriesController, getCategoryController } from "../controllers/category.Contreoller.js";
const router = express.Router();

router.get("/category/:id", protect, getCategoryController)
router.get("/categories", protect, getAllCategoriesController)
router.post('/category', createCategoryController)
export default router