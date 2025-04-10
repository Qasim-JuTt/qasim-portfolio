"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useTheme } from "../context/ColorTheme";

const Overview = () => {
  const { darkMode, setDarkMode } = useTheme();
  const cards = [
    { title: "Web Developer", icon: "🌐" },
    { title: "React Native Developer", icon: "📱" },
    { title: "Backend Developer", icon: "⚙️" },
    { title: "Content Creator", icon: "🎥" },
  ];

  return (
    <div className="bg-gray-900 w-full">
      <div className="max-w-6xl mx-auto text-white p-6 text-center mt-24">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Overview
        </motion.h2>
        <motion.p
          className="text-gray-400 my-10 text-justify"
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
              className="bg-gray-700 p-6 rounded-2xl shadow-lg"
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
