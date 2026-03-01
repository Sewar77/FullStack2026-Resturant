
export const managerOnly = (req, res, next) => {
    const role = req?.user?.role
    console.log(role)
    if (role !== "manager") {
        return res.status(403).json({ message: "Forbidden, you are not a manager" })
    }
    next()
}