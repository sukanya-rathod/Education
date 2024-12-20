// src/CourseList.js
import React, { useState } from 'react';
import '../styles/CourseList.css'; 
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
import dcet from '../assets/course/dcet.jpeg';
import js from '../assets/course/js.png'
import rjs from '../assets/course/rjs.jpeg'
import html from '../assets/course/html.jpeg'
import css from '../assets/course/css.jpeg'
import cs from '../assets/course/cs.jpeg'
import python from '../assets/course/python.jpeg'
import EnrollForm from './Enroll';
import { useNavigate } from 'react-router-dom';

const coursesData = [
  {
    name: 'Diploma DCET',
    description: 'The DCET (Diploma Common Entrance Test) is an entrance examination conducted by the Karnataka Examination Authority (KEA) . ',
    image: dcet,
  },
  {
    name: 'JavaScript',
    description: 'JavaScript is a versatile, high-level programming language primarily used to create interactive and dynamic features on websites. ',
    image: js,
  },
  {
    name: 'React JS',
    description: 'React is a popular JavaScript library developed by Facebook for building user interfaces, particularly single-page applications.',
    image: rjs,
  },
  {
    name: 'HTML',
    description: 'HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web. It defines the . ',
    image: html,
  },
  {
    name: 'CSS',
    description: 'CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and layout of HTML elements on a web page.  ',
    image: css,
  },
  {
    name: 'Computer Science',
    description: 'Computer Science is the study of computers and computational systems. It encompasses a broad range of topics including algorithms, ',
    image: cs,
  },
  {
    name: 'Python',
    description: 'Python is a high-level, interpreted programming language known for its simplicity and readability. Designed by Guido van Rossum and ',
    image: python,
  },
  {
    name: 'Java',
    description: 'Java is a widely-used, high-level programming language developed by Sun Microsystems in 1995, and now maintained by Oracle Corporation. ',
    image: js,
  },
];

const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); 

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = coursesData.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const handleEnrollClick = () => {
    navigate('/enroll'); // Navigate to the Enroll page
  };

  return (
    <div className="course-list">
      <h1 >Courses</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a course..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      <div className="courses">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div key={index} className="course">
              <img src={course.image} alt={course.name} className="course-image" />
              <h2 className="course-name">{course.name}</h2>
              <p className="course-description">{course.description}</p>
              <button className="enroll-button" onClick={handleEnrollClick}>Enroll Now</button>
            </div>
          ))
        ) : (
          <p>No courses found</p>
        )}
      </div>
    </div>
  );
};

export default CourseList;
