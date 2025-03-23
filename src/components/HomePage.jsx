'use client';

import React from "react";
import Link from "next/link";
import "../app/style.css";
import { FaUser, FaArrowRight, FaAndroid, FaApple } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 bg-gray-800 backdrop-blur-lg rounded-[5px] sm:rounded-[5px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)] mx-4 sm:mx-6 border-2 border-gray-700 hover:shadow-[0_20px_60px_rgba(0,_0,_0,_0.8)] transition-all duration-500">
        <div className="text-center lg:text-left space-y-8 sm:space-y-10">
          <div className="animate-fadeIn space-y-6">
            <p className="text-lg sm:text-xl font-bold tracking-wider mb-3 animate-slideUp text-white">WELCOME TO MY PORTFOLIO</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight animate-slideUp delay-100">
              I'm{" "}
              <span className="font-extrabold text-white block sm:inline-block mt-2 sm:mt-0 animate-pulse hover:text-gray-300 transition-all duration-300">
                ANBU SELVAN
              </span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 animate-slideUp delay-300">
              <Link href="/about">
                <button className="w-full px-8 sm:px-10 py-4 sm:py-5 bg-gray-600 text-white rounded-[5px] flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,_0,_0,_0.4)] text-base sm:text-lg group">
                  <span className="mr-3 font-semibold">About Me</span>
                  <FaUser className="h-5 w-5 sm:h-6 sm:w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                </button>
              </Link>
              <Link href="/projects">
                <button className="w-full px-8 sm:px-10 py-4 sm:py-5 bg-gray-700 text-white border-3 border-gray-500 rounded-[5px] flex items-center justify-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,_0,_0,_0.2)] text-base sm:text-lg group">
                  <span className="mr-3 font-semibold">View Projects</span>
                  <FaArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </Link>
            </div>

            <p className="text-white text-lg sm:text-xl mt-6 animate-slideUp delay-200 font-medium">
              Currently working as a Mobile App Developer at <a href="https://wonchance.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-gray-300 transition-colors duration-300">WonChance</a> - a Casting Platform
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 animate-slideUp delay-300">
            <Link href="https://play.google.com/store/apps/details?id=com.wonchance">
              <button className="w-full px-8 sm:px-10 py-4 sm:py-5 bg-gray-700 text-white border-3 border-gray-500 rounded-[5px] flex items-center justify-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,_0,_0,_0.2)] text-base sm:text-lg group">
                <span className="mr-3 font-semibold">Android App</span>
                <FaAndroid className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </Link>
            <Link href="https://apps.apple.com/in/app/wonchance/id6740875415">
              <button className="w-full px-8 sm:px-10 py-4 sm:py-5 bg-gray-700 text-white border-3 border-gray-500 rounded-[5px] flex items-center justify-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,_0,_0,_0.2)] text-base sm:text-lg group">
                <span className="mr-3 font-semibold">iOS App</span>
                <FaApple className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </Link>
          </div>
        </div>

        <div className="center-content max-w-2xl text-left mx-auto lg:mx-0 w-full animate-fadeIn delay-500">
          <div className="bg-gray-700 backdrop-blur-lg rounded-[5px] p-8 sm:p-10 shadow-2xl border-2 border-gray-600 hover:shadow-[0_15px_30px_rgba(0,_0,_0,_0.3)] transition-all duration-300">
            <p className="text-lg sm:text-xl text-white leading-relaxed space-y-6 sm:space-y-8"> 
              <span className="block mb-6 sm:mb-8 hover:text-gray-300 transition-colors duration-300">
                Currently working at <a href="https://wonchance.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-gray-300 transition-colors duration-300">WonChance</a>, I am a skilled Mobile & Web App Developer with expertise in the complete mobile app development lifecycle, from initial concept to production deployment.
              </span>
              <span className="block mb-6 sm:mb-8 hover:text-gray-300 transition-colors duration-300">
                I specialize in building scalable mobile & web apps and implementing robust CI/CD pipelines for seamless deployment and monitoring.
              </span>
              <span className="block mb-6 sm:mb-8">
                Tech Stack:{" "}
                <span className="font-bold text-white hover:text-gray-300 transition-colors duration-300">
                  {[
                    "React.js",
                    "Next.js", 
                    "Node.js",
                    "Express.js",
                    "Fastify",
                    "Flutter",
                    "Dart",
                    "Firebase",
                    "Electron",
                    "GitHub Actions",
                    "MongoDB",
                    "React Native",
                    "TypeScript",
                    "Postman",
                    "Android Development",
                    "iOS Development",
                    "Vercel",
                  ].join(" • ")}
                </span>
              </span>
              <span className="block font-medium hover:text-gray-300 transition-colors duration-300">
                From development to deployment, I ensure your applications are built and delivered with excellence!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
