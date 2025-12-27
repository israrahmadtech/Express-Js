
const todos = [
    { id: 1, title: "sleep 8 hours" },
    { id: 2, title: "wake up early" }
]

export const getTodos = (req, res) => {
    res.json(todos)
}

export const createTodo = (req, res) => {
    const todo = req.body

    if (!todo) return res.status(403).json({ message: "Todo missing!" })

    todos.push({ id: todos.length + 1, ...todo })
    res.send("Todo added successfully!")
}
