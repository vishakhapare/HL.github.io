import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/FeaturesSection/Features'
import Testimonial from './components/Testimonialsection/Testimonial'
import Courses from './components/CoursesSection/Courses'
import WhyUs from './components/WhyusSection/Whyus'
import ContactUs from './components/ContactSection/Contact'
import Footer from './components/FooterSection/Footer'


const App = () => {
  return (
<>
      <Navbar />
      <div>
      <Hero /> 
      <Courses />
      <Features /> 
      <WhyUs/>
      <Testimonial/>
      <ContactUs/>
      <Footer/>
  
      
    
      
      
      </div>
      
    
      </>

  )
}

export default App
