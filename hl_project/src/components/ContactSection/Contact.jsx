import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setSubmitted(true);
  };

  return (
    <section className="bg-gray-300 py-12 px-6 mt-14">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-lg w-[40%] mr-4">
        <h2 className="text-4xl font-extrabold text-orange-600 text-center mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-900 text-center mb-10">
          Have a question or just want to say hello? We'd love to hear from you!
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Your Name"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-800 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Your Email"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-800 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Subject"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-800 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 px-6  bg-orange-600 text-white font-semibold rounded-xl hover:bg-green-600  focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-500">
              Thank you for your message!
            </h3>
            <p className="text-gray-600 mt-2">
              We’ll get back to you as soon as possible.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
