const mongoose = require("mongoose");

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

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
