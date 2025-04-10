import { motion } from "framer-motion";
import { useTheme } from "../context/ColorTheme";

const Hero = () => {
  const name = "Qasim".split("");
  const { darkMode } = useTheme();

  const sectionClasses = `
    ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} 
    min-h-screen flex flex-col md:flex-row items-center justify-center 
    text-center md:text-left px-4 md:px-16
  `;

  return (
    <motion.section
      className={sectionClasses}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="md:w-1/2 flex flex-col items-center md:items-start">
        <motion.h1 className="text-4xl md:text-6xl font-bold flex items-center gap-4">
          <span>Hi, I'm</span>
          <span className="text-purple-400 flex">
            {name.map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.2 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 md:text-xl text-sm text-justify"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I am a{" "}
          <span className="text-purple-400 font-semibold">MERN</span> stack
          developer specializing in full-stack JavaScript development with
          React and Node.js. My expertise includes building scalable and
          high-performance web applications while ensuring SEO ranking
          optimization.
        </motion.p>
      </div>

      <motion.div
        className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img
          src="/images/qasim1.jpeg"
          alt="Qasim's Profile"
          className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
