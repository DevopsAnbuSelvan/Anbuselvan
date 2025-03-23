import Navbar from "../../components/Navbar";
import "../style.css";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 animate-gradient p-4 sm:p-6">
        <div className="w-full max-w-[1440px] bg-white/95 backdrop-blur-lg rounded-[5px] sm:rounded-[5px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(75,_85,_99,_0.7)] mx-4 sm:mx-6 border-2 border-white/30 hover:shadow-[0_20px_60px_rgba(75,_85,_99,_0.8)] transition-all duration-500">
          <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-black animate-fadeIn">
            My Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideUp delay-100">
            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3">
                  <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-[5px]">
                    Android App
                  </span>
                  <h2 className="text-xl font-bold text-black">React Native</h2>
                </div>
                <p className="mt-4 text-lg text-gray-700">
                  An Android Application build using React Native & Expo Go for
                  people or Organization who needs Blood for Emergency.
                </p>
              </div>
              <a
                href="https://github.com/AnbuSelvanOfficial/Blood-App"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-[5px] hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
              >
                View Code
              </a>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3">
                  <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-[5px]">
                    Web App
                  </span>
                  <h2 className="text-xl font-bold text-black">React Js</h2>
                </div>
                <p className="mt-4 text-lg text-gray-700">
                  An To-Do List web based Application build using React Js.
                </p>
              </div>
              <a
                href="https://todolist-d5cf8.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-[5px] hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
              >
                View App
              </a>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3">
                  <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-[5px]">
                    Website
                  </span>
                  <h2 className="text-xl font-bold text-black">HTML,CSS,Js</h2>
                </div>
                <p className="mt-4 text-lg text-gray-700">
                  My Portfolio Website build using simple HTML, CSS, Js.
                </p>
              </div>
              <a
                href="https://anbuselvanofficial.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-[5px] hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
              >
                View Website
              </a>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3">
                  <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-[5px]">
                    Android App
                  </span>
                  <h2 className="text-xl font-bold text-black">React Native</h2>
                </div>
                <p className="mt-4 text-lg text-gray-700">
                  An Android Application build using React Native & Expo Go,
                  NodeJs, Firebase for Staff and Student Mentoring System for
                  their Semester Projects.
                </p>
              </div>
              <a
                href="https://github.com/AnbuSelvanOfficial/promentor"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-[5px] hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
              >
                View Code
              </a>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3">
                  <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-[5px]">
                    Android App
                  </span>
                  <h2 className="text-xl font-bold text-black">React Native</h2>
                </div>
                <p className="mt-4 text-lg text-gray-700">
                  An Android Application build using React Native & Expo Go,
                  NodeJs, Firebase for View and Review for Latest Movies.
                </p>
              </div>
              <a
                href="https://github.com/AnbuSelvanOfficial/movies-mania"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-[5px] hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
              >
                View Code
              </a>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3">
                  <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-[5px]">
                    Web App
                  </span>
                  <h2 className="text-xl font-bold text-black">Next Js</h2>
                </div>
                <p className="mt-4 text-lg text-gray-700">
                  My Portfolio Web App build using Next Js 14.0.2
                </p>
              </div>
              <a
                href="https://anbuselvan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-[5px] hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
              >
                View Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
