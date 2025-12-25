const express = require('express')

const app = express()

const users = [
    {name: "Israr Ahmad", role: "admin"},
    {name: "Abuzar Afridi", role: "user"},
]

// MIDDLE WARES ........................
// Token base validation
function checkToken(req, res, next){
    const token = req.query.token
    console.log(token);

    if(!token) return res.status(401).json({message: "Token missing"}) // 401: Unauthorized
    else if(token !== '123') return res.status(401).json({message: "Incorrect token!"})

    next()
}
// Role base authentication
function isAdmin(req, res, next){
    const role = req.query.role
    if(role !== "admin") return res.status(403).json({message: "Access denied!"}) // 403: Forbidden

    next()
}
// Attach something to request
function attachUser(req, res, next){
    req.user = {
        id: 1,
        name: "Israr Ahmad",
        role: "Developer"
    }
    next()
}
app.use(checkToken)
// ROUTES ..............................
// Users
app.get('/users', (req, res) => {
    res.json(users)
})
// Admin
app.get('/admin', isAdmin, (req, res) => {
    res.send('Welcome to Admin Page!')
})
// Profile
app.get('/profile', attachUser, (req, res) =>{
    res.json(req.user)
})

app.listen('4000', () => {
    console.log("Server is listening your request on port 4000...");
})

