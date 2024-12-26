import React, { useState } from "react";

const faqs = [
  {
    question: "What is HL Tech Coding?",
    answer:
      "HL Tech Coding is an online platform offering coding courses and career support to help individuals succeed in the tech industry.",
  },
  {
    question: "Who can enroll in your courses?",
    answer:
      "Anyone interested in learning coding, regardless of their experience level, can enroll in our courses.",
  },
  {
    question: "Do you provide certificates upon completion?",
    answer:
      "Yes, we provide certificates upon successful completion of each course, which you can showcase on your resume or LinkedIn profile.",
  },
  {
    question: "Are the courses self-paced?",
    answer:
      "Yes, most of our courses are self-paced, allowing you to learn at your convenience. We also have some live sessions for interactive learning.",
  },
  {
    question: "What kind of support is available for students?",
    answer:
      "Our students have access to mentors, career guidance, and a community of peers to help them throughout their learning journey.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked <span className="text-orange-600">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left text-gray-800 font-medium hover:bg-gray-100 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
