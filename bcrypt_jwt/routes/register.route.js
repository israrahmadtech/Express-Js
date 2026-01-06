import { registerUser } from "../controllers/register.controller.js"
import express from "express"

export const registerRouter = express.Router()

registerRouter.get("/", registerUser)

registerRouter.post("/", registerUser)

/*
{
  "name": "Israr Ahmad",
  "email": "israr@ahmad.com",
  "password": "israr123",
  "username": "israrahmad123"
}
*/