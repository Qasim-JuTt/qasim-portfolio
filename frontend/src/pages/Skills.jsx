import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiPrisma,
  SiFigma,
  SiTypescript,
} from "react-icons/si";
import { useTheme } from "../context/ColorTheme";

// Skills array with name and icon
const skills = [
  { id: 1, icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { id: 2, icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { id: 3, icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
  {
    id: 4,
    icon: <SiTypescript className="text-blue-400" />,
    name: "TypeScript",
  },
  { id: 5, icon: <FaReact className="text-cyan-400" />, name: "React" },
  { id: 6, icon: <SiRedux className="text-purple-500" />, name: "Redux" },
  {
    id: 7,
    icon: <SiTailwindcss className="text-teal-400" />,
    name: "Tailwind",
  },
  { id: 8, icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { id: 9, icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
  { id: 10, icon: <SiPrisma className="text-gray-400" />, name: "Prisma" },
  { id: 11, icon: <FaGitAlt className="text-red-500" />, name: "Git" },
  { id: 12, icon: <SiFigma className="text-indigo-500" />, name: "Figma" },
  { id: 13, icon: <FaDocker className="text-blue-600" />, name: "Docker" },
];

const Skills = () => {
  const [positions, setPositions] = useState({});
  const { darkMode } = useTheme();

  const handleMouseMove = (e, id) => {
    setPositions((prev) => ({
      ...prev,
      [id]: {
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      },
    }));
  };

  const bgColor = darkMode ? "bg-gray-900" : "bg-gray-100";
  const cardBg = darkMode ? "bg-gray-700 shadow-md" : "bg-white shadow-lg";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen ${bgColor}`}
    >
      <motion.h2
        className={`text-4xl font-bold mb-12 text-center ${
          darkMode ? "text-white" : "text-black"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center gap-2">
            <motion.div
              className={`w-20 h-20 flex items-center justify-center rounded-full ${cardBg} cursor-pointer`}
              animate={
                positions[skill.id]
                  ? {
                      x: positions[skill.id].x / 10,
                      y: positions[skill.id].y / 10,
                    }
                  : {}
              }
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              onMouseMove={(e) => handleMouseMove(e, skill.id)}
              whileHover={{ rotate: 360 }}
            >
              <div className="text-4xl">{skill.icon}</div>
            </motion.div>
            <p className={`text-sm font-medium ${textColor}`}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
