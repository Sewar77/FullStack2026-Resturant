import { changeAvailabilityController, createTableController, getAllTablesController, getTableByIdController } from '../controllers/tables.Controller.js';
import { managerOnly } from '../middleware/managerOnly.Middleware.js';
import { protect } from "../middleware/protect.Middleware.js"

import express from 'express'

const router = express.Router();

router.get("/table/:id", protect, getTableByIdController)
router.get("/tables", protect, getAllTablesController)
router.post("/table", protect, managerOnly, createTableController)
router.put('/table/avilability/:id', protect, managerOnly, changeAvailabilityController)

export default router