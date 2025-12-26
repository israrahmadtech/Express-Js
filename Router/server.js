import express from "express"
import userRoutes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";

const app = express()

app.use('/users', userRoutes)

app.use('/admin', adminRoutes)

app.listen("4000", () => {
    console.log("Server is listening to your request...");
})
