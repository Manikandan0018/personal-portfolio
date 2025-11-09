import React from "react";
// Replace these with actual SVG icons later (e.g., from Lucide or Heroicons)
const IconPlaceholder = ({ children }) => (
  <div className="text-primary text-3xl mb-4">{children}</div>
);

const services = [
  {
    title: "UI/UX Engineering",
    description:
      "Developed responsive, accessible UIs, translating Figma/UI designs into pixel-perfect, mobile-first web pages.",
    icon: <IconPlaceholder>🎨</IconPlaceholder>,
  },
  {
    title: "Web Design (Frontend)",
    description:
      "Expertise in React.js, HTML5, CSS3, and Tailwind CSS for creating modern, high-performance user interfaces.",
    icon: <IconPlaceholder>🌐</IconPlaceholder>,
  },
  {
    title: "App Development (Full-Stack)",
    description:
      "End-to-end development using the MERN stack (MongoDB, Express, React, Node) for scalable applications.",
    icon: <IconPlaceholder>📱</IconPlaceholder>,
  },
  {
    title: "API/Backend Integration",
    description:
      "Integrated RESTful APIs, handled secure JWT authentication, and managed database connections (MongoDB/MySQL).",
    icon: <IconPlaceholder>⚙️</IconPlaceholder>,
  },
];

const Services = () => {
  return (
    <div className="px-6 py-12 md:py-20" id="services-section">
      <h3 className="text-4xl font-bold text-center mb-4 text-white">
        Services
      </h3>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        These services reflect the core technical competencies and experiences
        gained from my projects and internship.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#242424] p-6 rounded-xl border border-gray-700 hover:border-primary transition duration-300 ease-in-out shadow-lg"
          >
            {service.icon}
            <h4 className="text-xl font-semibold mb-2 text-white">
              {service.title}
            </h4>
            <p className="text-sm text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
