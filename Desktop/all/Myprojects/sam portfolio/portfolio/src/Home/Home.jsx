import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import trust from "../img/trust.png"
import book from "../img/book.png";
import mentor from "../img/mentor.png";
import plant from "../img/plant.png";
import movie from "../img/movie.png";
import juice from "../img/juice.png";
import profile from "../img/profile.jpg";

/* -------------------------
  NOTE: This file expects:
  - Tailwind CSS set up (PostCSS + Tailwind)
  - framer-motion installed
  - Your project images available via RESUME_DATA.projects[].image
  - Save as src/pages/Home.jsx (or adapt import)
--------------------------*/

/* --- DATA FROM RESUME (kept same, but trimmed for brevity in some arrays) --- */
const RESUME_DATA = {
  name: "Manikandan R",
  role: "Full-Stack Developer",
  email: "Manikandan110305@gmail.com",
  phone: "78269-20882",
  location: "Ariyalur, Tamil Nadu",
  linkedin: "https://www.linkedin.com/in/manikandan110305/",
  github: "https://github.com/Manikandan0018",
  summary:
    "Final-year B.Tech CSE student with hands-on experience in full-stack web development using the MERN stack. Passionate about building scalable, user-friendly applications. Actively seeking an SDE/Software Developer role to create impactful solutions.",

  skills: [
    {
      name: "React.js",
      percentage: 90,
      img: "https://placehold.co/64x64/303030/FF6E40?text=React",
    },
    {
      name: "MERN (Full-Stack)",
      percentage: 85,
      img: "https://placehold.co/64x64/303030/FF6E40?text=MERN",
    },
    {
      name: "Node/Express",
      percentage: 80,
      img: "https://placehold.co/64x64/303030/FF6E40?text=Node",
    },
    {
      name: "UI UX",
      percentage: 95,
      img: "https://placehold.co/64x64/303030/FF6E40?text=UI",
    },
    {
      name: "Mongo Dp / Sql",
      percentage: 80,
      img: "https://placehold.co/64x64/303030/FF6E40?text=Node",
    },
  ],

  tools:
    "JavaScript (ES6+), TypeScript (Basic), Python, Tailwind CSS, MongoDB, MySQL, AWS (Basics), Firebase, CI/CD, Git, GitHub, Postman, Cloudinary, Stripe API, Figma",

  services: [
    {
      title: "Full-Stack Development",
      description:
        "End-to-end applications using MERN with best practices for maintainability and performance.",
      icon: "💻",
    },
    {
      title: "Frontend UI/UX",
      description:
        "Pixel-perfect, responsive interfaces from Figma to production using React + Tailwind.",
      icon: "🎨",
    },
    {
      title: "Realtime & Integrations",
      description:
        "Realtime chat/order updates (Socket.io), payments (Stripe) and 3rd-party integrations.",
      icon: "⚡",
    },
    {
      title: "Cloud & Deploy",
      description:
        "Deployments, CI/CD flows and basic AWS/Vercel/Netlify knowledge.",
      icon: "☁️",
    },
  ],

  projects: [
    {
      title: "Book Order Website",
      tech: "MERN",
      link: "https://book-order-kqa2.vercel.app/",
      image: book,
      description: [
        "Full-stack ordering with real-time order placement & JWT auth.",
        "Admin dashboard for menu and order management.",
        "SMS notifications and order tracking.",
      ],
    },
    {
      title: "Trust Information Portal",
      tech: "MERN",
      link: "https://trust-portal-ecru.vercel.app/",
      image: trust,
      description: [
        "Real-time post publishing and media handling via Cloudinary.",
        "Role-based access and content moderation.",
      ],
    },
    {
      title: "Mentor Booking Website",
      tech: "MERN + Stripe + Socket.io",
      link: "https://mentor-booking-website.vercel.app/",
      image: mentor,
      description: [
        "Booking + payment flow via Stripe.",
        "1:1 real-time chat for mentor/mentee communication.",
      ],
    },
    {
      title: "Plant Order Website",
      tech: "React + Vite + Tailwind CSS + Bootstrap",
      link: "https://softdef-intern.vercel.app/",
      image: plant,
      description: [
        "Modern responsive frontend for ordering plants online.",
        "Built with React (Vite) using Tailwind and Bootstrap for smooth UI/UX.",
      ],
    },
  ],

  experience: [
    {
      role: "Frontend Development Intern",
      company: "Next24 Tech",
      duration: "June 2024 – August 2024",
      details: [
        "React & Tailwind-based responsive apps",
        "API integration, Redux Toolkit & Agile collaboration",
      ],
    },
    {
      role: "Freelance UI Engineer",
      company: "Self-Initiated Projects",
      duration: "Jan 2023 – Present",
      details: [
        "Full-stack projects, optimized performance, deployed to Vercel/AWS",
      ],
    },
  ],

  education:
    "Kalasalingam University - BTECH Computer Science and Engineering (2022 - 2026)",
};

