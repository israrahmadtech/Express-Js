import { users } from "../users.js"
import bcrypt from "bcrypt"

// Save User
export async function registerUser(req, res) {
    const newUser = req.body
    // user exists or not
    if (!newUser.email || !newUser.password || !newUser.username) {
        return res.status(400).json({ message: "All fields are required!" })
    }
    // if exists
    const isExists = users?.find(u => u?.email === newUser?.email)
    if (isExists) {
        return res.status(400).json({ message: "User already exists - please login!" })
    }

    // last user id
    const lastUserId = users[users?.length - 1]?.id

    // encrypt password
    const passHash = await bcrypt.hash(newUser?.password, 10)

    // save user
    users?.push({ id: lastUserId + 1, ...newUser, role: "user", password: passHash })

    // delete password from new user
    const {password, ...safeUser} = users[users?.length - 1]

    // response
    res.send({ user: safeUser, message: "User Registered - Kindly Login!" })
}
