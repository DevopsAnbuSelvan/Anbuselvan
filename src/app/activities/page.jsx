'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const activities = [
  {
    year: '2019',
    type: 'Workshop',
    description: 'Participated in Two Days Hands-on Workshop on "Recent Developments in Databases".'
  },
  {
    year: '2020',
    type: 'Workshop', 
    description: 'Participated in the "State level Workshop on IoT (4.0)".'
  },
  {
    year: '2020',
    type: 'Workshop',
    description: 'Participated in the workshop of "Part of Computer Technology in Tamil learning and Teaching".'
  },
  {
    year: '2020',
    type: 'Tech Meet',
    description: 'Participated & Won I prize in PAPER PRESENTATION'
  },
  {
    year: '2020',
    type: 'Tech Feast',
    description: 'Participated & Won prize in Quiz competition in Intercollegiate Meet'
  },
  {
    year: '2021',
    type: 'Examination',
    description: 'Passed MADHYAMA Examination in First Class'
  }
];

export default function Activities() {
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
          <h1 className="text-4xl font-bold mb-8 text-center">My Extra Activities</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <span className="bg-gray-500 px-3 py-1 rounded-full text-sm mr-3">
                    {activity.year}
                  </span>
                  <h2 className="text-2xl font-semibold">{activity.type}</h2>
                </div>
                <p className="text-gray-300">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