/* --- Small animation presets --- */
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.98, y: 12 },
  enter: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45 } },
};

/* --- IconLink helper --- */
const IconLink = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-white hover:text-[#ff6e40] transition-colors"
  >
    {children}
  </a>
);

/* --- Modal to show project screenshot --- */
const ScreenshotModal = ({ open, onClose, src, title }) => {
  useEffect(() => {
    const onKey = (e) => (e.key === "Escape" ? onClose() : null);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-hidden
      />
      <div
        className="relative max-w-5xl w-full rounded-xl overflow-hidden shadow-2xl bg-[#0b0b0b] z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white bg-transparent p-2 rounded-md"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          <img
            src={src}
            alt={title}
            className="w-full h-[60vh] object-contain bg-[#111] rounded"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/1200x675/111111/ff6e40?text=No+Screenshot";
            }}
          />
        </div>
      </div>
    </div>
  );
};

/* --- Hero component --- */
const Hero = ({ onHireClick }) => (
  <motion.section
    id="home"
    initial="hidden"
    whileInView="enter"
    viewport={{ once: true }}
    variants={sectionVariant}
    className="min-h-[72vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 lg:px-0 py-16"
  >
    {/* Left */}
    <div className="lg:w-1/2">
      <p className="text-lg text-[#ff6e40] font-semibold mb-2">Hi, I am</p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
        {RESUME_DATA.name}
      </h1>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white inline-block border-b-4 border-[#ff6e40] pb-2">
        {RESUME_DATA.role}
      </h2>
      <p className="text-gray-400 mb-6 max-w-xl">{RESUME_DATA.summary}</p>

      <div className="flex gap-4 flex-wrap">
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className="inline-flex items-center gap-3 bg-[#ff6e40] hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-shadow shadow-md"
          onClick={(e) => {
            // smooth scroll handled by browser; keep default
            if (onHireClick) onHireClick();
          }}
          aria-label="Hire me"
        >
          Hire Me
          <span className="text-sm opacity-90">→</span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="#projects"
          className="inline-flex items-center gap-2 border border-gray-700 hover:border-[#ff6e40] text-white font-medium py-3 px-5 rounded-lg transition"
        >
          View Work
        </motion.a>
      </div>
    </div>

    {/* Right: profile circle */}
    <motion.div
      className="lg:w-1/2 flex justify-center"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="relative  w-75 h-75 md:w-80 md:h-80 lg:h-140 lg:w-140 rounded-full bg-[#232323] p-3 overflow-hidden shadow-2xl border-4 border-[#ff6e40]">
        <img
          src={profile}
          alt={RESUME_DATA.name}
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/320x320/303030/FF6E40?text=Profile+Photo";
          }}
        />
        <div className="absolute -bottom-8 right-4 flex space-x-3">
          <IconLink href={RESUME_DATA.github} label="GitHub">
            <div className="bg-[#111] p-2 rounded-full border border-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.866 8.163 6.84 9.48.5.092.682-.216.682-.478 0-.237-.008-.868-.013-1.795-2.782.603-3.369-1.34-3.369-1.34-.454-1.155-1.107-1.463-1.107-1.463-.907-.62.068-.607.068-.607 1.004.07 1.531 1.03 1.531 1.03.892 1.527 2.341 1.083 2.91.826.09-1.284.35-2.083.637-2.556-2.235-.253-4.577-1.117-4.577-4.996 0-1.105.394-2.007 1.03-2.716.103-.255. - . 097-2.67 0 0 .838-.27 2.752 1.026A9.563 9.563 0 0 1 12 6.844c.85.004 1.70.115 2.502.338 1.914-1.296 2.752-1.026 2.752-1.026.543 1.387.2 2.415.097 2.67.636.709 1.03 1.611 1.03 2.716 0 3.888-2.342 4.735-4.585 4.988.358.307.678.918.678 1.854 0 1.34-.012 2.417-.012 2.747 0 .265.18.57.688.478C21.134 20.163 24 16.418 24 12c0-5.523-4.477-10-10-10Z" />
              </svg>
            </div>
          </IconLink>

          <IconLink href={RESUME_DATA.linkedin} label="LinkedIn">
            <div className="bg-[#111] p-2 rounded-full border border-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.52-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
          </IconLink>
        </div>
      </div>
    </motion.div>
  </motion.section>
);

