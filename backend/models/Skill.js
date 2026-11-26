const mongoose = require("mongoose");

// Skill Schema - stores each member's skill listing
const skillSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  skillName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  skillType: {
    type: String,
    required: true
  }
});

// Create and export the Skill model
const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
