import React from "react";
import Layout from "../../components/Layout/Layout";
import photo1 from "../../assets/py1.jpeg";
import photo2 from "../../assets/web2.jpeg";
import photo3 from "../../assets/react3.jpg";
import photo4 from "../../assets/ds4.jpeg";
import photo5 from "../../assets/java5.png"; 
import photo6 from "../../assets/app7.jpg";

const OurCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to Python",
      description: "Learn the basics of Python programming.",
      image: photo1, // Use the variable directly
      duration: "8 weeks",
    },
    {
      id: 2,
      title: "Web Development",
      description: "Master HTML, CSS, and JavaScript to build stunning websites.",
      image: photo2, // Use the variable directly
      duration: "12 weeks",
    },
    {
      id: 3,
      title: "React for Beginners",
      description: "A comprehensive guide to building apps with React.",
      image: photo3, // Use the variable directly
      duration: "10 weeks",
    },
    {
      id: 4,
      title: "Data Science",
      description: "Dive into data analysis and machine learning with Python.",
      image: photo4, // Use the variable directly
      duration: "14 weeks",
    },
    {
      id: 5,
      title: "Introduction to Java",
      description: "Learn the basics of Java programming.",
      image: photo5, // Use the variable directly
      duration: "8 weeks",
    },
    {
      id: 6,
      title: "Introduction to App Development",
      description: "Learn an App Development.",
      image: photo6, // Use the variable directly
      duration: "8 weeks",
    },
  ];

  return (
    <Layout>
      <section className="py-12 px-72 bg-gray-100">
        <div className="container mx-auto px-4 w-[200%] -ml-64">
          <h2 className="text-4xl font-bold text-center  mb-8 mt-16 text-orange-600">
            Our Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <img
                  src={course.image} // Correctly reference the image property
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{course.description}</p>
                  <p className="text-sm text-gray-500 mt-4">
                    Duration: {course.duration}
                  </p>
                  <button className="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-green-700 transform transition duration-300 hover:scale-110">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurCourses;
