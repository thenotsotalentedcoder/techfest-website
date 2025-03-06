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
      <div className="bg-tech-darker py-16 mb-12 circuit-bg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <div className="w-24 h-24 rounded-full p-1" style={{ background: `linear-gradient(135deg, ${club.color}, ${club.color}80)` }}>
                <div className="w-full h-full bg-tech-dark rounded-full flex items-center justify-center">
                  <span className="text-3xl font-medium" style={{ color: club.color }}>{club.name.charAt(0)}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold mb-4"
              style={{ color: club.color }}
            >
              {club.name}
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-2xl"
            >
              {club.domain} - {club.shortDesc}
            </motion.p>
            
            {club.socialLinks && club.socialLinks.linkedin && (
              <motion.a
                variants={itemVariants}
                href={club.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center hover:underline"
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
      
      {/* Club Details Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* About Section */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">About {club.name}</h2>
            <p className="text-gray-300 mb-6">
              {club.description || `${club.name} is a student-led organization dedicated to fostering learning and innovation in the field of ${club.domain}. The club organizes workshops, competitions, and collaborative projects to enhance practical knowledge.`}
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Activities</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li className="animate-fade-in-1">Regular technical workshops</li>
              <li className="animate-fade-in-2">Industry connect sessions</li>
              <li className="animate-fade-in-3">Competitions and hackathons</li>
              <li className="animate-fade-in-4">Project collaborations</li>
            </ul>
          </motion.div>
          
          {/* Team Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-tech-darker rounded-xl p-6 border border-gray-800"
            style={{ borderColor: `${club.color}40` }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Team</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Team Lead</h3>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: `${club.color}20` }}>
                  <span style={{ color: club.color }}>TL</span>
                </div>
                <div>
                  <p className="font-medium text-white">Team Lead Name</p>
                  <p className="text-sm text-gray-400">Student, CSIT</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Faculty Advisor</h3>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: `${club.color}20` }}>
                  <span style={{ color: club.color }}>FA</span>
                </div>
                <div>
                  <p className="font-medium text-white">Faculty Name</p>
                  <p className="text-sm text-gray-400">Professor, CSIT</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Recent Events Section */}
        <motion.div 
          variants={itemVariants}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-white">Recent Events</h2>
          
          <div 
            className="bg-tech-darker rounded-xl p-6 border border-gray-800 hover:shadow-lg transition-all duration-300"
            style={{ borderColor: `${club.color}40`, boxShadow: `0 4px 20px -5px ${club.color}20` }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Tech Fest '24 Workshop</h3>
            <p className="text-gray-300 mb-4">
              A hands-on workshop focusing on the latest technologies in {club.domain}.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: `${club.color}20`, color: club.color }}>Workshop</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm">Tech Fest '24</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ClubPage;