'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "../../components/Navbar";
import "../style.css";

const projects = [
  {
    category: 'Android App',
    tech: 'React Native',
    description: 'An Android Application build using React Native & Expo Go for people or Organization who needs Blood for Emergency.',
    link: 'https://github.com/AnbuSelvanOfficial/Blood-App',
    linkText: 'View Code'
  },
  {
    category: 'Web App', 
    tech: 'React Js',
    description: 'An To-Do List web based Application build using React Js.',
    link: 'https://todolist-d5cf8.web.app/',
    linkText: 'View App'
  },
  {
    category: 'Website',
    tech: 'HTML,CSS,Js',
    description: 'My Portfolio Website build using simple HTML, CSS, Js.',
    link: 'https://anbuselvanofficial.web.app',
    linkText: 'View Website'
  },
  {
    category: 'Android App',
    tech: 'React Native',
    description: 'An Android Application build using React Native & Expo Go, NodeJs, Firebase for Staff and Student Mentoring System for their Semester Projects.',
    link: 'https://github.com/AnbuSelvanOfficial/promentor',
    linkText: 'View Code'
  },
  {
    category: 'Android App',
    tech: 'React Native', 
    description: 'An Android Application build using React Native & Expo Go, NodeJs, Firebase for View and Review for Latest Movies.',
    link: 'https://github.com/AnbuSelvanOfficial/movies-mania',
    linkText: 'View Code'
  },
  {
    category: 'Web App',
    tech: 'Next Js',
    description: 'My Portfolio Web App build using Next Js 14.0.2',
    link: 'https://anbuselvan.vercel.app/',
    linkText: 'View Site'
  }
];

export default function Projects() {
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
          <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <span className="bg-gray-500 px-3 py-1 rounded-full text-sm mr-3">
                    {project.category}
                  </span>
                  <h2 className="text-2xl font-semibold">{project.tech}</h2>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  {project.linkText}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
