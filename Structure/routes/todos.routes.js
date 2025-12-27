import express from 'express'
import { createTodo, getTodos } from '../controllers/todos.controllers.js'
// const {getTodos, createTodo} = require('../controllers/todos.controllers.js')

export const todosRouter = express.Router()

// Get All Todos
todosRouter.get('/', getTodos)

// Create Todo
todosRouter.post('/', createTodo)
