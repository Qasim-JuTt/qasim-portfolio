import { motion } from "framer-motion";

const nameVariants = {
  initial: { opacity: 0 },
  animate: (i) => ({
    opacity: 1,
    transition: { duration: 0.3, delay: i * 0.2 },
  }),
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const Hero = () => {
  const name = "Qasim".split("");

  return (
    <motion.section
      className="bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 md:px-16 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="md:w-1/2 flex flex-col items-center md:items-start relative pl-8">
        <motion.div
          className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-400 via-purple-500 to-transparent opacity-50"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "100%", opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ width: "4px", borderRadius: "50%" }}
        >
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full"
            animate={{ y: [0, "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>

        {/* Name Animation */}
        <motion.h1 className="text-4xl md:text-6xl font-bold flex items-center gap-4">
          <span className="text-white">Hi, I'm</span>
          <span className="text-purple-400 flex">
            {name.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={nameVariants}
                initial="initial"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                className="inline-block"
                whileHover={{ scale: 1.2 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 md:text-xl text-sm text-justify" // Added text color
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I am a {" "}
          <motion.span className="text-purple-400 font-semibold">
            {"MERN".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1, // Stagger effect
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>{" "}
          stack developer
          specializing in full-stack JavaScript development with React and
          Node.js. My expertise includes building scalable and high-performance
          web applications while ensuring SEO ranking optimization.
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
          alt="3D Setup"
          className="w-full  bg-gray-900 max-w-md md:max-w-lg rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
