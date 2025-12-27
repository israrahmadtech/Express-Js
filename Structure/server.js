import express from 'express'
import { todosRouter } from './routes/todos.routes.js'

const app = express()
const PORT = 4000

app.use(express.json())

app.use('/todos', todosRouter)

app.use('/todos', todosRouter)


app.listen(PORT, () => {
    console.log(`Server is listening your request on port # ${PORT}`)
})
