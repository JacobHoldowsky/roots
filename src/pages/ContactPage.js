import React, { useState } from "react";
import "./ContactPage.css"; // Import the CSS file for styling

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    console.log("Form submitted:", formData);
    setFormStatus("Thank you for your message. We will get back to you soon!");

    // Clear form fields after submission
    setFormData({ name: "", email: "", message: "" });

    // Reset form status after a timeout (optional)
    setTimeout(() => setFormStatus(""), 5000);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us using the form below.</p>
      {formStatus && <p className="form-status">{formStatus}</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
