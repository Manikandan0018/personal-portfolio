import React from "react";
import expressivePic from "../img/profile.png"; // **IMPORTANT: Place your image in src/assets**

const skills = [
  { name: "MERN Stack", percentage: 95 },
  { name: "React.js", percentage: 90 },
  { name: "Node.js/Express.js", percentage: 85 },
  { name: "HTML/CSS/Tailwind", percentage: 95 },
  { name: "Database (MongoDB/MySQL)", percentage: 80 },
];

const About = () => {
  return (
    <div className="px-6 py-12 md:py-20" id="about-section">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Image Column (Expressive Photo) */}
        <div className="md:w-1/2 flex justify-center relative order-2 md:order-1">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#303030] p-2 overflow-hidden shadow-2xl">
            {/* Image Placeholder */}
            <img
              src={expressivePic}
              alt="Expressive shot"
              className="w-full h-full object-cover rounded-full border-4 border-primary"
            />
          </div>
          {/* Placeholder for the design flourish/line on the image */}
          <div className="absolute top-0 right-0 w-20 h-1 bg-gray-600 transform -rotate-12 translate-x-4"></div>
        </div>

        {/* Right Content Column (About Me & Skills) */}
        <div className="md:w-1/2 order-1 md:order-2">
          <h3 className="text-4xl font-bold mb-6 text-white relative inline-block">
            About Me
            {/* Underline effect */}
            <span className="absolute left-0 bottom-0 w-3/4 h-1 bg-primary transform translate-y-2"></span>
          </h3>
          <p className="text-gray-400 mb-8">
            As a final-year B.Tech CSE student, I bring a robust skill set in
            **full-stack web development**, specializing in the **MERN stack**
            (MongoDB, Express.js, React.js, Node.js). My focus is on building
            **scalable, secure, and user-friendly** applications, as
            demonstrated by my projects like the Food Order Website and Trust
            Information Portal. I'm adept at translating **Figma/UI designs**
            into pixel-perfect, mobile-first web pages using React.js and
            Tailwind CSS. I'm passionate about **problem-solving** and actively
            seeking an SDE/Software Developer role to create impactful
            solutions.
          </p>

          <p className="text-primary font-semibold mb-4">SKILLS OVERVIEW</p>

          {/* Skill Bars */}
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm font-medium text-white">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-[#303030] rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
