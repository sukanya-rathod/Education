import React from 'react'

import CourseList from './CourseList';
import Home from './Home';
import EnrollForm from './Enroll'

import ContactUs from './Contact';
import AboutUs from './About'

export default function Landing() {
  return (
    <div>
      <Home />
      <CourseList />
      <EnrollForm />
      <AboutUs />
      <ContactUs />
    </div>
  )
}
