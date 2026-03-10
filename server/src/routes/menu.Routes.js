import { protect } from "../middleware/protect.Middleware.js"
import express from 'express'
import { getAllMenuItemsController, getMenuItemController } from "../controllers/menu.Contreoller.js";

const router = express.Router();

router.get("/menu/:id", protect, getMenuItemController)
router.get("/menu", protect, getAllMenuItemsController)

export default router