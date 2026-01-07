import express from "express"
import { getUsers } from "../controllers/users.controller.js"

export const usersRouter = express.Router()

// Get Users
usersRouter.get('/', getUsers)