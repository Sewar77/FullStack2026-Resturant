import { createProductsController } from '../controllers/products.Controller.js';
import { managerOnly } from '../middleware/managerOnly.Middleware.js';
import { protect } from "../middleware/protect.Middleware.js"

import express from 'express'

const router = express.Router();

router.post("/products", protect, managerOnly, createProductsController)

export default router