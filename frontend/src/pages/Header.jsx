import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ColorTheme";
import { Link } from "react-scroll"; // Import react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  return (
    <motion.nav
      className={`p-4 transition-all duration-300 fixed top-0 left-0 w-full z-50 ${
        darkMode ? "bg-gray-700 text-white" : "bg-gray-200 shadow-lg text-black"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto  flex justify-between items-center">
        <div className="text-xl font-bold">Qasim | JavaScript Mastery</div>

        <div className="hidden md:flex space-x-6 mx-auto">
          <a href="#" className="hover:text-purple-400">About</a>
          <a href="#" className="hover:text-purple-400">Work</a>
          <Link
            to="contact-section" // Ensure this matches the section ID
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-purple-400"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>

          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden flex flex-col space-y-2 mt-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="project-section"
            smooth={true}
            duration={1000} // Adjusted to a more reasonable duration
            offset={-70}
            spy={true}
            isDynamic={true}
            className="cursor-pointer hover:text-purple-400 uppercase"
          >
            Projects
          </Link> <Link
            to="project-section"
            smooth={true}
            duration={1000} // Adjusted to a more reasonable duration
            offset={-70}
            spy={true}
            isDynamic={true}
            className="cursor-pointer hover:text-purple-400 uppercase"
          >
            Projects
          </Link>
          <Link
            to="experience-section"
            smooth={true}
            duration={1000} // Adjusted duration
            offset={-70}
            spy={true}
            isDynamic={true}
            className="cursor-pointer hover:text-purple-400 uppercase"
          >
            Experience
          </Link>
          <Link
            to="testimonial-section"
            smooth={true}
            duration={1000} // Adjusted duration
            offset={-70}
            spy={true}
            isDynamic={true}
            className="cursor-pointer hover:text-purple-400 uppercase"
          >
            Testimonials
          </Link>
          <Link
            to="contact-section" // Ensure this matches the desktop nav
            smooth={true}
            duration={1000} // Adjusted duration
            offset={-70}
            spy={true}
            isDynamic={true}
            className="cursor-pointer hover:text-purple-400 uppercase"
          >
            Contact
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
