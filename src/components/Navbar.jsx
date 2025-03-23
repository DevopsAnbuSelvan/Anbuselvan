"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import "../app/style.css";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="bg-black/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Hidden on mobile, visible on md+ screens */}
            <div className="flex-shrink-0 hidden md:block">
              <a href="/" className="text-white text-3xl font-bold hover:text-gray-300 transition-colors">
                ANBU SELVAN
              </a>
            </div>

            {/* Desktop Navigation - Hidden on mobile, flex on md+ screens */}
            <div className="hidden md:flex">
              <div className="ml-4 flex items-center space-x-4 lg:space-x-6">
                <a
                  href="/"
                  className={`text-base lg:text-xl text-white hover:text-gray-300 p-2 transition-all ${
                    pathname === "/" ? "border-b-2 border-white font-semibold" : ""
                  }`}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className={`text-base lg:text-xl text-white hover:text-gray-300 p-2 transition-all ${
                    pathname === "/about" ? "border-b-2 border-white font-semibold" : ""
                  }`}
                >
                  About
                </a>
                <a
                  href="/education"
                  className={`text-base lg:text-xl text-white hover:text-gray-300 p-2 transition-all ${
                    pathname === "/education" ? "border-b-2 border-white font-semibold" : ""
                  }`}
                >
                  Education
                </a>
                <a
                  href="/activities"
                  className={`text-base lg:text-xl text-white hover:text-gray-300 p-2 transition-all ${
                    pathname === "/activities" ? "border-b-2 border-white font-semibold" : ""
                  }`}
                >
                  Activities
                </a>
                <a
                  href="/projects"
                  className={`text-base lg:text-xl text-white hover:text-gray-300 p-2 transition-all ${
                    pathname === "/projects" ? "border-b-2 border-white font-semibold" : ""
                  }`}
                >
                  Projects
                </a>
                {/* <a
                  href="/whatIcando"
                  className={`text-base lg:text-xl text-white hover:text-gray-300 p-2 transition-all ${
                    pathname === "/whatIcando" ? "border-b-2 border-white font-semibold" : ""
                  }`}
                >
                  What I Can Do
                </a> */}
                <a
                  href="/contact"
                  className={`text-base lg:text-xl text-white hover:text-gray-300 p-2 transition-all ${
                    pathname === "/contact" ? "border-b-2 border-white font-semibold" : ""
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile Menu Button - Visible on mobile, hidden on md+ screens */}
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
                onClick={toggleNavbar}
                aria-label="Toggle menu"
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6L18 18"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slides down when menu button is clicked */}
        {isClick && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-4 pt-2 pb-3 space-y-2">
              <a
                href="/"
                className={`block text-lg text-white hover:text-gray-300 p-3 rounded-lg transition-all ${
                  pathname === "/" ? "bg-gray-800 font-semibold" : ""
                }`}
              >
                Home
              </a>
              <a
                href="/about"
                className={`block text-lg text-white hover:text-gray-300 p-3 rounded-lg transition-all ${
                  pathname === "/about" ? "bg-gray-800 font-semibold" : ""
                }`}
              >
                About
              </a>
              <a
                href="/education"
                className={`block text-lg text-white hover:text-gray-300 p-3 rounded-lg transition-all ${
                  pathname === "/education" ? "bg-gray-800 font-semibold" : ""
                }`}
              >
                Education
              </a>
              <a
                href="/activities"
                className={`block text-lg text-white hover:text-gray-300 p-3 rounded-lg transition-all ${
                  pathname === "/activities" ? "bg-gray-800 font-semibold" : ""
                }`}
              >
                Activities
              </a>
              <a
                href="/projects"
                className={`block text-lg text-white hover:text-gray-300 p-3 rounded-lg transition-all ${
                  pathname === "/projects" ? "bg-gray-800 font-semibold" : ""
                }`}
              >
                Projects
              </a>
              {/* <a
                href="/whatIcando"
                className={`block text-lg text-white hover:text-gray-300 p-3 rounded-lg transition-all ${
                  pathname === "/whatIcando" ? "bg-gray-800 font-semibold" : ""
                }`}
              >
                What I Can Do
              </a> */}
              <a
                href="/contact"
                className={`block text-lg text-white hover:text-gray-300 p-3 rounded-lg transition-all ${
                  pathname === "/contact" ? "bg-gray-800 font-semibold" : ""
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;
