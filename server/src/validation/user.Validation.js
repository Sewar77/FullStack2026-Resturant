import Joi from 'joi'

export const registerSchema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
        "string.min": "Name must be at least 3 characters",
        "string.max": "Name must be at most 100 charecter",
        "string.required": "Name is required",
        "string.empty": "Name is required"
    }),
    email: Joi.string().min(6).max(255).email().required()
        .messages({
            "string.min": "Email must be at least 6 characters",
            "string.max": "Email must be at most 255 charecter",
            "string.required": "Email is required",
            "string.empty": "Email is required",
            "string.email": "Email must be a valid email address"
        }),
    password: Joi.string().min(6).max(1024).pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/).required()
        .messages({
            "string.min": "Password must be at least 6 characters",
            "string.max": "Password must be at most 1024 charecter",
            "string.required": "Passsword is required",
            "string.empty": "Passsword is required",
            "string.pattern.base": "Password should contain at least one upper case letter and one lower case letter, and numbers, and at least on special charecter"
        }),
    role: Joi.string().valid("user", "manager", "employee").default("user").required().messages({
        "string.valid": "Role must be either user or employee",
        "string.required": "Role is required",
        "string.empty": "Role is required"
    })
})
