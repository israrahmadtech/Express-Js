import http from 'http'

const someHTML = `
        <h1>Home Page</h1>
        <p>Hello, Israr is talking to you!</p>
      `
const data = {
    developer: "Israr Ahmad",
    role: "Frontend Web Developer",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Node.js"],
    message: "Hello from Israr's backend JSON API 💻",
    status: "Success"
};

// Server Creation
export const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "content-type": 'text/html' })
        res.end(someHTML)
    }
    else if(req.url === '/user'){
        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify(data))
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<h1>404 Not Found</h1><p>Bhai wrong page mang liya 😅</p>`);
    }
})

server.listen(5000, () => {
    console.log("Israr's Server is continuously listening...");
})
