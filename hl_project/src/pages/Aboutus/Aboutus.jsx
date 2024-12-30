import React from "react";
import { motion } from "framer-motion"; // For animations
import Layout from "../../components/Layout/Layout";


const About = () => {
  return (
    <Layout>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 text-gray-800 px-6 py-28">
      {/* Header Section */}
      <motion.h1
        className="text-4xl font-bold text-center mb-6 text-orange-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>

      {/* Introduction Section */}
      <motion.div
        className="max-w-4xl text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="text-lg font-semibold leading-relaxed">
          Welcome to our company! We are dedicated to delivering top-notch
          services and creating innovative solutions for our clients. Our team
          is passionate, skilled, and committed to excellence in every project
          we undertake.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Feature 1 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-3 text-green-600">Our Mission</h3>
          <p className="text-gray-800 font-medium">
            To provide exceptional services and solutions that help our clients
            achieve their goals.
          </p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">Our Vision</h3>
          <p className="text-gray-800 font-medium">
            To become a global leader in our industry by fostering innovation
            and building long-lasting relationships.
          </p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-3 text-purple-600">Our Values</h3>
          <p className="text-gray-800 font-medium">
            Integrity, innovation, and customer-centricity drive our every
            decision and action.
          </p>
        </motion.div>
      </div>

      {/* Team Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Meet Our Team</h2>
        <p className="text-gray-800 font-medium mb-8">
          A diverse group of experts working together to achieve great results.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Example team members */}
          <motion.div
            className="w-40 text-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://fortune.com/img-assets/wp-content/uploads/2024/09/GettyImages-2170596573-e1727191861209.jpg?w=1440&q=75"
              alt="Team Member"
              className="w-full h-40 object-cover rounded-full mb-3"
            />
            <h4 className="text-lg font-semibold">Alice Johnson</h4>
            <p className="text-sm text-gray-700">CEO</p>
          </motion.div>

          <motion.div
            className="w-40 text-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://m.media-amazon.com/images/I/A1DxElSG8gL._SY600_.jpg"
              alt="Team Member"
              className="w-full h-40 object-cover rounded-full mb-3"
            />
            <h4 className="text-lg font-semibold">Mark Smith</h4>
            <p className="text-sm text-gray-700">CTO</p>
          </motion.div>

          <motion.div
            className="w-40 text-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfox7fHlhN8om8LEAXy2gTNj4Dnk2Y0JM9w&s"
              alt="Team Member"
              className="w-full h-40 object-cover rounded-full mb-3"
            />
            <h4 className="text-lg font-semibold">Emily Davis</h4>
            <p className="text-sm text-gray-700">Design Lead</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
    </Layout>
  );
};

export default About;
