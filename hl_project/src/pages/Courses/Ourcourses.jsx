import React from "react";
import Layout from "../../components/Layout/Layout";

const OurCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to Python",
      description: "Learn the basics of Python programming.",
      image: "https://i.pinimg.com/originals/6a/fb/f4/6afbf45910b9b4c344737f76043d2cbc.jpg",
      duration: "8 weeks",
    },
    
    {
      id: 2,
      title: "Web Development",
      description: "Master HTML, CSS, and JavaScript to build stunning websites.",
      image: "https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg",
      duration: "12 weeks",
    },
    {
      id: 3,
      title: "React for Beginners",
      description: "A comprehensive guide to building apps with React.",
      image: "https://elazizi.com/images/react-native-libraries.png",
      duration: "10 weeks",
    },
    {
      id: 4,
      title: "Data Science",
      description: "Dive into data analysis and machine learning with Python.",
      image: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
      duration: "14 weeks",
    },
    {
      id: 5,
      title: "Introduction to Java",
      description: "Learn the basics of Java programming.",
      image: "https://4kwallpapers.com/images/wallpapers/java-black-2560x1440-16069.png",
      duration: "8 weeks",
    },
    {
      id: 6,
      title: "Introduction to App Development",
      description: "Learn an App Development.",
      image: "https://img.freepik.com/free-photo/smartphone-with-user-interface-concept_52683-104212.jpg",
      duration: "8 weeks",
    },
  ];

  return (
    <Layout>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
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
                  src={course.image}
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
