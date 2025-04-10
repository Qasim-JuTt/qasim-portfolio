import { motion } from "framer-motion";
import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiMongodb, SiPrisma, SiFigma, SiTypescript } from "react-icons/si";

const skills = [
  { id: 1, icon: <FaHtml5 className="text-orange-500" /> },
  { id: 2, icon: <FaCss3Alt className="text-blue-500" /> },
  { id: 3, icon: <FaJs className="text-yellow-500" /> },
  { id: 4, icon: <SiTypescript className="text-blue-400" /> },
  { id: 5, icon: <FaReact className="text-cyan-400" /> },
  { id: 6, icon: <SiRedux className="text-purple-500" /> },
  { id: 7, icon: <SiTailwindcss className="text-teal-400" /> },
  { id: 8, icon: <FaNodeJs className="text-green-500" /> },
  { id: 9, icon: <SiMongodb className="text-green-400" /> },
  { id: 10, icon: <SiPrisma className="text-gray-400" /> },
  { id: 11, icon: <FaGitAlt className="text-red-500" /> },
  { id: 12, icon: <SiFigma className="text-indigo-500" /> },
  { id: 13, icon: <FaDocker className="text-blue-600" /> },
];

const Skills = () => {
  const [positions, setPositions] = useState({});

  const handleMouseMove = (e, id) => {
    setPositions((prev) => ({
      ...prev,
      [id]: { x: e.clientX - window.innerWidth / 2, y: e.clientY - window.innerHeight / 2 },
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 mt-24">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-700 shadow-lg cursor-pointer"
            animate={positions[skill.id] ? { x: positions[skill.id].x / 10, y: positions[skill.id].y / 10 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            onMouseMove={(e) => handleMouseMove(e, skill.id)}
            whileHover={{ rotate: 360 }}
          >
            <div className="text-4xl">{skill.icon}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
