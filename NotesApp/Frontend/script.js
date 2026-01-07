
const newUser = {
    name: "Israr Ahmad",
    email: "israr@khan.com",
    password: "israr123",
    username: "israrahmad123"
}

async function registerUser(user) {
    try {
        const res = await fetch('http://localhost:4000/register', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        const data = await res.json()

        if (!data.isSuccess) throw new Error(data.message)

        console.log(data.message);
        return data.user
    }
    catch (error) {
        console.log(error.message);
    }
}
registerUser(newUser)