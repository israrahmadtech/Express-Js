import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const jwt_secret_key = "my_super_secret_key_2026_notes_app"
import { readUsers } from "./json.controller.js"

// Login User
export async function loginUser(req, res) {
    const user = req.body    

    // fields exists or not
    if(!user.email || !user.password){
        return res.status(400).json({message: "Email & Password is required!"})
    }
    
    // user exists or not
    const users = readUsers()
    const existingUser = users?.find(u => u.email === user?.email)    
    // if not exist
    if(!existingUser){
        return res.status(404).json({message: "User not found - please register"})
    }

    // compare password hash
    const isPasswordValid = await bcrypt.compare(user?.password, existingUser?.password)
    if(!isPasswordValid){
        return res.status(401).json({message: "Invalid Credentials!"})
    }
    
    // Genrate JWT Token
    const payload = {userId: existingUser?.id, email: existingUser?.email}
    const token = jwt.sign(payload, jwt_secret_key, {expiresIn: '1h'})
    
    // response
    res.json({token: token, message: "LoggedIn Successfully!"})
}
