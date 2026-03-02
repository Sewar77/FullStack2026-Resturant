export const errorHandler = (err, req, res, next) => {
    console.error("err: ", err)
    const status_code = err.statusCode || 500
    return res.status(status_code).json({
        success: false,
        message: err.message || "Internal server error"
    })
}