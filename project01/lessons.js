/*
3️⃣ PUT vs PATCH — update difference 🔥
🧠 Rule:

PUT → pura object replace

PATCH → sirf kuch fields update

📌 PATCH (recommended)
app.patch("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  Object.assign(user, req.body);

  res.json(user);
});


Thunder:

PATCH /users/1


Body:

{
  "role": "Senior Frontend Dev"
}


📌 PUT (full replace)
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    id,
    ...req.body
  };

  res.json(users[index]);
});


4️⃣ DELETE — data remove karna
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const newUsers = users.filter(u => u.id !== id);

  if (newUsers.length === users.length) {
    return res.status(404).json({ message: "User not found" });
  }

  users = newUsers;

  res.json({ message: "User deleted successfully" });
});


Thunder:

DELETE /users/2
*/