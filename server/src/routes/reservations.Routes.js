import { createReservationsController, getAllReservationsController, rejectReservationController } from '../controllers/reservations.Controller.js';
import { managerOnly } from '../middleware/managerOnly.Middleware.js';
import { protect } from "../middleware/protect.Middleware.js"

import express from 'express'

const router = express.Router();

router.get("/reservations", protect, getAllReservationsController)
router.post("/reservation", protect, createReservationsController)
router.put('/reservation/reject/:id', protect, managerOnly, rejectReservationController)
export default router