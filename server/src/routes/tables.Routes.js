import { managerOnly } from '../middleware/managerOnly.Middleware.js';
import { protect } from "../middleware/protect.Middleware.js"

import express from 'express'

const router = express.Router();

router.get("/table/:id", protect)
router.get("/tables", protect, managerOnly)
router.post("/table", protect)

export default router