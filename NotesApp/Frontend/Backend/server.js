const http = require("http");
const { Resend } = require("resend");
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

const server = http.createServer(async (req, res) => {
    // ✅ CORS HEADERS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    
    if (req.method === "GET" && req.url === "/send-email") {
        try {
            await resend.emails.send({
                from: "onboarding@resend.dev",
                to: "test@zoropgriia.resend.app",
                subject: "🚀 Resend Test Email",
                html: "<p>Bhai email successfully aa gayi 😄</p>",
            });

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: true, message: "Email sent!" }));
        } catch (error) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, error: error.message }));
        }
    } else {
        res.writeHead(404);
        res.end("Route not found");
    }
});

server.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});
