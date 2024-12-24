import React from "react";
import Layout from "../../components/Layout/Layout";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import video from "../../assets/video2.mp4";

const ContactUs = () => {
  return (
    <Layout>
      <div className="font-sans">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white text-center py-16 h-[30rem] w-screen overflow-hidden mt-14">
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
                <div className="absolute inset-0 bg-black opacity-45 z-10"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mt-80 text-orange-600 ">CONTACT US</h1>
            {/* <p>Image from Unsplash</p> */}
          </div>
        </div>

        {/* Office Section */}
        <div className="py-12 bg-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Offices</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 font-medium">
            {[
              { location: "La Crosse", address: "233 Third Street North Suite 458 La Crosse, WI 54601 USA", phone: " 091990 25109", fax: " 091990 25109" },
              { location: "Los Angeles", address: "500 South South Street Los Angeles, CA 90065 USA", phone:  "091990 25109", fax: " 091990 25109" },
              { location: "Dallas", address: "5005 Greenville Ave Dallas, TX 75264 USA", phone: " 091990 25109", fax: " 091990 25109" },
            ].map((office, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="font-bold text-lg">{office.location}</h3>
              <p className="text-gray-600 mt-2">{office.address}</p>
              <p className="mt-2 font-medium">
                Tel: <a href={`tel:${office.phone}`} className="text-orange-600 font-semibold">{office.phone}</a>
              </p>
              <p className="font-semibold">
                Fax: <a href={`fax:${office.fax}`} className="text-orange-600 font-semibold">{office.fax}</a>
              </p>
        </div>
          ))}
      </div>
    </div>

      {/* Info Section */ }
  <div className="py-12 bg-gray-300">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16">
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="font-bold text-lg">How to help?</h3>
        <p className="text-gray-600 mt-2 font-medium">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </p>
        <button className="mt-4 px-4 py-2 bg-orange-600 hover:bg-green-700 text-white rounded-md">Support Us</button>
      </div>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="font-bold text-lg">Our mission</h3>
        <p className="text-gray-600 mt-2 font-medium">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="font-bold text-lg">Contact Us</h3>
        <p className="text-gray-600 mt-2 font-medium">
          Please feel free to contact us on other matters.
        </p>
        <p className="mt-2">
          <a href="tel: 091990 25109" className="text-orange-600 font-bold">
            +1 (234) 567-8910
          </a>
        </p>
      </div>
    </div>
  </div>

  {/* Contact Form */ }
  <div className="py-12">
    <div className="max-w-4xl mx-auto px-8 md:px-16 mr-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -ml-40">
        <form className="  p-6 rounded-lg">
          <h3 className="font-bold  text-3xl mb-4 text-center">Contact Us</h3>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 ">Name</label>
            <input
              type="text"
              placeholder=" Enter Your Name"
              className="w-full border-b-2 border-gray-600 p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder=" Enter Your valid Email address"
              className="w-full border-b-2 border-gray-600 p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border-b-2 border-gray-600 p-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-orange-600 hover:bg-green-700 text-black rounded-2xl w-full font-bold"
          >
            Submit
          </button>
        </form>
        <div className=" bg-stone-100">
          <h3 className="font-bold text-xl ml-7">Call us</h3>
          <p className="mt-2 ml-7">
            <a href="tel:+12345678910" className="text-orange-600 font-bold">
              +91 091990 25109
            </a>
          </p>
          <h3 className="font-bold text-lg mt-6 ml-7">Location</h3>
          <p className="mt-2 ml-7">H.N 78, in front of Classic Gallery, Indrapuri C sector, Sector C, Indrapuri, Bhopal, Madhya Pradesh 462022</p>
          <h3 className="font-bold text-lg mt-6 ml-7">Social</h3>
          <div className="flex space-x-4 mt-2 ml-7">
            <a href="#" className="text-gray-600 hover:text-orange-600"> <FaFacebookSquare className="text-2xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-600">
             <FaInstagramSquare className="text-2xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-600">
              <FaTwitterSquare className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div >
 

    
    </Layout >
  );
};

export default ContactUs;
