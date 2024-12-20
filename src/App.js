import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseList from './components/CourseList';
import Home from './components/Home';
import EnrollForm from './components/Enroll'
import Login from './components/Login'
import ContactUs from './components/Contact';
import AboutUs from './components/About'
import Landing from './components/Landing'

export default function App() {
    return (
        <Router>
            
                <Header />
               
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/course" element={<CourseList />} />
                    <Route path="/enroll" element={<EnrollForm/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/about" element={<AboutUs/>}/>
                </Routes>
                <Footer />
            
        </Router>
  
    );
}
