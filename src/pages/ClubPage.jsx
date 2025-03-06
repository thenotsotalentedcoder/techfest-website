// src/pages/ClubPage.jsx
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { clubsData } from '../data/clubsData';

const ClubPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const club = clubsData.find(c => c.slug === slug);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!club) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-tech-dark text-white">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Club not found</h2>
          <Link to="/" className="text-tech-blue hover:underline">Return to home</Link>
        </div>
      </div>
    );
  }

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-24 pb-16 bg-tech-dark text-white"
    >
      {/* Hero Section */}
      <div className="bg-tech-darker py-12 md:py-16 mb-8 md:mb-12 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          {/* Gradient glows */}
          <div className="tech-glow" style={{ width: '300px', height: '300px', backgroundColor: club.color, top: '20%', left: '-10%', opacity: '0.07', filter: 'blur(120px)' }}></div>
          <div className="tech-glow" style={{ width: '250px', height: '250px', backgroundColor: club.color, bottom: '10%', right: '-10%', opacity: '0.07', filter: 'blur(100px)' }}></div>
          
          {/* Animated particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: club.color,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.4
              }}
              animate={{
                y: [-20, -100],
                x: [0, Math.random() * 50 - 25],
                opacity: [0.4, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 7,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
          
          {/* Tech lines background */}
          <div className="absolute inset-0 tech-lines opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              variants={itemVariants}
              className="mb-4 md:mb-6"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-1" style={{ background: `linear-gradient(135deg, ${club.color}, ${club.color}80)` }}>
                <div className="w-full h-full bg-tech-dark rounded-full flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-medium" style={{ color: club.color }}>{club.name.charAt(0)}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-3 md:mb-4"
              style={{ color: club.color }}
            >
              {club.name}
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 max-w-2xl"
            >
              {club.domain} - {club.shortDesc}
            </motion.p>
            
            {club.socialLinks && club.socialLinks.linkedin && (
              <motion.a
                variants={itemVariants}
                href={club.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-6 inline-flex items-center hover:underline"
                style={{ color: club.color }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      {/* Club Description Section */}
      <div className="container mx-auto px-4">
        <motion.div 
          variants={itemVariants}
          className="bg-tech-darker rounded-xl p-5 md:p-8 border border-gray-800 hover:border-opacity-70 hover:border-tech-blue/20 transition-all duration-500 mb-8 md:mb-12"
          style={{ borderColor: `${club.color}30` }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">About {club.name}</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words overflow-hidden">
            {club.description}
          </p>
        </motion.div>
        
        {/* Faculty Lead Section - Only display if there are faculty leads */}
        {(club.facultyLead || club.emailLead) && (
          <motion.div 
            variants={itemVariants}
            className="bg-tech-darker rounded-xl p-5 md:p-8 border border-gray-800 hover:border-opacity-70 hover:border-tech-blue/20 transition-all duration-500 mb-8 md:mb-12"
            style={{ borderColor: `${club.color}30` }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">Faculty Leads</h2>
            
            {club.facultyLead && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Faculty</h3>
                <p className="text-gray-300 text-sm md:text-base break-words">{club.facultyLead}</p>
              </div>
            )}
            
            {club.emailLead && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
                <p className="text-gray-300 text-sm md:text-base break-words">{club.emailLead}</p>
              </div>
            )}
            
            <div className="mt-6 text-gray-400 text-sm md:text-base">
              <p>Feel free to reach out to the faculty leads for more information about the club and how to get involved.</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ClubPage;