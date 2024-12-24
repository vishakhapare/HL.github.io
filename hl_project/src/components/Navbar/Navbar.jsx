import React, { useState } from 'react';
import { IoMdLogIn } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import logo1 from "../../assets/logo.png";
import { Link, Navigate, useNavigate } from 'react-router';

const Navbar = () => {
  // State to manage dropdown visibility for "Contact Us"
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className='fixed top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80 w-full bg-black text-white'>
      <div className="container px-5 mx-auto relative text-sm font-semibold">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className='h-10 w-10 mr-2 transition-transform' src={logo1} alt='logo' />
            <span className="text-xl tracking-tight mt-1">𝐇𝐋 𝐂𝐨𝐝𝐢𝐧𝐠</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-12'>
            {/* Home Button without Dropdown */}
            <li className='hover:text-orange-600 cursor-pointer'>
              <Link to="/">Home</Link>
            </li>

            {/* About us Button without Dropdown */}
            <li className='hover:text-orange-600 cursor-pointer'>
              <Link  to="/aboutus">About us</Link>
            </li>

            <li className='hover:text-orange-600'>
              <Link to='/courses'>Courses</Link>
            </li>
            <li className='hover:text-orange-600'>
              <Link to='/contactus'>Contact us</Link>
            </li>
          </ul>

          {/* Contact Us Button with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsContactDropdownOpen(true)}
            onMouseLeave={() => setIsContactDropdownOpen(false)}
          >
            <div 
              className="flex items-center gap-1 px-4 py-5 rounded -mr-40 text-white hover:text-blue-800 hover:bg-blue-50 font-semibold transition-all ease-in-out"
            >
              <IoIosCall className="text-orange-700" size={15} />
              <button className="hover:text-blue-800">
                Contact us
              </button>
            </div>

            {/* Dropdown Menu with transition */}
            {isContactDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 h-48 bg-white shadow-md rounded-md p-4 z-20 text-black transition-all duration-150 ease-out">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <IoIosCall className="text-orange-700" size={20} />
                    <a className='text-lg font-semibold focus:ring-blue-500 focus:border-blue-500'href='#'>9111607044</a>
                  </div>
                  <p className="text-sm text-gray-600">9AM-5PM AEST (Mon-Fri)</p>
                  <a href="mailto:info@vroomvroomvroom.com" className="text-slate-600 text-sm block">
                    Hltech@gmail.com
                  </a>
                  <div className="mt-2">
                    <a href="/Contactus" className="text-slate-600 text-sm block">
                      Contact Form
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Login Button */}
          <div className="flex items-center gap-1 px-9 py-5 -mr-10 rounded text-white hover:text-blue-800 hover:bg-blue-50 font-semibold">
            <IoMdLogIn className="hover:text-blue-800" size={15} />
            <button onClick={()=> navigate("/login")}
            className="hover:text-blue-800">
              Login
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
