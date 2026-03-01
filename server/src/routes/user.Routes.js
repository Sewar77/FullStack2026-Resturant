import { getAllUsersController, getUserByIdController, findUserByEmailController } from '../controllers/user.Controller.js'
import { managerOnly } from '../middleware/managerOnly.Middleware.js';
import { protect } from "../middleware/protect.Middleware.js"

import express from 'express'

const router = express.Router();

router.get("/user/:id", protect, getUserByIdController)
router.get("/users", protect, managerOnly, getAllUsersController)
router.post("/user/email", protect, findUserByEmailController)
export default router