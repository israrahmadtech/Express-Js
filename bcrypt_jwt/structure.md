Client (HTML)
   ↓
Express Server
   ↓
Auth Middleware (JWT)
   ↓
Authorization Logic (ownership check)
   ↓
Dummy Notes Data


🧩 Core Entities (Mental Model)
👤 User

id

name

email

hashedPassword

📝 Note

id

title

content

userId ← ⭐ sab se important field

👉 userId hi ownership decide karega

🔐 Authentication vs Authorization (Clear difference)
Authentication ❓
“Tum ho kaun?”
Login
JWT issue
Token verify

Authorization ❓
“Tumhein ye kaam karne ka haq hai?”
Ye note tumhari hai ya nahi?
JWT ke userId se match

🔁 Complete Authentication Cycle (Notes App)
🟢 1. Register
User signup
Password → bcrypt hash
Save user (dummy array)

🟢 2. Login
Email + password
bcrypt compare
JWT generate:
payload me userId
Token client ko

🟢 3. Token Storage (Frontend)

Token ko store karo (mentally):

localStorage / variable

🟢 4. Create Note (Protected)

Flow:

Client token bhejta

Auth middleware:

token verify

req.user = { userId }

Note create:

userId = req.user.userId

👉 Is step pe note owner lock ho jata hai

🟢 5. Get Notes (Authorization)

Flow:

User request bhejta

Server:

sab notes me se

sirf matching userId wali notes

Response me sirf apni notes

👉 Dusre user ki notes exist karti hain
👉 Lekin response me kabhi nahi jati

🟢 6. Delete Note (Strong Authorization)

Ye sab se important logic hai 🔥

Mental flow:

User note delete karna chahta

Server:

note nikalta

check karta:
note.userId === req.user.userId ?
Match:

delete allowed

Match nahi:

❌ Forbidden (403)

🛡️ Security Rules (Yaad rakhna)

✔ Password kabhi store nahi hota
✔ JWT payload me password nahi
✔ userId hi trustable identity
✔ Authorization hamesha server pe
✔ Frontend checks = useless (sirf UX)