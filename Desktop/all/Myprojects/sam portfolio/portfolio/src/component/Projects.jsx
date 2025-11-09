import React from "react";

// Data from your resume, now including an 'image' field
const projectData = [
  {
    title: "Book Order Website",
    tech: "MERN Stack",
    link: "https://book-order-kqa2.vercel.app/",
    year: "2025",
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/9974215366164530645_0", // Image from search
    description: [
      "Built a full-stack food ordering platform with real-time order placement, tracking, and secure JWT authentication.",
      "Developed an admin dashboard to manage menus, update orders, and monitor sales.",
      "Integrated SMS notifications to instantly update users about order status.",
    ],
  },
  {
    title: "Trust Information Portal",
    tech: "MERN Stack",
    link: "https://trust-portal-ecru.vercel.app/",
    year: "2025",
    image:
      "http://googleusercontent.com/image_collection/image_retrieval/6856696857607085863_0", // Image from search
    description: [
      "Created a secure platform for real-time post publishing and event announcements.",
      "Integrated Cloudinary for optimized media handling and role-based access.",
      "Delivered a mobile-first UI with content moderation and smooth UX.",
    ],
  },
  {
    title: "Plants Order UI/UX Frontend Web",
    tech: "React.js, ES6+, Tailwind CSS",
    link: "https://softdef-intern.vercel.app/",
    // === IMPORTANT: REPLACE THIS PLACEHOLDER URL WITH A REAL SCREENSHOT OF YOUR PROJECT ===
    image:
      "https://via.placeholder.com/800x450/303030/FF6E40?text=Plants+Order+Screenshot",
    description: [
      "Developed a single-page, mobile-friendly web app with React.js and ES6+.",
      "Implemented filtering, product categorization, and optimized re-rendering via Hooks.",
      "Designed an intuitive, accessible UI/UX optimized for performance and responsiveness.",
    ],
  },
  {
    title: "Mentor Booking Website",
    tech: "MERN Stack, Stripe, Socket.io",
    link: "https://mentor-booking-website.vercel.app/",
    // === IMPORTANT: REPLACE THIS PLACEHOLDER URL WITH A REAL SCREENSHOT OF YOUR PROJECT ===
    image:
      "https://via.placeholder.com/800x450/303030/FF6E40?text=Mentor+Booking+Screenshot",
    description: [
      "Enabled booking and payment using the Stripe API.",
      "Integrated real-time 1-to-1 chat functionality using Socket.io for immediate mentor/mentee communication.",
    ],
  },
];

const Projects = () => {
  return (
    <div className="px-6 py-12 md:py-20" id="projects-section">
      <h3 className="text-4xl font-bold text-center mb-4 text-white">
        My Projects
      </h3>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Hands-on experience building scalable, user-friendly applications using
        the MERN stack and modern front-end tools.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-[#242424] rounded-xl border border-gray-700 hover:border-primary transition duration-300 ease-in-out shadow-xl overflow-hidden" // Removed padding here
          >
            {/* Project Image Area */}
            <div className="h-60 overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Project Details (with padding) */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h4>
                  <span className="text-primary text-sm font-medium bg-[#3b1c14] px-3 py-1 rounded-full">
                    {project.tech}
                  </span>
                </div>
                {project.year && (
                  <span className="text-gray-500 text-sm mt-1">
                    {project.year}
                  </span>
                )}
              </div>

              {/* Description / Key Achievements */}
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
                {project.description.map((item, i) => (
                  <li key={i} className="text-sm">
                    {item
                      .replace("MERN stack", "**MERN stack**")
                      .replace("JWT authentication", "**JWT authentication**")
                      .replace("Cloudinary", "**Cloudinary**")
                      .replace("Stripe API", "**Stripe API**")
                      .replace("Socket.io", "**Socket.io**")}
                  </li>
                ))}
              </ul>

              {/* Live Demo Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                View Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
