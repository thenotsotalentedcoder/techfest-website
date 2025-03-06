// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-tech-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="tech-glow" style={{ width: '400px', height: '400px', backgroundColor: '#00BFFF', top: '10%', left: '-10%', opacity: '0.07', filter: 'blur(120px)' }}></div>
        <div className="tech-glow" style={{ width: '400px', height: '400px', backgroundColor: '#9B51E0', bottom: '10%', right: '-10%', opacity: '0.07', filter: 'blur(120px)' }}></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 tech-lines opacity-10"></div>
        
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-tech-blue/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, -100],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 7,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      <div className="text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tech-blue via-purple-500 to-pink-500">
            404
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved to another URL.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-tech-blue to-purple-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-tech-blue/20"
            >
              Back to Home
            </Link>
            <Link
              to="/events"
              className="px-6 py-3 rounded-full bg-tech-darker border border-tech-blue text-tech-blue hover:bg-tech-blue/10 transition-colors"
            >
              View Events
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;