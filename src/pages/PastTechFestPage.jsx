// src/pages/PastTechFestPage.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { techFestData } from '../data/techFestData';

const PastTechFestPage = () => {
  const { year } = useParams();
  const yearNum = parseInt(year);
  
  const festData = techFestData.past.find(fest => fest.year === yearNum);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [year]);

  if (!festData) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-tech-dark text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Tech Fest not found</h2>
          <p className="text-gray-400 mb-6">We couldn't find information for Tech Fest '{year}'</p>
          <Link 
            to="/techfest" 
            className="px-6 py-3 bg-tech-blue text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Back to Tech Fest
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-tech-dark text-white">
      {/* Hero Section */}
      <div className="tech-bg py-16 mb-12 relative">
        <div className="absolute inset-0">
          <div className="tech-glow" style={{ width: '300px', height: '300px', backgroundColor: '#00BFFF', top: '20%', left: '10%', opacity: '0.15', filter: 'blur(80px)' }}></div>
          <div className="tech-glow" style={{ width: '250px', height: '250px', backgroundColor: '#9B51E0', bottom: '10%', right: '20%', opacity: '0.1', filter: 'blur(60px)' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/techfest" className="text-tech-blue hover:underline mb-4 inline-block">
              ← Back to Tech Fest
            </Link>
            <h1 className="text-5xl font-bold mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-purple-500">
              Tech Fest '{festData.year.toString().slice(-2)}
            </h1>
            <h2 className="text-2xl font-medium text-white mb-6">
              {festData.theme}
            </h2>
          </motion.div>
        </div>
      </div>
      
      {/* Overview Section */}
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-tech-darker rounded-xl p-8 border border-gray-800"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Overview</h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            {festData.description}
          </p>
          
          <h4 className="text-xl font-medium mb-4 text-white">Highlights</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {festData.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-tech-blue mr-2">•</span>
                <span className="text-gray-300">{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      {/* Gallery Section */}
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {festData.galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-video bg-tech-darker rounded-lg flex items-center justify-center border border-gray-800 overflow-hidden"
              >
                {/* Replace with actual images when available */}
                <div className="text-gray-500">Image Placeholder</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Back to current Tech Fest button */}
      <div className="container mx-auto px-4 text-center">
        <Link 
          to="/techfest"
          className="px-8 py-3 bg-gradient-to-r from-tech-blue to-purple-500 text-white rounded-full inline-block hover:shadow-lg hover:shadow-tech-blue/20 transition-all"
        >
          Back to Tech Fest '25
        </Link>
      </div>
    </div>
  );
};

export default PastTechFestPage;