import { login, register } from "../controllers/auth.Controller.js";
import { registerSchema, loginSchema } from "../validation/user.Validation.js";
import { validate } from "../middleware/validate.Middleware.js";
import { authRateLimit } from "../middleware/authRateLimit.Middleware.js";
import express from 'express'

const router = express.Router();

router.post("/auth/register", validate(registerSchema), authRateLimit, register)
router.post("/auth/login", validate(loginSchema), authRateLimit, login)

export default router