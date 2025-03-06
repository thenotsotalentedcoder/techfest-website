// src/components/common/GradientCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const GradientCard = ({ children, className = '', delay = 0 }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    },
    hover: {
      y: -5,
      boxShadow: '0 10px 30px -10px rgba(0, 191, 255, 0.3)',
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`relative rounded-xl p-[1px] bg-gradient-to-r from-tech-blue via-purple-500 to-pink-500 overflow-hidden ${className}`}
    >
      <div className="bg-tech-darker rounded-xl p-6 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GradientCard;