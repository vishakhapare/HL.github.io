import React from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "Software Developer",
    feedback:
      "HL Tech Coding helped me land my dream job. The courses are practical, engaging, and easy to follow!",
    image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/163901_v9_ba.jpg",
  },
  {
    name: "Jane Smith",
    position: "UI/UX Designer",
    feedback:
      "The team is knowledgeable and the guidance provided is excellent. This platform is a must for career growth!",
    image: "https://veteranspousenetwork.org/wp-content/uploads/2023/10/Janie-Smith-Headshot.jpg",
  },
  {
    name: "Alex Johnson",
    position: "Data Analyst",
    feedback:
      "I loved the flexibility and the career support offered. It was instrumental in my job search success.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Alex_Johnson_1968.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-12 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          What People Are <span className="text-orange-600">Saying</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  className="w-16 h-16 rounded-full border-2 border-orange-600"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h5 className="text-lg font-bold text-gray-800">
                    {testimonial.name}
                  </h5>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
