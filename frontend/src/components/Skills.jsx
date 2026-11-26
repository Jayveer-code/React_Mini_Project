import { useState, useEffect } from "react";

// Backend API URL (local Express server)
const API_URL = "http://localhost:5000/api/skills";

function Skills() {
  // All skills from MongoDB
  const [skills, setSkills] = useState([]);

  // Form data for add / update
  const [formData, setFormData] = useState({
    userName: "",
    skillName: "",
    category: "Programming",
    level: "Beginner",
    skillType: "I Can Teach"
  });

  // If editId has a value, form is in update mode
  const [editId, setEditId] = useState(null);

  // Search and filter
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState("All");

  // Success / info message
  const [message, setMessage] = useState("");

  // GET - Fetch all skills when page loads
  const fetchSkills = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.log("Error fetching skills:", error);
      setMessage("Could not connect to server. Make sure backend is running.");
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  // Handle input / select changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // POST or PUT - Add new skill or update existing skill
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (editId) {
        // UPDATE
        response = await fetch(`${API_URL}/${editId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
      } else {
        // CREATE
        response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
      }

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Operation failed");
        return;
      }

      if (editId) {
        setMessage("Skill updated successfully");
      } else {
        setMessage("Skill added successfully");
      }

      // Clear form and exit edit mode
      setFormData({
        userName: "",
        skillName: "",
        category: "Programming",
        level: "Beginner",
        skillType: "I Can Teach"
      });
      setEditId(null);

      // Refresh list
      fetchSkills();
    } catch (error) {
      console.log("Error:", error);
      setMessage("Error connecting to server");
    }
  };

  // Fill form with selected skill for editing
  const handleEdit = (skill) => {
    setEditId(skill._id);
    setFormData({
      userName: skill.userName,
      skillName: skill.skillName,
      category: skill.category,
      level: skill.level,
      skillType: skill.skillType
    });
    setMessage("");
  };

  // DELETE - Remove a skill listing
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this skill?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      setMessage("Skill deleted successfully");
      fetchSkills();
    } catch (error) {
      console.log("Error deleting skill:", error);
      setMessage("Error deleting skill");
    }
  };

  // Cancel update and clear form
  const handleCancel = () => {
    setEditId(null);
    setFormData({
      userName: "",
      skillName: "",
      category: "Programming",
      level: "Beginner",
      skillType: "I Can Teach"
    });
    setMessage("");
  };

  // Filter skills by search text and skill type
  const filteredSkills = skills.filter((skill) => {
    const matchesSearch = skill.skillName
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesType =
      filterType === "All" || skill.skillType === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="skills-page">
      <h1>Skill Management</h1>
      <p className="page-intro">
        Add skills you can teach or want to learn. Search and connect with the community.
      </p>

      {message && <p className="status-message">{message}</p>}

      {/* Skill Form */}
      <div className="form-container">
        <h2>{editId ? "Update Skill" : "Add a Skill"}</h2>

        <form onSubmit={handleSubmit} className="skill-form">
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              placeholder="Enter your name"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Skill Name</label>
            <input
              type="text"
              name="skillName"
              placeholder="e.g. React, Python, Excel"
              value={formData.skillName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="Programming">Programming</option>
              <option value="Web Development">Web Development</option>
              <option value="Database">Database</option>
              <option value="Design">Design</option>
              <option value="Communication">Communication</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Skill Level</label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              required
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="form-group">
            <label>Skill Type</label>
            <select
              name="skillType"
              value={formData.skillType}
              onChange={handleChange}
              required
            >
              <option value="I Can Teach">I Can Teach</option>
              <option value="I Want to Learn">I Want to Learn</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              {editId ? "Update Skill" : "Add Skill"}
            </button>

            {editId && (
              <button
                type="button"
                className="btn btn-cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Search and Filter */}
      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search by skill name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          className="filter-select"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="I Can Teach">I Can Teach</option>
          <option value="I Want to Learn">I Want to Learn</option>
        </select>
      </div>

      {/* Skill Cards */}
      <div className="skills-grid">
        {filteredSkills.length === 0 ? (
          <p className="empty-text">No skills found. Add a skill to get started.</p>
        ) : (
          filteredSkills.map((skill) => (
            <div className="skill-card" key={skill._id}>
              <div className="skill-card-header">
                <h3>{skill.skillName}</h3>
                <span
                  className={
                    skill.skillType === "I Can Teach"
                      ? "badge teach"
                      : "badge learn"
                  }
                >
                  {skill.skillType}
                </span>
              </div>

              <p><strong>Member:</strong> {skill.userName}</p>
              <p><strong>Category:</strong> {skill.category}</p>
              <p><strong>Level:</strong> {skill.level}</p>

              <div className="card-actions">
                <button
                  className="btn btn-edit"
                  onClick={() => handleEdit(skill)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => handleDelete(skill._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Skills;
