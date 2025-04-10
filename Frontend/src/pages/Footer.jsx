import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-400 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
        {/* Motion text and social icons in one row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p 
            className="text-lg font-semibold text-white text-center md:text-left"
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
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaXTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaGithub /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaYoutube /></a>
          </motion.div>
        </div>

        {/* Footer links in another row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold">Solutions</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-white">Marketing</a></li>
              <li><a href="#" className="hover:text-white">Analytics</a></li>
              <li><a href="#" className="hover:text-white">Automation</a></li>
              <li><a href="#" className="hover:text-white">Commerce</a></li>
              <li><a href="#" className="hover:text-white">Insights</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Support</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-white">Submit ticket</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Jobs</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-white">Terms of service</a></li>
              <li><a href="#" className="hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white">License</a></li>
            </ul>
          </div>
        </div>
      </div>
      <motion.div 
        className="border-t border-gray-700 mt-8 pt-4 text-center text-sm"
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