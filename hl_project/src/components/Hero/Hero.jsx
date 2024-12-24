import React from "react";
import video from "../../assets/video1.mp4";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 inset-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between h-full sm:px-6 lg:px-8">
        {/* Left Content */}
        <div className="text-white max-w-lg md:w-1/2">
          <h1 className="text-6xl mt-16 font-medium"> Full Stack Web Development Job Bootcamp
           
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-400 -mr-52">
            Choose MERN stack or Spring Boot and acquire expertise<br />
            through practical application and real-world projects.
          </p>

          {/* New Stats Section */}
          <div className="flex justify-between mt-8 bg-zinc-800 py-3 px-1 w-[95%] rounded-lg text-center text-white">
            <div className="flex-1">
              <p className="text-2xl font-medium">95%</p>
              <p className="text-sm">Placement Rate</p>
            </div>
            <div className="flex-1 border-l border-gray-700">
              <p className="text-2xl font-medium">1200+</p>
              <p className="text-sm">Hiring Partners</p>
            </div>
            <div className="flex-1 border-l border-gray-700">
              <p className="text-2xl font-medium">128%</p>
              <p className="text-sm">Average Hike</p>
            </div>
            <div className="flex-1 border-l border-gray-700">
              <p className="text-2xl font-medium">1.5 L+</p>
              <p className="text-sm">Learners</p>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col space-y-3">
            <div className="flex flex-wrap mt-8 items-center space-x-3">
              <span className="flex items-center space-x-2 bg-zinc-800 text-white w-60 px-4 py-2 rounded-full text-md font-thin">
                <svg
                  className="h-5 w-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Placement assistance</span>
              </span>

              <span className="flex items-center space-x-2 bg-zinc-800 text-white px-4 py-2 w-60 rounded-full text-md font-thin">
                <svg
                  className="h-5 w-5 text-purple-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M13 16h-1v-4h-1m2 4v-4m4 0a2 2 0 10-4 0 2 2 0 004 0zM8 16v-4a2 2 0 10-4 0v4"
                  />
                </svg>
                <span>AI-infused curriculum</span>
              </span>

              <span className="flex items-center mt-3 space-x-2 bg-zinc-800 text-white px-4 py-2 w-60 rounded-full text-md font-thin">
                <svg
                  className="h-5 w-5 text-orange-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 1.104.895 2 2 2s2-.896 2-2-.895-2-2-2-2 .896-2 2zm-1 6.9v-.8c0-1.1 1.2-1.9 2.5-1.9S16 15 16 16.1v.8a2.5 2.5 0 01-5 0zM9 10.9v-.8C9 8.1 10.2 7.2 11.5 7.2s2.5.9 2.5 2.1v.8c0 1.1-1.2 1.9-2.5 1.9S9 12 9 10.9z"
                  />
                </svg>
                <span>1 : 1 mentorship</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3 max-w-md -mr-11 mt-32">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Book a <span className="text-orange-600">free live webinar</span>
          </h2>
          <form>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name *
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <div className="flex">
                <span className="flex items-center justify-center bg-gray-200 px-3 border border-gray-300 rounded-l-lg">
                  +91
                </span>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone number"
                  className="w-full border-t border-r border-b border-gray-300 rounded-r-lg p-2 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
            </div>

            {/* Experience */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Experience *
              </label>
              <div className="space-y-2">
                <div>
                  <input
                    type="radio"
                    id="technical"
                    name="experience"
                    value="technical"
                    required
                    className="mr-2"
                  />
                  <label htmlFor="technical">Technical roles</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="nonTechnical"
                    name="experience"
                    value="nonTechnical"
                    className="mr-2"
                  />
                  <label htmlFor="nonTechnical">Non-technical roles</label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
            >
              Continue booking webinar →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
