import React from "react";
import { FaChalkboardTeacher, FaTools, FaClock, FaDollarSign, FaBriefcase } from "react-icons/fa";

const WhyUs = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher size={30} className="text-blue-600" />,
      title: "Expert Instructors",
      description: "Learn from certified professionals with real-world experience.",
    },
    {
      icon: <FaTools size={30} className="text-orange-600" />,
      title: "Hands-on Learning",
      description: "Get practical knowledge through real-world projects.",
    },
    {
      icon: <FaClock size={30} className="text-green-600" />,
      title: "Flexible Schedules",
      description: "Learn at your own pace with schedules that fit your lifestyle.",
    },
    {
      icon: <FaDollarSign size={30} className="text-yellow-600" />,
      title: "Affordable Pricing",
      description: "High-quality courses at competitive rates.",
    },
    {
      icon: <FaBriefcase size={30} className="text-purple-600" />,
      title: "Job Assistance",
      description: "We help you build your career with our placement support.",
    },
    {
        icon: <FaBriefcase size={30} className="text-purple-600" />,
        title: "Job Assistance",
        description: "We help you build your career with our placement support.",
      },
  ];

  return (
    <section className="py-16 bg-gray-200 text-white mt-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-black">Why Choose <span className='bg-gradient-to-r from-orange-600 to-orange-600 text-transparent bg-clip-text'>Us?</span></h2> 
        <p className="text-gray-950 mb-12 font-medium">
          Empowering developers with cutting-edge training and support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold -mt-6">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <button className="bg-orange-600 text-white py-3 px-8 rounded-lg hover:bg-green-600">
            Explore Our Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
