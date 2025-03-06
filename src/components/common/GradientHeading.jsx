// src/components/common/GradientHeading.jsx
import React from 'react';
import { motion } from 'framer-motion';

const GradientHeading = ({ children, level = 2, className = '', delay = 0 }) => {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  const baseClasses = `font-bold bg-clip-text text-transparent bg-gradient-to-r from-tech-blue via-purple-500 to-pink-500 ${className}`;
  
  const sizes = {
    1: 'text-5xl md:text-7xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg'
  };
  
  const HeadingTag = `h${level}`;
  
  return (
    <motion.div
      variants={headingVariants}
      initial="hidden"
      animate="visible"
    >
      <HeadingTag className={`${baseClasses} ${sizes[level]}`}>
        {children}
      </HeadingTag>
    </motion.div>
  );
};

export default GradientHeading;