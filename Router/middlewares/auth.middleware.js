import { users } from "../data.js"

export function authMiddleware(req, res, next){
    const token = req.query.token

    if(!token) return res.status(401).json({message: "Token missing"})

    const user = users.find(u => u.token === token)

    if(!user) return res.status(401).json({message: "Invalid token"})

    req.user = user
    next()
}
