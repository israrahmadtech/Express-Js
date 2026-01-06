const express = require('express')
const { registerRouter } = require('./routes/register.route.js')
const { loginRouter } = require('./routes/login.route.js')

const app = express()

app.use(express.json())
// Register Route
app.use('/register', registerRouter)

// Login Route
app.use('/login', loginRouter)

// Users Route
app.use('/users', () => {})

app.listen('4000', () => {
    console.log(`Server is listening your request on port # 4000`)
})
