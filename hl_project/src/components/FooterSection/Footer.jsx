import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import logo1 from "../../assets/logo.png";






const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-10 mt-14 w-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section: Logo and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img
              src={logo1}
              alt="Company Logo"
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-2xl text-white">𝐇𝐋 𝐂𝐨𝐝𝐢𝐧𝐠</h1>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookSquare className="text-2xl" />

            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTwitterSquare className="text-2xl" />

            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagramSquare className="text-2xl" />

              
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedin className="text-2xl" />

            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition"
            >
             <FaSquareYoutube  className="text-2xl"/>


            </a>
          </div>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-sm">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Our Story
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Web Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>© 2024 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
