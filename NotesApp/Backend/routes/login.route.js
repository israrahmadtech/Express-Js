import express from "express"
import { loginUser } from "../controllers/login.controller.js"

export const loginRouter = express.Router()

// Login User
loginRouter.post('/', loginUser)