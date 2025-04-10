"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useTheme } from "../context/ColorTheme";

const Overview = () => {
  const { darkMode } = useTheme();
  const cards = [
    { title: "Web Developer", icon: "🌐" },
    { title: "React Native Developer", icon: "📱" },
    { title: "Backend Developer", icon: "⚙️" },
    { title: "Content Creator", icon: "🎥" },
  ];

  return (
    <div className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} w-full`}>
      <div className={`max-w-6xl mx-auto p-6 text-center mt-24 ${darkMode ? "text-white" : "text-black"}`}>
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        <motion.p
          className={`my-10 text-justify ${darkMode ? "text-gray-400" : "text-gray-700"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          I am an expert Full-Stack MERN Developer specializing in React,
          Node.js, Express, and MongoDB, building scalable and high-performance
          web applications. With expertise in RESTful APIs, authentication, and
          database management, I deliver secure and optimized digital solutions.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className={`p-6 rounded-2xl shadow-lg transition-colors duration-300 ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
              }`}
            >
              <motion.div
                className="p-8 rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
