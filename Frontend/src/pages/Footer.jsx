import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";
import { useTheme } from "../context/ColorTheme"; // ✅ Import useTheme

const Footer = () => {
  const { darkMode } = useTheme(); // ✅ Access dark mode value

  // ✅ Dynamic classes
  const footerBg = darkMode ? "bg-gray-700" : "bg-gray-200";
  const textColor = darkMode ? "text-gray-400" : "text-gray-700";
  const headingColor = darkMode ? "text-white" : "text-gray-900";
  const hoverColor = darkMode ? "hover:text-white" : "hover:text-black";
  const borderColor = darkMode ? "border-gray-700" : "border-gray-300";
  const copyColor = darkMode ? "text-gray-500" : "text-gray-500";

  return (
    <footer className={`${footerBg} ${textColor} py-10 px-5`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
        {/* Motion text and social icons in one row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className={`text-lg font-semibold ${headingColor} text-center md:text-left`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Making the world a better place through constructing elegant hierarchies.
          </motion.p>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a href="#" className={`text-xl ${textColor} ${hoverColor}`}><FaFacebookF /></a>
            <a href="#" className={`text-xl ${textColor} ${hoverColor}`}><FaInstagram /></a>
            <a href="#" className={`text-xl ${textColor} ${hoverColor}`}><FaXTwitter /></a>
            <a href="#" className={`text-xl ${textColor} ${hoverColor}`}><FaGithub /></a>
            <a href="#" className={`text-xl ${textColor} ${hoverColor}`}><FaYoutube /></a>
          </motion.div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Solutions", items: ["Marketing", "Analytics", "Automation", "Commerce", "Insights"] },
            { title: "Support", items: ["Submit ticket", "Documentation", "Guides"] },
            { title: "Company", items: ["About", "Blog", "Jobs", "Press"] },
            { title: "Legal", items: ["Terms of service", "Privacy policy", "License"] },
          ].map((section, i) => (
            <div key={i}>
              <h3 className={`${headingColor} font-semibold`}>{section.title}</h3>
              <ul className="mt-2 space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className={`${textColor} ${hoverColor}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className={`border-t mt-8 pt-4 text-center text-sm ${borderColor} ${copyColor}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        &copy; 2024 Your Company, Inc. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
