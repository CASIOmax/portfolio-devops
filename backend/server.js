const express = require("express");
const path = require("path");
const app = express();

// Parse JSON
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Contact API
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New Contact:", name, email, message); // This logs all messages
  res.json({ success: true, message: "Message received" });
});

// Catch all unmatched routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
