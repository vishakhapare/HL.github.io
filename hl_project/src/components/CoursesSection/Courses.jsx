import React from 'react';

const Courses = () => {
  const courses = [
    {
      title: "React for Beginners",
      description: "Learn the basics of React to build dynamic web applications.",
      duration: "4 Weeks",
      level: "Beginner",
      price: "$49",
    },
    {
      title: "Mastering Node.js",
      description: "Deep dive into backend development with Node.js.",
      duration: "6 Weeks",
      level: "Intermediate",
      price: "$99",
    },
    {
      title: "Full-Stack Bootcamp",
      description: "Become a full-stack developer in just 12 weeks.",
      duration: "12 Weeks",
      level: "Advanced",
      price: "$299",
    },
  ];

  return (
    <section className="bg-gray-300 text-white py-16 w-screen mt-14">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-orange-600">Our Courses</h2>
        <p className="text-center text-gray-950 mb-12 font-medium">
          Upskill with hands-on training and industry-relevant knowledge.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-medium mb-2">{course.title}</h3>
              <p className="text-gray-300 mb-4">{course.description}</p>
              <p className="mb-2 font-medium">
                <strong>Duration:</strong> {course.duration}
              </p>
              <p className="mb-2 font-medium">
                <strong>Level:</strong> {course.level}
              </p>
              <p className="mb-4 font-medium">
                <strong>Price:</strong> {course.price}
              </p>
              <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-green-600">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white py-3 px-8 rounded-lg hover:bg-green-600">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
