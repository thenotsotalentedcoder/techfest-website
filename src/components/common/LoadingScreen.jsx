// src/components/common/LoadingScreen.jsx
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-tech-dark"
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          {/* Background circuit pattern */}
          <div className="absolute inset-0 w-32 h-32 rounded-full bg-tech-blue/5 animate-ping"></div>
          
          {/* Loading animation dots */}
          <div className="flex space-x-3 relative z-10">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -15, 0],
                  backgroundColor: [
                    'rgb(0, 191, 255)',
                    'rgb(157, 0, 255)',
                    'rgb(0, 191, 255)'
                  ]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut'
                }}
                className="w-4 h-4 rounded-full"
              />
            ))}
          </div>
        </div>
        
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-6 text-white font-medium"
        >
          Loading...
        </motion.p>
        
        {/* Animated spinner */}
        <motion.div 
          className="mt-4 w-8 h-8 border-2 border-tech-blue rounded-full border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;