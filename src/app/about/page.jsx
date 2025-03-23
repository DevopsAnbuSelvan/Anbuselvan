import React from "react";
import Navbar from "../../components/Navbar";
import "../style.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 animate-gradient p-4 sm:p-6">
        <div className="w-full max-w-[1440px] bg-white/95 backdrop-blur-lg rounded-[5px] sm:rounded-[5px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(75,_85,_99,_0.7)] mx-4 sm:mx-6 border-2 border-white/30 hover:shadow-[0_20px_60px_rgba(75,_85,_99,_0.8)] transition-all duration-500">
          <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-black animate-fadeIn">
            About Me
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 animate-slideUp delay-100">
            <div className="flex flex-col justify-center items-left bg-white/80 backdrop-blur-lg rounded-[5px] p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300">
              <p className="text-xl text-gray-800 mb-4">
                <strong className="font-semibold">Name :</strong>{" "}
                <span className="text-black font-bold">ANBU SELVAN R</span>
              </p>
              <p className="text-xl text-gray-800 mb-4">
                <strong className="font-semibold">Date of Birth :</strong>{" "}
                <span className="text-black font-bold">19 Aug 2001</span>
              </p>
              <p className="text-xl text-gray-800 mb-4">
                <strong className="font-semibold">Qualification :</strong>{" "}
                <span className="text-black font-bold">MCA</span>
              </p>
              <p className="text-xl text-gray-800 mb-4">
                <strong className="font-semibold">Marital Status :</strong>{" "}
                <span className="text-black font-bold">Single</span>
              </p>
              <p className="text-xl text-gray-800 mb-4">
                <strong className="font-semibold">Nationality :</strong>{" "}
                <span className="text-black font-bold">Indian</span>
              </p>
              <p className="text-xl text-gray-800 mb-4">
                <strong className="font-semibold">Language Known :</strong>{" "}
                <span className="text-black font-bold">English</span>
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6 animate-slideUp delay-200">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-center px-8 py-4 rounded-[5px] w-full md:w-64 h-32 flex flex-col items-center justify-center hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(75,_85,_99,_0.4)]">
                <h2 className="text-3xl font-bold">2+</h2>
                <p className="text-lg">Years Experience</p>
              </div>

              <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-center px-8 py-4 rounded-[5px] w-full md:w-64 h-32 flex flex-col items-center justify-center hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(75,_85,_99,_0.4)]">
                <h2 className="text-3xl font-bold">5+</h2>
                <p className="text-lg">Projects completed</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center animate-fadeIn delay-300">
              <img
                src="https://anbuselvanofficial.web.app/images/Photo1.png"
                alt="Anbu Selvan R"
                className="w-72 rounded-[5px] shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] hover:shadow-[0_20px_40px_rgba(75,_85,_99,_0.4)] transition-all duration-300 transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
