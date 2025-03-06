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

  // Function to get club-specific background elements
  const getClubBackgroundElement = (clubSlug) => {
    switch(clubSlug) {
      case 'koderz-club':
        return (
          <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
            {/* Code brackets and symbols */}
            <div className="absolute top-2 left-2 text-xl opacity-80" style={{ color: '#EB5757' }}>{'{}'}</div>
            <div className="absolute bottom-2 right-2 text-xl opacity-80" style={{ color: '#EB5757' }}>&lt;/&gt;</div>
            <div className="absolute top-1/2 left-1/4 text-xs opacity-60" style={{ color: '#EB5757' }}>for(i=0;i&lt;n;i++)</div>
            <div className="absolute top-1/3 right-1/4 text-xs opacity-60" style={{ color: '#EB5757' }}>function()</div>
            <div className="absolute bottom-1/3 left-1/3 text-xs opacity-60" style={{ color: '#EB5757' }}>while(true)</div>
            
            {/* Animated code particles */}
            <motion.div 
              className="absolute text-xs"
              style={{ color: '#EB5757', top: '20%', left: '10%' }}
              animate={{ y: [0, -20], opacity: [0.4, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
            >
              if()
            </motion.div>
            <motion.div 
              className="absolute text-xs"
              style={{ color: '#EB5757', bottom: '20%', right: '10%' }}
              animate={{ y: [0, -15], opacity: [0.4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', delay: 1 }}
            >
              return;
            </motion.div>
          </div>
        );
      
      case 'cyber-sents':
        return (
          <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
            {/* Binary code and security symbols */}
            <div className="absolute top-2 right-2 text-xl opacity-80" style={{ color: '#2D9CDB' }}>🔒</div>
            <div className="absolute bottom-2 left-2 text-xs opacity-80" style={{ color: '#2D9CDB' }}>01001010</div>
            
            {/* Matrix-like digital rain effect */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div 
                key={`cyber-rain-${i}`}
                className="absolute text-xs tracking-widest"
                style={{ 
                  color: '#2D9CDB', 
                  left: `${15 + (i * 30)}%`, 
                  top: '-10%',
                  opacity: 0.7
                }}
                animate={{ 
                  y: ['0%', '120%'],
                  opacity: [0.7, 0]
                }}
                transition={{ 
                  duration: 3 + (i * 0.7), 
                  repeat: Infinity, 
                  repeatType: 'loop',
                  delay: i * 0.5
                }}
              >
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j}>{Math.round(Math.random())}</div>
                ))}
              </motion.div>
            ))}

            {/* Shield icon */}
            <motion.div
              className="absolute text-2xl"
              style={{ color: '#2D9CDB', bottom: '15%', right: '15%' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
            >
              🛡️
            </motion.div>
          </div>
        );
      
      case 'ai-alliance':
        return (
          <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
            {/* Neural network nodes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle cx="30" cy="30" r="2" fill="#9B51E0" opacity="0.8" />
              <circle cx="70" cy="35" r="2" fill="#9B51E0" opacity="0.8" />
              <circle cx="45" cy="60" r="2" fill="#9B51E0" opacity="0.8" />
              <circle cx="75" cy="70" r="2" fill="#9B51E0" opacity="0.8" />
              <circle cx="20" cy="75" r="2" fill="#9B51E0" opacity="0.8" />
              
              <line x1="30" y1="30" x2="70" y2="35" stroke="#9B51E0" strokeWidth="0.5" opacity="0.5" />
              <line x1="30" y1="30" x2="45" y2="60" stroke="#9B51E0" strokeWidth="0.5" opacity="0.5" />
              <line x1="70" y1="35" x2="45" y2="60" stroke="#9B51E0" strokeWidth="0.5" opacity="0.5" />
              <line x1="70" y1="35" x2="75" y2="70" stroke="#9B51E0" strokeWidth="0.5" opacity="0.5" />
              <line x1="45" y1="60" x2="75" y2="70" stroke="#9B51E0" strokeWidth="0.5" opacity="0.5" />
              <line x1="45" y1="60" x2="20" y2="75" stroke="#9B51E0" strokeWidth="0.5" opacity="0.5" />
            </svg>
            
            {/* Pulsing AI brain */}
            <motion.div
              className="absolute text-xl sm:text-2xl"
              style={{ color: '#9B51E0', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
            >
              🧠
            </motion.div>
            
            {/* Animated data points */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={`ai-data-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{ 
                  backgroundColor: '#9B51E0',
                  top: `${20 + (i * 25)}%`, 
                  left: `${15 + (i * 30)}%`
                }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: 'loop',
                  delay: i * 0.7
                }}
              />
            ))}
          </div>
        );
      
      case 'data-insights':
        return (
          <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
            {/* Data visualization elements */}
            <div className="absolute left-0 bottom-0 w-full h-6 sm:h-8">
              {/* Bar chart */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={`data-bar-${i}`}
                  className="absolute bottom-0 w-1 sm:w-2 rounded-t"
                  style={{ 
                    backgroundColor: '#27AE60',
                    left: `${10 + (i * 15)}%`,
                    height: '10%'
                  }}
                  animate={{ height: [`${10 + (i * 5)}%`, `${20 + (i * 7)}%`, `${10 + (i * 5)}%`] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: 'loop', delay: i * 0.2 }}
                />
              ))}
            </div>
            
            {/* Pie chart */}
            <svg className="absolute top-2 right-2 w-7 h-7 sm:w-10 sm:h-10" viewBox="0 0 100 100">
              <motion.path
                d="M50 50 L50 10 A40 40 0 0 1 90 50 Z"
                fill="#27AE60"
                opacity="0.7"
                animate={{ opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.path
                d="M50 50 L90 50 A40 40 0 0 1 50 90 Z"
                fill="#27AE60"
                opacity="0.5"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
              <motion.path
                d="M50 50 L50 90 A40 40 0 0 1 10 50 Z"
                fill="#27AE60"
                opacity="0.6"
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              <motion.path
                d="M50 50 L10 50 A40 40 0 0 1 50 10 Z"
                fill="#27AE60"
                opacity="0.4"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </svg>
            
            {/* Floating database icon */}
            <motion.div
              className="absolute text-base sm:text-xl"
              style={{ color: '#27AE60', top: '30%', left: '20%' }}
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'loop' }}
            >
              📊
            </motion.div>
          </div>
        );
      
      case 'ledger-league':
        return (
          <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
            {/* Blockchain elements */}
            <div className="absolute inset-0">
              {/* Chain of blocks */}
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={`block-${i}`} className="absolute">
                  <motion.div
                    className="absolute w-6 sm:w-8 h-5 sm:h-6 rounded-sm border border-current flex items-center justify-center text-xs"
                    style={{ 
                      color: '#F2C94C', 
                      top: `${20 + (i * 18)}%`, 
                      left: `${20 + (i * 15)}%`
                    }}
                    animate={{ x: [-2, 2, -2], opacity: [0.6, 0.8, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'loop', delay: i * 0.5 }}
                  >
                    {i}
                  </motion.div>
                  
                  {/* Connection line to next block */}
                  {i < 3 && (
                    <motion.div
                      className="absolute w-8 sm:w-10 h-px bg-current"
                      style={{ 
                        color: '#F2C94C', 
                        top: `${23 + (i * 18)}%`, 
                        left: `${26 + (i * 15)}%`,
                        transform: 'rotate(30deg)',
                        transformOrigin: 'left center'
                      }}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', delay: i * 0.5 }}
                    />
                  )}
                </div>
              ))}
            </div>
            
            {/* Bitcoin symbol */}
            <motion.div
              className="absolute text-lg sm:text-2xl"
              style={{ color: '#F2C94C', bottom: '15%', right: '15%' }}
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'loop' }}
            >
              ₿
            </motion.div>
            
            {/* Ethereum symbol */}
            <motion.div
              className="absolute text-base sm:text-xl"
              style={{ color: '#F2C94C', top: '15%', right: '25%' }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
            >
              Ξ
            </motion.div>
          </div>
        );
      
      case 'qubit-qrew':
        return (
          <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
            {/* Quantum computing elements */}
            <div className="absolute inset-0">
              {/* Quantum circuit */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="10" y1="20" x2="90" y2="20" stroke="#56CCF2" strokeWidth="0.5" opacity="0.7" />
                <line x1="10" y1="40" x2="90" y2="40" stroke="#56CCF2" strokeWidth="0.5" opacity="0.7" />
                <line x1="10" y1="60" x2="90" y2="60" stroke="#56CCF2" strokeWidth="0.5" opacity="0.7" />
                <line x1="10" y1="80" x2="90" y2="80" stroke="#56CCF2" strokeWidth="0.5" opacity="0.7" />
                
                {/* Gate symbols */}
                <circle cx="30" cy="20" r="3" fill="none" stroke="#56CCF2" strokeWidth="0.5" opacity="0.8" />
                <rect x="27" y="37" width="6" height="6" fill="none" stroke="#56CCF2" strokeWidth="0.5" opacity="0.8" />
                <rect x="47" y="57" width="6" height="6" fill="none" stroke="#56CCF2" strokeWidth="0.5" opacity="0.8" />
                
                <line x1="30" y1="40" x2="30" y2="60" stroke="#56CCF2" strokeWidth="0.5" opacity="0.5" strokeDasharray="2,2" />
                <line x1="50" y1="20" x2="50" y2="80" stroke="#56CCF2" strokeWidth="0.5" opacity="0.5" strokeDasharray="2,2" />
                <line x1="70" y1="40" x2="70" y2="80" stroke="#56CCF2" strokeWidth="0.5" opacity="0.5" strokeDasharray="2,2" />
              </svg>
              
              {/* Animated quantum particles */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={`quantum-particle-${i}`}
                  className="absolute w-1 h-1 rounded-full"
                  style={{ 
                    backgroundColor: '#56CCF2', 
                    top: `${20 + (i * 15)}%`, 
                    left: '10%' 
                  }}
                  animate={{ 
                    left: ['10%', '90%'],
                    opacity: [0, 1, 0],
                    y: [0, Math.sin(i) * 10, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    repeatType: 'loop',
                    delay: i * 0.7,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            
            {/* Bloch sphere representation */}
            <motion.div
              className="absolute w-4 h-4 sm:w-6 sm:h-6 rounded-full border border-current flex items-center justify-center"
              style={{ color: '#56CCF2', top: '15%', right: '15%' }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, repeatType: 'loop' }}
            >
              <motion.div 
                className="absolute w-3 sm:w-4 h-px bg-current"
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 7, repeat: Infinity }}
              />
            </motion.div>
          </div>
        );
      
      case 'gameverse':
        return (
          <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
            {/* Gaming elements */}
            <div className="absolute top-2 left-2 text-lg sm:text-xl" style={{ color: '#6FCF97' }}>🎮</div>
            <div className="absolute bottom-2 right-2 text-lg sm:text-xl" style={{ color: '#6FCF97' }}>🎲</div>
            
            {/* Particle effects like in games */}
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={`game-particle-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{ 
                  backgroundColor: '#6FCF97', 
                  top: `${Math.random() * 100}%`, 
                  left: `${Math.random() * 100}%` 
                }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  y: [0, -20]
                }}
                transition={{ 
                  duration: 2 + Math.random() * 3, 
                  repeat: Infinity, 
                  repeatType: 'loop',
                  delay: i * 0.5
                }}
              />
            ))}
            
            {/* Pixel art style elements */}
            <div className="absolute top-1/3 left-1/4">
              <motion.div
                className="w-4 h-4 sm:w-5 sm:h-5 grid grid-cols-5 grid-rows-5"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'loop' }}
              >
                {Array.from({ length: 25 }).map((_, i) => (
                  <div 
                    key={`pixel-${i}`} 
                    className="w-1 h-1"
                    style={{ 
                      backgroundColor: Math.random() > 0.7 ? '#6FCF97' : 'transparent',
                      opacity: Math.random() * 0.7 + 0.3
                    }} 
                  />
                ))}
              </motion.div>
            </div>
            
            {/* 3D object wireframe */}
            <svg className="absolute bottom-1/3 right-1/4 w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 100 100">
              <motion.g
                animate={{ rotateY: 360, rotateX: 180 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'loop' }}
                style={{ transformOrigin: 'center' }}
              >
                <line x1="20" y1="20" x2="80" y2="20" stroke="#6FCF97" strokeWidth="1" opacity="0.7" />
                <line x1="20" y1="20" x2="20" y2="80" stroke="#6FCF97" strokeWidth="1" opacity="0.7" />
                <line x1="20" y1="80" x2="80" y2="80" stroke="#6FCF97" strokeWidth="1" opacity="0.7" />
                <line x1="80" y1="20" x2="80" y2="80" stroke="#6FCF97" strokeWidth="1" opacity="0.7" />
                
                <line x1="35" y1="35" x2="95" y2="35" stroke="#6FCF97" strokeWidth="1" opacity="0.5" />
                <line x1="35" y1="35" x2="35" y2="95" stroke="#6FCF97" strokeWidth="1" opacity="0.5" />
                <line x1="35" y1="95" x2="95" y2="95" stroke="#6FCF97" strokeWidth="1" opacity="0.5" />
                <line x1="95" y1="35" x2="95" y2="95" stroke="#6FCF97" strokeWidth="1" opacity="0.5" />
                
                <line x1="20" y1="20" x2="35" y2="35" stroke="#6FCF97" strokeWidth="1" opacity="0.6" />
                <line x1="80" y1="20" x2="95" y2="35" stroke="#6FCF97" strokeWidth="1" opacity="0.6" />
                <line x1="20" y1="80" x2="35" y2="95" stroke="#6FCF97" strokeWidth="1" opacity="0.6" />
                <line x1="80" y1="80" x2="95" y2="95" stroke="#6FCF97" strokeWidth="1" opacity="0.6" />
              </motion.g>
            </svg>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="py-16 sm:py-20 relative overflow-hidden" style={{ 
      background: "linear-gradient(180deg, #000000 0%, #050510 100%)" 
    }}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient glow */}
        <div className="tech-glow" style={{ width: '400px', height: '400px', backgroundColor: '#00BFFF', top: '20%', left: '-5%', opacity: '0.05', filter: 'blur(100px)' }}></div>
        <div className="tech-glow" style={{ width: '350px', height: '350px', backgroundColor: '#9B51E0', bottom: '10%', right: '-5%', opacity: '0.05', filter: 'blur(100px)' }}></div>
        
        {/* Subtle animated particles */}
        {[...Array(10)].map((_, i) => (
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
          className="text-2xl sm:text-3xl font-cyber text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-tech-blue via-purple-500 to-pink-500"
        >
          Our CSIT Clubs
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
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
              className="rounded-xl p-4 sm:p-6 relative overflow-hidden"
              style={{ 
                background: `linear-gradient(145deg, rgba(15,15,20,0.95), rgba(10,10,15,0.98))`,
                border: `1px solid rgba(40,40,50,0.5)`,
              }}
            >
              {/* Club-specific background elements */}
              {getClubBackgroundElement(club.slug)}
              
              {/* Accent corner */}
              <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 overflow-hidden">
                <div className="absolute transform rotate-45 -translate-y-10 sm:-translate-y-12 -translate-x-10 sm:-translate-x-12 w-16 sm:w-20 h-16 sm:h-20" style={{ 
                  background: `linear-gradient(to right, ${club.color}20, ${club.color}40)`, 
                }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <motion.div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(145deg, ${club.color}30, ${club.color}10)`,
                      boxShadow: `0 0 15px ${club.color}20`
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-xl sm:text-2xl font-medium" style={{ color: club.color }}>{club.name.charAt(0)}</span>
                  </motion.div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-cyber mb-2 text-center truncate">{club.name}</h3>
                
                <div className="h-px w-12 sm:w-16 mx-auto mb-3 sm:mb-4" style={{ 
                  background: `linear-gradient(to right, transparent, ${club.color}, transparent)` 
                }}></div>
                
                <p className="text-gray-300 text-xs sm:text-sm text-center mb-4 overflow-hidden line-clamp-2 h-8 sm:h-10">{club.shortDesc}</p>
                
                <div className="text-center">
                  <Link
                    to={`/clubs/${club.slug}`}
                    className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300"
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