/* --- Skills section --- */
const Skills = () => (
  <motion.section
    id="skills"
    initial="hidden"
    whileInView="enter"
    viewport={{ once: true }}
    variants={sectionVariant}
    className="px-6 lg:px-0 py-12 md:py-20"
  >
    <div className="max-w-6xl mx-auto">
      <h3 className="text-4xl font-bold text-white text-center mb-6">Skills</h3>
      <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
        Core technical skills that I bring to product teams — a blend of
        frontend, backend and deployment knowledge.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: skill list with icons */}
        <div className="space-y-4">
          {RESUME_DATA.skills.map((s, idx) => (
            <motion.div
              key={s.name}
              variants={cardVariant}
              className="p-4 bg-[#222] rounded-xl border border-gray-800 flex items-center gap-4"
            >
              <img
                src={s.img}
                alt={s.name}
                className="w-12 h-12 rounded-lg object-cover border border-gray-700"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white font-semibold">{s.name}</h4>
                  <span className="text-sm text-gray-300">{s.percentage}%</span>
                </div>

                <div className="w-full bg-[#171717] rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.25,
                      ease: "easeOut",
                      delay: idx * 0.12,
                    }}
                    className="h-2.5 rounded-full bg-gradient-to-r from-[#ff6e40] to-[#ff8a60]"
                    style={{ width: `${s.percentage}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: tools & services */}
        <div className="p-6 bg-[#242424] rounded-xl border border-gray-800">
          <h4 className="text-xl font-semibold text-white mb-4">
            Tools & Technologies
          </h4>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {RESUME_DATA.tools.split(",").map((tool, i) => (
              <span
                key={i}
                className="relative px-5 py-2 text-sm font-medium text-white rounded-full
  bg-[#ff6e40] shadow-[0_0_3px_#ff6e40]
  hover:shadow-[0_0_6px_#ff825b]
  transition-all duration-300 hover:scale-105 cursor-default select-none"
              >
                {tool.trim()}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {RESUME_DATA.services.map((sv) => (
              <div
                key={sv.title}
                className="bg-[#1a1a1a] rounded-lg p-3 flex gap-3 items-start border border-gray-800"
              >
                <div className="text-2xl">{sv.icon}</div>
                <div>
                  <p className="text-sm font-semibold text-white">{sv.title}</p>
                  <p className="text-xs text-gray-400">{sv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

/* --- Projects section with modal --- */
const Projects = ({ onOpenModal }) => {
  const [focused, setFocused] = useState(null);

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="enter"
      viewport={{ once: true }}
      variants={sectionVariant}
      className="px-6 lg:px-0 py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-4 text-white">
          Projects
        </h3>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          A selection of hands-on projects showcasing full-stack development,
          realtime features and production deployments.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={cardVariant}
              className="bg-[#242424] rounded-xl border border-gray-700 shadow-xl overflow-hidden"
            >
              <div className="h-44 md:h-52 lg:h-80 overflow-hidden relative group">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/1200x675/111111/ff6e40?text=No+Image";
                  }}
                />
                
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-white">{p.title}</h4>
                    <p className="text-sm text-gray-300 mb-2">
                      {p.description[0]}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#ff6e40] hover:bg-orange-600 text-white font-medium py-2 px-3 rounded-md transition"
                  >
                    View Live
                  </a>

                  <button
                    className="inline-flex cursor-pointer items-center gap-2 border border-gray-700 hover:border-[#ff6e40] text-white py-2 px-3 rounded-md transition"
                    onClick={() => {
                      setFocused(p);
                      if (onOpenModal) onOpenModal(p);
                    }}
                    aria-label={`Open ${p.title} screenshot`}
                  >
                    Screenshot
                  </button>

                  <span className="inline-flex text-orange-500 items-center gap-2 border border-gray-700 hover:border-[#ff6e40] py-2 px-3 rounded-md transition">
                    {p.tech} 
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* local modal for quick open */}
        <ScreenshotModal
          open={!!focused}
          onClose={() => setFocused(null)}
          src={focused?.image}
          title={focused?.title}
        />
      </div>

      {/* Figma UI/UX Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          🎨 UI/UX Figma Designs
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
          {[
            {
              name: "🎬 Movie Booking App UI/UX",
              link: "https://www.figma.com/proto/SQgyfZSm2CXUAiJtquHjBB/Untitled?node-id=5-2&starting-point-node-id=5%3A2",
              image: movie,
            },
            {
              name: "🥤 Juice Drinks Order App UI/UX",
              link: "https://www.figma.com/proto/ZMmt9izeTYBXrmH1fPw7qI/Untitled?node-id=6-51",
              image: juice,
            },
          ].map((f, i) => (
            <motion.a
              key={i}
              href={f.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a1a] border border-gray-700 hover:border-[#ff6e40] rounded-xl overflow-hidden transition-all duration-300 shadow-lg"
            >
              <img
                src={f.image}
                alt={f.name}
                className="w-full h-90 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {f.name}
                </h3>
                <p className="text-sm text-orange-400">
                  Click to view prototype on Figma
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </motion.section>
  );
};



/* --- Contact section --- */
const Contact = () => (
  <motion.section
    id="contact"
    initial="hidden"
    whileInView="enter"
    viewport={{ once: true }}
    variants={sectionVariant}
    className="px-6 lg:px-0 py-12 md:py-20"
  >
    <div className="max-w-4xl mx-auto bg-[#242424] p-8 rounded-xl border border-gray-700">
      <h3 className="text-3xl font-bold text-white text-center mb-4">
        Get In Touch
      </h3>
      <p className="text-gray-400 text-center mb-6">
        I'm actively looking for SDE/Software Developer roles — feel free to
        email or connect on LinkedIn.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-4 bg-[#303030] rounded-lg border-b-4 border-[#ff6e40]">
          <p className="text-sm font-semibold text-white">Email</p>
          <a
            href={`mailto:${RESUME_DATA.email}`}
            className="text-gray-300 block mt-1"
          >
            {RESUME_DATA.email}
          </a>
        </div>
        <div className="p-4 bg-[#303030] rounded-lg border-b-4 border-[#ff6e40]">
          <p className="text-sm font-semibold text-white">Phone</p>
          <p className="text-gray-300 block mt-1">+91 {RESUME_DATA.phone}</p>
        </div>
        <div className="p-4 bg-[#303030] rounded-lg border-b-4 border-[#ff6e40]">
          <p className="text-sm font-semibold text-white">Location</p>
          <p className="text-gray-300 block mt-1">{RESUME_DATA.location}</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href={`mailto:${
            RESUME_DATA.email
          }?subject=Opportunity%20for%20${encodeURIComponent(
            RESUME_DATA.role
          )}`}
          className="inline-block bg-[#ff6e40] hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Email Me
        </a>
      </div>
    </div>
  </motion.section>
);

/* --- Main Home page --- */
export default function Home() {
  const [modal, setModal] = useState(null);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white antialiased">
      {/* Scrollbar style (optional) */}
      <style>{`
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-thumb { background-color: #ff6e40; border-radius: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
      `}</style>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0b] bg-opacity-95 border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold text-[#ff6e40]">M</div>
            <div className="text-lg font-semibold">anikandanR</div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-[#ff6e40] transition">
              Home
            </a>
            <a href="#skills" className="hover:text-[#ff6e40] transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#ff6e40] transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#ff6e40] transition">
              Contact
            </a>
            <a
              href="/Manikandan_Resume.pdf"
              download
              className="bg-[#ff6e40] text-white py-2 px-3 rounded-md hidden sm:inline-block"
            >
              Download CV
            </a>
          </div>

          <div className="md:hidden">
            {/* Mobile: simple anchor menu fallback */}
            <a
              href="#contact"
              className="text-sm bg-[#ff6e40] py-2 px-3 rounded-md"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Page content */}
      <main className="max-w-7xl mx-auto pt-28 pb-24">
        <Hero onHireClick={() => window.location.assign("#contact")} />

        <Skills />

        <Projects onOpenModal={(p) => setModal(p)} />

        {/* Education & Experience Footer Block */}
        <motion.footer
          className="max-w-7xl mx-auto px-6 py-16 mt-12 border-t border-gray-800 bg-gradient-to-t from-[#060606] to-transparent text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h4 className="text-3xl font-bold mb-4 text-white">
              Education & Experience
            </h4>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              {RESUME_DATA.education}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {RESUME_DATA.experience.map((exp) => (
                <div
                  key={exp.role}
                  className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800"
                >
                  <h6 className="text-[#ff6e40] font-semibold">{exp.role}</h6>
                  <p className="text-white font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.duration}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-8">
              © {new Date().getFullYear()} {RESUME_DATA.name}. All rights
              reserved.
            </p>
          </div>
        </motion.footer>

        <Contact />
      </main>

      {/* Global modal (opened from project list) */}
      <ScreenshotModal
        open={!!modal}
        onClose={() => setModal(null)}
        src={modal?.image}
        title={modal?.title}
      />
    </div>
  );
}
