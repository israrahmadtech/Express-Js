import express from "express"
import { authMiddleware } from "../middlewares/auth.middleware.js"
import { roleMiddleware } from "../middlewares/role.middleware.js"
import { users } from "../data.js"

const adminRoutes = express.Router()

adminRoutes.get('/dashboard', authMiddleware, roleMiddleware, (req, res) => {
    res.json({
        message: "Admin dashboard",
        name: req.user.name
    })
})
adminRoutes.get('/stats', authMiddleware, roleMiddleware, (req, res) => {
    res.json({
        message: "Admin stats",
        usersCount: users?.length
    })
})

export default adminRoutes