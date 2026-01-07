import express from "express"
import { getNotes } from "../controllers/notes.controller.js"

export const notesRouter = express.Router()

notesRouter.get('/notes', getNotes)