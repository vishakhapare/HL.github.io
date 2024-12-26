import React from "react";

const features = [
  {
    id: 1,
    title: "Expert Instructors",
    description:
      "Learn from industry-leading professionals with years of experience.",
    icon: (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.5 4.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM3.75 21a8.25 8.25 0 0116.5 0"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Flexible Learning",
    description:
      "Access courses anytime, anywhere, and learn at your own pace.",
    icon: (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Career Support",
    description:
      "Get personalized career guidance and assistance with job placement.",
    icon: (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7H8M16 11H8m0 4h4m8 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1m16-4V5a2 2 0 00-2-2H6a2 2 0 00-2 2v10m16 0H4"
        />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Why<span className="text-orange-600">Choose us?</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Discover what makes us the best choice for your learning journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
