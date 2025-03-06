// src/components/common/GradientButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GradientButton = ({ to, href, onClick, children, className = '' }) => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.98 }
  };

  const baseClasses = `relative inline-block px-6 py-3 rounded-full overflow-hidden ${className}`;
  
  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-tech-blue via-purple-500 to-pink-500"></span>
      <span className="relative z-10 text-white font-medium">{children}</span>
    </>
  );

  if (to) {
    return (
      <motion.div
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="inline-block"
      >
        <Link to={to} className={baseClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="inline-block"
      >
        <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
};

export default GradientButton;