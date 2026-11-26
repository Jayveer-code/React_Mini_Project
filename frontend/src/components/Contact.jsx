import { useState } from "react";

function Contact() {
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Error messages for each field
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Success message after valid submission
  const [successMsg, setSuccessMsg] = useState("");

  // Update form fields when user types
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Clear error for the field being typed
    setErrors({
      ...errors,
      [e.target.name]: ""
    });

    setSuccessMsg("");
  };

  // Simple email format check
  const isValidEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  // Validate and submit form (no MongoDB / no email sending)
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      message: ""
    };

    let isValid = true;

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setSuccessMsg("Thank you! Your message has been submitted successfully.");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="page-intro">
        Have a question about SkillSwap? Send us a message.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>

        {successMsg && <p className="success-text">{successMsg}</p>}
      </form>
    </div>
  );
}

export default Contact;
