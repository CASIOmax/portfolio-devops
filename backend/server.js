const express = require("express");
const path = require("path");
const app = express();

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../frontend")));

app.use(express.json());

// Contact API
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New Contact:", name, email, message);
  res.json({ success: true, message: "Message received" });
});

// Catch all other routes and serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

