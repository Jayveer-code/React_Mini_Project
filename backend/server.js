// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const skillRoutes = require("./routes/skillRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - allow React frontend to call this API
app.use(cors());

// Middleware - read JSON data from request body
app.use(express.json());

// Connect to local MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error.message);
  });

// Home route - simple welcome message
app.get("/", (req, res) => {
  res.send("Welcome to SkillSwap API - Community Skill Exchange Portal");
});

// Skill API routes
app.use("/api/skills", skillRoutes);

// 404 middleware for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "API endpoint not found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
