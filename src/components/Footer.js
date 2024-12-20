// src/components/Footer.js

import React from 'react';
import '../styles/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>We are dedicated to providing high-quality educational resources to help you succeed in your academic journey.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/course">Courses</a></li>
           <li><a href="/about">About</a></li>
            <li><a href="/enroll">Enroll Now</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: support@educationalwebsite.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Educational Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
