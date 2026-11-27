require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const skillRoutes = require("./routes/skillRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - allow React frontend to call this API
app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error.message);
  });

app.get("/", (req, res) => {
  res.send("Welcome to SkillSwap API - Community Skill Exchange Portal");
});

app.use("/api/skills", skillRoutes);
app.use((req, res) => {
  res.status(404).json({ message: "API endpoint not found" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
