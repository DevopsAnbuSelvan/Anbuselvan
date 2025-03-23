'use client';

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <FaEnvelope className="text-gray-500 text-xl" />
                  <span className="text-gray-300">anbuselvan.devops@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaPhone className="text-gray-500 text-xl" />
                  <span className="text-gray-300">+91 91504 92260</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-gray-500 text-xl" />
                  <span className="text-gray-300">Chennai, Tamil Nadu, India - 600 040.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-4">Follow Me</h2>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100044251447119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 bg-gray-500 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FaFacebook className="text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/danielanbuselvan1908/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 bg-gray-500 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anbu-selvan-b12888258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 bg-gray-500 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://twitter.com/Navleslove08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 bg-gray-500 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FaTwitter className="text-2xl" />
                </a>
                <a
                  href="https://github.com/DevopsAnbuSelvan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 bg-gray-500 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://t.me/Anbuselvan19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 bg-gray-500 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FaTelegram className="text-2xl" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
