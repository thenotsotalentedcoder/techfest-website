// src/components/home/HeroSection.jsx
import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set Tech Fest '25 date
  useEffect(() => {
    const targetDate = new Date('April 15, 2025').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Create static background elements instead of regenerating them
  const backgroundElements = useMemo(() => {
    const elements = [];
    const colors = ['rgba(0, 191, 255, 0.2)', 'rgba(155, 81, 224, 0.15)', 'rgba(255, 0, 255, 0.1)'];
    const positions = [
      { top: '10%', left: '15%', size: 300 },
      { top: '65%', left: '80%', size: 250 },
      { top: '40%', left: '5%', size: 200 },
      { top: '30%', left: '70%', size: 350 },
      { top: '70%', left: '30%', size: 280 }
    ];
    
    // Create fixed position glow elements
    positions.forEach((pos, i) => {
      elements.push(
        <div 
          key={`glow-${i}`}
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            backgroundColor: colors[i % colors.length],
            top: pos.top,
            left: pos.left,
          }}
        />
      );
    });
    
    // Create static particles
    for (let i = 0; i < 50; i++) {
      elements.push(
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-tech-blue/40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, -100],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 7,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      );
    }
    
    return elements;
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        delay: custom * 0.2,
        ease: "easeOut"
      }
    })
  };

  // Background animation for the gradient effect
  const backgroundAnimation = {
    animate: {
      background: [
        'radial-gradient(circle at 20% 30%, rgba(0, 191, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        'radial-gradient(circle at 70% 60%, rgba(155, 81, 224, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
        'radial-gradient(circle at 40% 80%, rgba(255, 0, 255, 0.08) 0%, rgba(0, 0, 0, 0) 70%)',
        'radial-gradient(circle at 60% 20%, rgba(0, 191, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        'radial-gradient(circle at 20% 30%, rgba(0, 191, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)'
      ],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tech-dark">
      {/* Fixed background elements */}
      <div className="absolute inset-0 z-0">
        {/* Static overlay with slow animation */}
        <motion.div 
          className="absolute inset-0" 
          initial="animate"
          animate="animate"
          variants={backgroundAnimation}
        />
        
        {/* Static glow elements and particles */}
        {backgroundElements}
      </div>

      <div className="container mx-auto px-4 py-16 pt-32 text-center z-10 relative">
        <motion.h1 
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00BFFF] via-[#9B51E0] to-[#FF00FF]"
        >
          TECH FEST <span className="text-white">'25</span>
        </motion.h1>
        
        <motion.div
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          {/* Improved "Coming Soon" text with tech font and effect */}
          <div className="flex items-center justify-center space-x-3">
            <span className="text-xl font-cyber md:text-2xl tracking-wider relative">
              <span className="absolute inset-0 animate-pulse-light opacity-50 blur-sm bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-purple-500">Coming Soon</span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-purple-500">Coming Soon</span>
            </span>
            <span className="h-6 w-px bg-gray-500/50"></span>
            <span className="text-xl md:text-2xl">The biggest tech event at NED University</span>
          </div>
        </motion.div>
        
        {/* Countdown timer */}
        <motion.div 
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center space-x-4 md:space-x-8 mb-12"
        >
          {Object.entries(countdown).map(([label, value]) => (
            <div key={label} className="flex flex-col">
              <motion.div 
                className="bg-tech-darker/80 backdrop-blur-md w-16 md:w-24 h-16 md:h-24 rounded-lg flex items-center justify-center text-xl md:text-3xl mb-2 border border-tech-blue/20 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/10 to-purple-500/10 opacity-50" />
                <span>{value}</span>
              </motion.div>
              <span className="text-sm uppercase tracking-wide">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;