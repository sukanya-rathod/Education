// src/components/AboutUs.js

import React from 'react';
import '../styles/About.css'; // Import the CSS file for styling
import au1 from '../assets/au1.jpeg';
import au2 from '../assets/au2.jpeg';

const AboutUs = () => {
    return (
        <div className="about-us">
            <header className="about-us-header">
                <h1>About Us</h1>
            </header>
            <section className="about-us-content">
                <div className="about-us-text">
                    <h2>Our Mission</h2>
                    <p>
                        Welcome to EduWorld, where we are dedicated to providing high-quality educational resources to learners of all ages. Our mission is to make learning accessible, engaging, and impactful.
                    </p>
                    <h2>Our Vision</h2>
                    <p>
                        We envision a world where education is a lifelong journey, and knowledge is a bridge to personal and professional growth. Our vision is to create a global community of learners and educators who share this passion.
                    </p>
                </div>
                <div className="about-us-team">
                    <h2>Meet Our Team</h2>
                    <div className="team-member">
                        <img src={au1} alt="Team Member 1" />
                        <h3>Jane Doe</h3>
                        <p>Co-Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src={au2} alt="Team Member 2" />
                        <h3>Rose Smith</h3>
                        <p>Chief Educational Officer</p>
                    </div>
                    {/* Add more team members as needed */}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
