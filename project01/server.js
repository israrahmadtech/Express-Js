import express from "express"

const app = express()

app.use(express.json()); // The data coming in the client's request is in string form so we need to parse it - here it is done using middle ware

app.get('/', (req, res) => {
    res.send("This is home page data")
})

let users = [
    { id: 1, name: "Israr", role: "Frontend Dev" },
    { id: 2, name: "Ali", role: "Backend Dev" }
];


// ...............  GET  ...................
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    console.log("PARAMS: ",typeof req.params);
    

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).send({ message: "User not found" });
    }

    console.log(express.json)
    res.send(user);
});

// ...............  POST  ..................
app.post('/users', (req, res) => {
    const { name, role } = req.body;
    console.log(req.body);

    // user exists or not
    const user = users?.find(u => u.name === name)
    if (user) { return res.status(409).json({ message: "User already exists!" }) }

    const newUser = { id: users.length + 1, name, role }
    users?.push(newUser)

    res.status(201).json(newUser);
})

// ...............  PATCH  ..................
app.patch('/users/:id', (req, res) => {
    const id = +req.params.id

    const user = users?.find(u => u.id === id)

    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }

    Object.assign(user, req.body) // replace those properties in "user" object which are available in res.body

    res.json(user)
})

// ...............  PUT  ....................
app.put('/users/:userId', (req, res) => {
    console.log(req.params); // return an object having userId inside
    
    const id = +req.params.userId

    const userIndex = users?.findIndex(u => u.id === id)

    if (userIndex === -1) return res.status(404).json({ message: "User not found!!!" })

    users[userIndex] = { id, ...req.body }

    res.json(users[userIndex])
})

// ...............  DELETE  .................
app.delete('/users/:id', (req, res) => {
    const id = +req.params.id

    const updatedUsers = users?.filter(user => user?.id !== id)

    if(updatedUsers.length === users.length) {
        return res.status(404).json({message: "User not found...!"})
    }

    users = updatedUsers

    res.json({message: "User deleted successfully!"})
})


app.listen(4000, () => {
    console.log("Israr's server is continuously listening...");
})