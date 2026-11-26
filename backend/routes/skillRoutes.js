const express = require("express");
const router = express.Router();
const Skill = require("../models/Skill");

// GET /api/skills - Fetch all skill listings
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/skills - Add a new skill listing
router.post("/", async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json({
      message: "Skill added successfully",
      data: skill
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /api/skills/:id - Update an existing skill listing
router.put("/:id", async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    res.status(200).json({
      message: "Skill updated successfully",
      data: skill
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /api/skills/:id - Delete a skill listing
router.delete("/:id", async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);

    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    res.status(200).json({
      message: "Skill deleted successfully",
      data: skill
    });
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
});

module.exports = router;
