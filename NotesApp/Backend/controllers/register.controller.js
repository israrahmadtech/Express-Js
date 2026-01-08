import bcrypt from "bcrypt"

import { readUsers, writeUsers } from "./json.controller.js"

// Save User
export async function registerUser(req, res) {
    const newUser = req.body
    // user exists or not
    if (!newUser.email || !newUser.password || !newUser.username) {
        return res.status(400).json({ isSuccess: false, message: "All fields are required!" })
    }
    // if existss
    const users = readUsers()
    
    const isExists = users?.find(u => u?.email === newUser?.email)
    if (isExists) {
        return res.status(409).json({ isSuccess: false, message: "User already exists - please login!" })
    }

    // last user id
    const lastUserId = users[users?.length - 1]?.id

    // encrypt password
    const passHash = await bcrypt.hash(newUser?.password, 10)

    // save user
    users?.push({ id: lastUserId >= 0 ? lastUserId + 1 : 0, ...newUser, role: "user", password: passHash })
    writeUsers(users)

    // delete password from new user
    const {password, ...safeUser} = users[users?.length - 1]

    // response
    res.send({ isSuccess: true, user: safeUser, message: "User Registered - Kindly Login!" })
}
