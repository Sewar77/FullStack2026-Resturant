import { register } from "../controllers/auth.Controller.js";
import { registerSchema } from "../validation/user.Validation.js";
import { validate } from "../middleware/validate.Middleware.js";
import express from 'express'

const router = express.Router();

router.post("/auth/register", validate(registerSchema), register)

export default router