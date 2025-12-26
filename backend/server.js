const express = require("express");
const app = express();

app.use(express.json());

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New Contact:", name, email, message);
  res.json({ success: true, message: "Message received" });
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
