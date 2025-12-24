# 🚀 Express.js Learning Repository

This repository is created to **learn Express.js step by step** in a practical way.

The goal is not just to use Express, but to **understand how it works internally**, especially how backend APIs handle requests and responses.

---

## 📌 What is Express.js?

Express.js is a **minimal and flexible Node.js framework** used to build:
- Backend servers
- REST APIs
- Web applications

It simplifies many things that are complex in pure Node.js.

---

## 🧠 What I Learned in This Repo

### ✅ Core Concepts
- How Express works on top of Node.js
- Difference between Node.js server & Express server
- Request (`req`) and Response (`res`) deep understanding

### ✅ HTTP Methods (CRUD)
- **GET** – Fetch data
- **POST** – Create new data
- **PUT** – Replace existing data
- **PATCH** – Update specific fields
- **DELETE** – Remove data

All methods are tested using **Thunder Client**.

---

## 🧪 Testing Tool

- **Thunder Client (VS Code Extension)**
- Used to send HTTP requests and test APIs easily.

---

## 📂 Project Structure (Simple)

Express Js/
│
├── server.js
├── package.json
└── README.md
│
├── project-01-crud/
│   ├── server.js
│   └── README.md
│
├── project-02-rest-api/
│   ├── server.js
│   └── README.md
│
└── project-03-advanced/
    ├── server.js
    └── README.md

---

## ⚙️ How to Run the Project

1. Install dependencies:
```bash
npm install

2. Start the server:

node server.js

📡 Sample API Endpoints

| Method | Endpoint   | Description           |
| ------ | ---------- | --------------------- |
| GET    | /users     | Get all users         |
| GET    | /users/:id | Get single user       |
| POST   | /users     | Create new user       |
| PATCH  | /users/:id | Update user partially |
| PUT    | /users/:id | Replace user          |
| DELETE | /users/:id | Delete user           |


⚠️ Important Note

Data is stored in memory (RAM) for learning purposes.
When the server restarts, data resets.
In real-world applications, a database is used instead.

🎯 Learning Goal

Build strong backend fundamentals
Understand API flow clearly
Prepare for real-world backend + database integration

👨‍💻 Author

Israr Ahmad
Frontend Web Developer learning Backend with Express.js 🚀


⭐ If you find this helpful, feel free to star the repository!