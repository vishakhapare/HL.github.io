import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Aboutus from './pages/Aboutus/Aboutus';
import OurCourses from './pages/Courses/Ourcourses';  
import Contactus from './pages/Contact/Contactus';
import Login from './pages/loginpage/Login';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/courses" element={<OurCourses />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
