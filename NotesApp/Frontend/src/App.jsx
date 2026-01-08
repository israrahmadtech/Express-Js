import React, { useEffect } from "react";

function App() {

  async function hitBackend() {
    try {
      const res = await fetch("http://localhost:5173/send-email");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function loginUser(newUser) {
    try {
      const res = await fetch('http://localhost:4000/login', {
        method: "POST",
        body: JSON.stringify(newUser),
        credentials: "include",
        headers: { "Content-Type": "application/json" }
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message || "Login Error")

      console.log("Login Successful:", data.message)
    }
    catch (error) {
      console.error("Login Failed:", error.message)
    }
  }

  const newUser = {
    email: "israr@ahmad.com",
    password: "israr123"
  }

  return (
    <div>
      <button onClick={hitBackend} >Send Email</button>
      <button onClick={() => loginUser(newUser)} >Login</button>
    </div>
  );
}

export default App;
