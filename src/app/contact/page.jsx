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
import Navbar from "../../components/Navbar";
import "../style.css";

export default function ContactMe() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 animate-gradient p-4 sm:p-6">
        <div className="w-full max-w-[1440px] bg-white/95 backdrop-blur-lg rounded-[5px] sm:rounded-[5px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(75,_85,_99,_0.7)] mx-4 sm:mx-6 border-2 border-white/30 hover:shadow-[0_20px_60px_rgba(75,_85,_99,_0.8)] transition-all duration-500">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12 text-center text-black animate-fadeIn">
            Contact Me
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 animate-slideUp delay-100">
            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Contact Info</h2>
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex items-center space-x-3 sm:space-x-4">
                  <FaEnvelope className="text-gray-700 text-lg sm:text-xl" />
                  <span className="text-base sm:text-lg text-gray-700 break-all">anbuselvan.devops@gmail.com</span>
                </li>

                <li className="flex items-center space-x-3 sm:space-x-4">
                  <FaPhone className="text-gray-700 text-lg sm:text-xl" />
                  <span className="text-base sm:text-lg text-gray-700">+91 91504 92260</span>
                </li>

                <li className="flex items-center space-x-3 sm:space-x-4">
                  <FaMapMarkerAlt className="text-gray-700 text-lg sm:text-xl flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gray-700">Chennai, Tamil Nadu, India - 600 040.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Follow Me</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                <a
                  href="https://www.facebook.com/profile.php?id=100044251447119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 sm:p-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-[5px] hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  <FaFacebook className="text-xl sm:text-2xl" />
                </a>

                <a
                  href="https://www.instagram.com/danielanbuselvan1908/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 sm:p-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-[5px] hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  <FaInstagram className="text-xl sm:text-2xl" />
                </a>

                <a
                  href="https://www.linkedin.com/in/anbu-selvan-b12888258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 sm:p-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-[5px] hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  <FaLinkedin className="text-xl sm:text-2xl" />
                </a>

                <a
                  href="https://twitter.com/Navleslove08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 sm:p-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-[5px] hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  <FaTwitter className="text-xl sm:text-2xl" />
                </a>

                <a
                  href="https://github.com/DevopsAnbuSelvan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 sm:p-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-[5px] hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  <FaGithub className="text-xl sm:text-2xl" />
                </a>

                <a
                  href="https://t.me/Anbuselvan19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 sm:p-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-[5px] hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  <FaTelegram className="text-xl sm:text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
