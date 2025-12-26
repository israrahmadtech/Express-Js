import express from "express"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const userRoutes = express.Router()

userRoutes.get('/profile', authMiddleware, (req, res) => {
    res.json({
        message: "User profile data",
        user: req.user
    })
})

userRoutes.get('/dashboard', authMiddleware, (req, res) => {
    res.json({
        message: "User dashboard",
        name: req.user?.name
    })
})

export default userRoutes
