import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../styles/Home.css";
import bg1 from "../assets/bg1.jpeg";
import bg2 from "../assets/bg2.jpeg";
import bg3 from "../assets/bg3.jpeg";
import bg4 from "../assets/bg4.jpeg";
import EnrollForm from './Enroll'; // Import EnrollForm, though not directly used here

const Home = () => {
  const [bgImage, setBgImage] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  const images = [bg1, bg2, bg3, bg4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgImage(prev => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handlePrev = () => {
    setBgImage(prev => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setBgImage(prev => (prev + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setBgImage(index);
  };

  const handleEnrollClick = () => {
    navigate('/enroll'); // Navigate to the Enroll page
  };

  return (
    <section id='Home'>
      <div className="home-page">
        <header className="header1" style={{ backgroundImage: `url(${images[bgImage]})` }}>
          <h1 className="title">Welcome to COURSE GALAXY</h1>
          <p className="subtitle">Empowering Minds, Shaping Futures</p>
          <p>At Course Galaxy, we’re committed to offering an unparalleled educational experience that shines brightly in every subject. Our platform provides a universe of high-quality, engaging courses designed to help you reach your full potential, whether you’re a student, professional, or lifelong learner.</p>
          <center><button className="cta-button" onClick={handleEnrollClick}>Enroll Now</button></center>
          <div className="slider-controls">
            <button className="arrow left-arrow" onClick={handlePrev}>❮</button>
            <button className="arrow right-arrow" onClick={handleNext}>❯</button>
          </div>
        </header>

        <section className="features">
          <div className="feature">
            <div className="slider-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === bgImage ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
            <h2>Interactive Courses</h2>
            <p>Engage with our interactive and comprehensive courses.</p>
          </div>
          <div className="feature">
            <h2>Expert Tutors</h2>
            <p>Learn from experienced professionals in various fields.</p>
          </div>
          <div className="feature">
            <h2>Community Support</h2>
            <p>Join a vibrant community of learners and educators.</p>
          </div>
        </section>

      </div>
    </section>
  );
};

export default Home;
