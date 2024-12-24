import React from 'react';
import Layout from '../../components/Layout/Layout';

const About = () => {
  return (
    <Layout>
    <section className="relative bg-white py-24 h-screen w-screen">
      {/* Background Illustration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-blue-100"></div>
      <div className="relative container mx-auto px-6 md:px-12">
        {/* Main Title */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Who 
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 text-transparent bg-clip-text">
            {" "}We are
          </span>
          </h2>
          <p className="mt-4 text-gray-900 font-semibold text-lg max-w-2xl mx-auto">
            At HL Tech, we innovate and empower businesses with cutting-edge technology 
            solutions. Discover our story and what drives us forward.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="https://thumbs.dreamstime.com/b/smiling-professional-business-leaders-employees-group-team-portrait-coaches-mentors-posing-together-diverse-office-141681202.jpg"
              alt="HL Tech Team"
              className="rounded-sm shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <h3 className="text-2xl font-semibold">
              Our Journey
            </h3>
            <p className="mt-4 text-gray-900 font-medium">
              Founded in innovation, HL Tech has grown into a global leader in technology solutions.
              From software development to IT consulting, we strive to deliver unmatched value and 
              excellence in every project.
            </p>

            <h3 className="mt-8 text-2xl font-semibold">
              Why Choose Us
            </h3>
            <ul className="mt-4 space-y-3 text-gray-900 font-medium">
              <li className="flex items-start">
                <span className="bg-blue-500 text-white p-1 rounded-full mr-4">
                  ✔
                </span>
                Dedicated teams of technology experts.
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white p-1 rounded-full mr-4">
                  ✔
                </span>
                Commitment to innovation and client success.
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white p-1 rounded-full mr-4">
                  ✔
                </span>
                Proven track record in delivering solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default About;
