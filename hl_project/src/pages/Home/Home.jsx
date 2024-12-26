import React from 'react';
import Hero from '../../components/Hero/Hero'; 
import Features from '../../components/FeaturesSection/Features';
import WhyUs from '../../components/WhyusSection/Whyus';
import Testimonial from '../../components/Testimonialsection/Testimonial';
import Layout from '../../components/Layout/Layout';
import Courses from '../../components/CoursesSection/Courses';
import ContactForm from '../../components/ContactSection/Contact';
import Faq from '../../components/FAQsection/Faq';


const Home = () => {
  return (
    <div>
      <Layout>
      <Hero /> 
      <Features />
      <Courses/> 
      <WhyUs/>
      <ContactForm/>
      <Testimonial/>
      <Faq/>
      </Layout>
    </div>
  )
}

export default Home
