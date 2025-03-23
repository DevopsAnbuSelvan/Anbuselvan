'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const aboutInfo = [
  {
    category: 'Personal Details',
    items: [
      { label: 'Name', value: 'ANBU SELVAN R' },
      { label: 'Date of Birth', value: '19 Aug 2001' },
      { label: 'Qualification', value: 'MCA' },
      { label: 'Marital Status', value: 'Single' },
      { label: 'Nationality', value: 'Indian' },
      { label: 'Language Known', value: 'English' }
    ],
    icon: '👤'
  },
  {
    category: 'Experience',
    items: [
      { label: 'Years Experience', value: '2+' },
      { label: 'Projects Completed', value: '5+' }
    ],
    icon: '⚡'
  }
];

export default function About() {
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
          <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutInfo.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{section.icon}</span>
                  <h2 className="text-2xl font-semibold">{section.category}</h2>
                </div>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div key={item.label} className="flex flex-wrap gap-2">
                      <span className="bg-gray-500 px-3 py-1 rounded-full text-sm">
                        {item.label}
                      </span>
                      <span className="text-sm text-gray-300">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex justify-center"
          >
            <img
              src="https://anbuselvanofficial.web.app/images/Photo1.png"
              alt="Anbu Selvan R"
              className="w-72 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
