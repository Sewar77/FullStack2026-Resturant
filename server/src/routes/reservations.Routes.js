import { acceptReservationController, createReservationsController, getAllReservationsController, rejectReservationController, userReservationsController } from '../controllers/reservations.Controller.js';
import { managerOnly } from '../middleware/managerOnly.Middleware.js';
import { protect } from "../middleware/protect.Middleware.js"

import express from 'express'

const router = express.Router();

router.get("/reservations", protect, getAllReservationsController)
router.get("/myreservations", protect, userReservationsController)
router.post("/reservation", protect, createReservationsController)
router.put('/reservation/reject/:id', protect, managerOnly, rejectReservationController)
router.put('/reservation/approve/:id', protect, managerOnly, acceptReservationController)
export default router