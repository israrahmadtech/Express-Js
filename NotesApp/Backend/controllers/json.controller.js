import fs from "fs"

export function readUsers() {
    const data = fs.readFileSync("users.json", "utf-8")
    return JSON.parse(data)
}

export function writeUsers(users) {
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2))
}