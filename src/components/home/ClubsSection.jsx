// src/components/home/ClubsSection.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { clubsData } from '../../data/clubsData';

const ClubsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-20 relative overflow-hidden" style={{ 
      background: "linear-gradient(180deg, #000000 0%, #050510 100%)" 
    }}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient glow */}
        <div className="tech-glow" style={{ width: '400px', height: '400px', backgroundColor: '#00BFFF', top: '20%', left: '-5%', opacity: '0.05', filter: 'blur(100px)' }}></div>
        <div className="tech-glow" style={{ width: '350px', height: '350px', backgroundColor: '#9B51E0', bottom: '10%', right: '-5%', opacity: '0.05', filter: 'blur(100px)' }}></div>
        
        {/* Subtle animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-tech-blue/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 7,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Tech lines background - subtle grid */}
        <div className="absolute inset-0 tech-lines opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl font-cyber text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-tech-blue via-purple-500 to-pink-500"
        >
          Our CSIT Clubs
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {clubsData.map((club, index) => (
            <motion.div 
              key={club.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: `0 10px 25px -5px ${club.color}30`,
                transition: { duration: 0.3 }
              }}
              className="rounded-xl p-6 relative overflow-hidden"
              style={{ 
                background: `linear-gradient(145deg, rgba(15,15,20,0.95), rgba(10,10,15,0.98))`,
                backdropFilter: 'blur(5px)',
                border: `1px solid rgba(40,40,50,0.5)`,
              }}
            >
              {/* Accent corner */}
              <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden">
                <div className="absolute transform rotate-45 -translate-y-12 -translate-x-12 w-20 h-20" style={{ 
                  background: `linear-gradient(to right, ${club.color}20, ${club.color}40)`, 
                }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(145deg, ${club.color}30, ${club.color}10)`,
                      boxShadow: `0 0 15px ${club.color}20`
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-2xl font-medium" style={{ color: club.color }}>{club.name.charAt(0)}</span>
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-cyber mb-2 text-center">{club.name}</h3>
                
                <div className="h-px w-16 mx-auto mb-4" style={{ 
                  background: `linear-gradient(to right, transparent, ${club.color}, transparent)` 
                }}></div>
                
                <p className="text-gray-300 text-sm text-center mb-4 min-h-[40px]">{club.shortDesc}</p>
                
                <div className="text-center">
                  <Link
                    to={`/clubs/${club.slug}`}
                    className="inline-block px-6 py-2 rounded-full text-sm transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(to right, ${club.color}20, ${club.color}10)`,
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: club.color,
                      color: club.color
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = club.color;
                      e.currentTarget.style.color = '#0A0A0A';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = `linear-gradient(to right, ${club.color}20, ${club.color}10)`;
                      e.currentTarget.style.color = club.color;
                    }}
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClubsSection;