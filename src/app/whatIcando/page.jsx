'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
const skills = [
  {
    category: 'DevOps & Cloud',
    items: ['CI/CD'],
    icon: '🚀',
  },
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java'],
    icon: '💻',
  },
  {
    category: 'Web Technologies',
    items: ['Node.js', 'React', 'Angular', 'Vue.js', 'Express.js', 'Django', 'Spring Boot'],
    icon: '🌐',
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL'],
    icon: '🗄️',
  },
  {
    category: 'Tools & Infrastructure',
    items: ['Git', 'Linux'],
    icon: '🛠️',
  }
];

export default function WhatICanDo() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">What I Can Do</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{skill.icon}</span>
                <h2 className="text-2xl font-semibold">{skill.category}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-gray-500 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
    </>
  );
} 