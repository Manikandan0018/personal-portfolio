import React from "react";
import profilePic from "../img/profile.png"; // **IMPORTANT: Place your image in src/assets**

const Hero = () => {
  const { name, role, summary, link } = {
    name: "Manikandan R",
    role: "Full-Stack Developer",
    summary:
      "Final-year B.Tech CSE student with hands-on experience in full-stack web development using the MERN stack. Passionate about building scalable, user-friendly applications. Actively seeking an SDE/Software Developer role to create impactful solutions.",
    link: "https://www.linkedin.com/in/manikandan110305/",
    github: "https://github.com/Manikandan0018",
  };

  return (
    <div
      className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 md:py-24"
      id="hero-section"
    >
      {/* Left Content Column */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <p className="text-lg text-primary font-semibold mb-2">Hi I am</p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
          {name}
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
          {role}
          {/* Underline effect */}
          <span className="absolute left-0 bottom-0 w-full h-1 bg-primary transform translate-y-2"></span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-md">{summary}</p>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="inline-block bg-primary hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-xl"
        >
          Hire Me
        </a>

        {/* Placeholder for the design flourish/line on the image */}
        <div className="mt-8 relative hidden lg:block">
          <div className="w-16 h-1 bg-gray-600 absolute bottom-0 left-0 transform rotate-12"></div>
        </div>
      </div>

      {/* Right Image Column */}
      <div className="md:w-1/2 flex justify-center relative">
        {/* The main circular image area */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#303030] p-2 overflow-hidden shadow-2xl">
          {/* The image is a placeholder, ensure you have an actual image named profile-pic.jpg */}
          <img
            src={profilePic}
            alt={name}
            className="w-full h-full object-cover rounded-full border-4 border-primary"
          />
        </div>

        {/* Social Icons - positioned based on the image's design */}
        <div className="absolute right-0 bottom-10 flex flex-col space-y-3 p-4 bg-transparent rounded-full transform translate-x-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition duration-300"
          >
            {/* Replace with an actual LinkedIn SVG icon */}
            <span className="text-xl">in</span>
          </a>
          <a
            href=''
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition duration-300"
          >
            {/* Replace with an actual GitHub SVG icon */}
            <span className="text-xl">gh</span>
          </a>
          {/* Add more social icons here (Twitter, etc.) */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
