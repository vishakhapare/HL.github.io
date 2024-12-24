import React from "react";

const ContactUs = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-8 text-white"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/cybersecurity-expert-using-laptop-look-company-security-vulnerabilities_482257-101130.jpg')", // Replace with the actual image URL
      }}
    >
      <div className="bg-black/75 w-full max-w-6xl p-8 rounded-lg shadow-lg h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Get in Touch</h2>
            <p className="text-sm text-gray-400">Images from Freepik</p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-yellow-500 text-2xl">📞</span>
                <div>
                  <p>Call Us</p>
                  <p className="text-gray-400">
                       091990 25109
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-yellow-500 text-2xl">📍</span>
                <div>
                  <p>Location</p>
                  <p className="text-gray-400">
                  H.N 78, in front of Classic Gallery, Indrapuri C sector, Sector C, Indrapuri, Bhopal, Madhya Pradesh 462022
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-yellow-500 text-2xl">⏰</span>
                <div>
                  <p>Business Hours</p>
                  <p className="text-gray-400">
                    Mon – Sat ..... 10 am – 6 pm, Sun ....... Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-400"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Enter your message"
                rows="4"
                className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-black font-semibold py-3 rounded hover:bg-green-600 transition"
            >
              Send a request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
