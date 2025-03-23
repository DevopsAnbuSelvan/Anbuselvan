'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const educationData = [
  {
    year: '2015',
    title: 'Computer Education',
    details: 'Diploma Course - OFFICE AUTOMATION, C, CPP & Java'
  },
  {
    year: '2017', 
    title: 'Secondary Education',
    details: '88.6% - Holy Cross Convent Matriculation School, Dindigul - TN'
  },
  {
    year: '2019',
    title: 'Higher Education', 
    details: 'Computer Maths - 62.66% - Holy Cross Convent Matriculation School, Dindigul - TN'
  },
  {
    year: '2022',
    title: 'Under-Graduate',
    details: 'B.Sc Computer Science, 74.97% - PASC College, under MK University, Dindigul - TN'
  },
  {
    year: '2022',
    title: 'Computer Education',
    details: 'Skilled in frameworks of ReactJs, React-Native, Flutter.'
  },
  {
    year: '2024',
    title: 'Post-Graduate',
    details: 'Master of Computer Application in RVS CE - Dgl under Anna University - TN'
  }
];

export default function Education() {
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
          <h1 className="text-4xl font-bold mb-8 text-center">My Education</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <span className="bg-gray-500 px-3 py-1 rounded-full text-sm mr-3">
                    {edu.year}
                  </span>
                  <h2 className="text-2xl font-semibold">{edu.title}</h2>
                </div>
                <p className="text-gray-300">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
