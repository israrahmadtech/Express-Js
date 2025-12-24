# 📘 Express.js – Learning Progress (Day Summary)

This document summarizes everything I have learned and practiced so far while learning **Express.js**.

The focus of this phase was **understanding core backend concepts step by step**, not rushing into advanced topics.

---

## ✅ Topics Covered So Far

### 🔹 Express Basics
- What Express.js is
- How Express works on top of Node.js
- Difference between pure Node.js server and Express server
- Why Express is used in real-world applications

---

### 🔹 Server Setup
- Created Express server using `express()`
- Started server using `app.listen()`
- Understood why `server.js` is commonly used
- Fixed ES Module warning using:
```js
"type": "module"

🔹 Request (req) & Response (res) Deep Dive
Learned what information comes from the client and how the server responds.

Request (req)

req.params → URL parameters
req.query → Query strings
req.body → Data sent from client
Why express.json() is required for body parsing

Response (res)

res.send()
res.json()
res.status()
Proper response handling


🔁 HTTP Methods (CRUD) – Practically Implemented
All HTTP methods were implemented and tested using Thunder Client.

✅ GET
Fetch all users
Fetch single user by ID

✅ POST
Create new user
Send JSON data from client
Understood why body parsing middleware is needed

✅ PATCH
Partial update of user
Used URL params for ID
Used request body for update fields
Understood PATCH vs PUT difference

✅ PUT
Full replacement of user object
Replaced entire resource by ID

✅ DELETE
Removed user by ID
Handled user not found cases

🧪 API Testing Tool

Thunder Client (VS Code Extension)

Used for sending GET, POST, PUT, PATCH, DELETE requests
Learned how to send:
URL params
JSON body
Headers (Content-Type)

🧠 Important Concept Learned
In-Memory Data vs Database
Data stored in arrays exists only in RAM
Data resets when server restarts
Express controls logic, database handles persistence
Real-world apps use databases instead of variables

📂 Current Learning Structure
Express-JS/
│
├── basics/
├── project-01-crud/
├── project-02-rest-api/
└── project-03-advanced/

🎯 Learning Approach
Step-by-step learning
One concept at a time
Focus on understanding instead of memorizing
Practical testing with every concept


🚀 Next Topics (Planned)
Middleware (app.use) deep dive
Validation & error handling
Database integration
MVC architecture
Authentication & authorization


👨‍💻 Author

Israr Ahmad
Frontend Developer learning Backend with Express.js
Building strong fundamentals 🚀

