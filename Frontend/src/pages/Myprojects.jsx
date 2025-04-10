"use client";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Tilt from "react-parallax-tilt";
import { useTheme } from "../context/ColorTheme";

const MyProjects = () => {
  const { darkMode } = useTheme();

  const projects = [
    {
      title: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: ["#react", "#mongodb", "#tailwind"],
      image: "/images/myprojects/website1.jpeg",
    },
    {
      title: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: ["#react", "#restapi", "#scss"],
      image: "/images/myprojects/website2.jpeg",
    },
    {
      title: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: ["#nextjs", "#supabase", "#css"],
      image: "/images/myprojects/website4.jpeg",
    },
  ];

  // Consistent background with Skills section
  const sectionBg = darkMode ? "bg-gray-900" : "bg-gray-100";
  const cardBg = "bg-white"; // Always white
  const descColor = darkMode ? "text-gray-400" : "text-gray-600";
  const tagColor = darkMode ? "text-purple-400" : "text-blue-600";

  return (
    <Element name="project">
      <div className={`${sectionBg} w-full`}>
        <div className="max-w-6xl mx-auto p-6 text-center">
          <motion.h2
            className={`text-4xl font-bold mb-12 text-center ${darkMode ? "text-white" : "text-black"}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>

          <motion.p
            className={`my-10 text-justify ${descColor}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Explore my My Projects section to see the innovative web applications I've built using the MERN stack.
            Each project showcases my expertise in frontend and backend development, database management, and API integration.
            From dynamic web platforms to scalable applications, I focus on delivering high-performance and user-friendly solutions.
            Take a look at my work and see how I bring ideas to life!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                className={`${cardBg} p-4 rounded-2xl shadow-lg`}
              >
                <motion.div
                  className="p-6 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                  <p className={`mt-1 text-sm ${descColor}`}>
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className={`text-xs ${tagColor}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default MyProjects;
