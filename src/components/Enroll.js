// src/components/EnrollForm.js

import React, { useState } from 'react';
import '../styles/Enroll.css'; // Import the CSS file

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    course: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log('Form submitted:', formData);
    alert("Enrolled in to the course successfully")
  };

  return (
    <div className='enroll'>
    <div className="enroll-form-container">
      <h2>Enroll Now</h2>
      <form onSubmit={handleSubmit} className="enroll-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a course</option>
            <option value="javascript">Java Script</option>
            <option value="react">React</option>
            <option value="python">Python</option>
            <option value="python">Python</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="discription">discription:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </div>
        <button type="submit" className="submit-button">Enroll</button>
      </form>
    </div>
    </div>
  );
};

export default EnrollForm;
